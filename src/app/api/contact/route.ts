import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// HTML escape to prevent XSS in email content
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// In-memory rate limiter: 5 requests per IP per 10 minutes
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW);
  rateMap.set(ip, recent);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "För många förfrågningar. Försök igen senare." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, contact, message, service, website, url_confirm } = body;

    // Honeypot: bots fill hidden fields, real users leave it empty
    if (url_confirm) {
      return NextResponse.json({ success: true });
    }

    if (!name || !company || !contact || !message) {
      return NextResponse.json(
        { error: "Alla obligatoriska fält måste fyllas i." },
        { status: 400 }
      );
    }

    // Input length validation
    if (
      typeof name !== "string" ||
      name.length > 100 ||
      typeof company !== "string" ||
      company.length > 100 ||
      typeof contact !== "string" ||
      contact.length > 200 ||
      typeof message !== "string" ||
      message.length > 5000 ||
      (website && (typeof website !== "string" || website.length > 500))
    ) {
      return NextResponse.json(
        { error: "Ett eller flera fält överskrider maxlängden." },
        { status: 400 }
      );
    }

    // Validate contact is email (contains @) or phone (starts with 0 or +)
    const isEmail = contact.includes("@");
    const isPhone = /^[0+]/.test(contact);
    if (!isEmail && !isPhone) {
      return NextResponse.json(
        { error: "Kontaktuppgift måste vara en e-postadress eller ett telefonnummer." },
        { status: 400 }
      );
    }

    // Validate website URL scheme if provided
    if (website && !/^https?:\/\//i.test(website)) {
      return NextResponse.json(
        { error: "Hemsida måste börja med http:// eller https://." },
        { status: 400 }
      );
    }

    // Escape all user input before interpolating into HTML
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeContact = escapeHtml(contact);
    const safeMessage = escapeHtml(message);
    const safeWebsite = website ? escapeHtml(website) : "";
    const safeService = service ? escapeHtml(service) : "hemsida";
    const serviceLabel = safeService === "marknadsforing" ? "Marknadsföring" : safeService === "bada" ? "Hemsida + Marknadsföring" : "Hemsida";

    await resend.emails.send({
      from: "Sitelet <kontakt@sitelet.se>",
      to: "adam@sitelet.se",
      replyTo: contact,
      subject: `Ny förfrågan (${serviceLabel}) från ${safeName} — ${safeCompany}`,
      html: `
        <h2>Ny förfrågan via sitelet.se</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Namn</td><td style="padding:8px 0;"><strong>${safeName}</strong></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Företag</td><td style="padding:8px 0;"><strong>${safeCompany}</strong></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Kontakt</td><td style="padding:8px 0;"><a href="mailto:${safeContact}">${safeContact}</a></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Tjänst</td><td style="padding:8px 0;"><strong>${serviceLabel}</strong></td></tr>
          ${safeWebsite ? `<tr><td style="padding:8px 16px 8px 0;color:#666;">Hemsida</td><td style="padding:8px 0;"><a href="${safeWebsite}">${safeWebsite}</a></td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</p>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="font-size:12px;color:#999;">Skickat via kontaktformuläret på sitelet.se</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Kunde inte skicka meddelandet." },
      { status: 500 }
    );
  }
}
