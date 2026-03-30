import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, contact, message, website } = body;

    if (!name || !company || !contact || !message) {
      return NextResponse.json(
        { error: "Alla obligatoriska fält måste fyllas i." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Sitelet <kontakt@sitelet.se>",
      to: "adam@sitelet.se",
      replyTo: contact,
      subject: `Ny förfrågan från ${name} — ${company}`,
      html: `
        <h2>Ny förfrågan via sitelet.se</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Namn</td><td style="padding:8px 0;"><strong>${name}</strong></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Företag</td><td style="padding:8px 0;"><strong>${company}</strong></td></tr>
          <tr><td style="padding:8px 16px 8px 0;color:#666;">Kontakt</td><td style="padding:8px 0;"><a href="mailto:${contact}">${contact}</a></td></tr>
          ${website ? `<tr><td style="padding:8px 16px 8px 0;color:#666;">Hemsida</td><td style="padding:8px 0;"><a href="${website}">${website}</a></td></tr>` : ""}
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0;" />
        <p style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
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
