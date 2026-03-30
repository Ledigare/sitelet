import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { SiteletMark, SiteletLogo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1200px] px-6 py-14 md:py-16">
        {/* Top row: logo left, contact right */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <SiteletMark inverted />
              <SiteletLogo />
            </div>
            <p className="text-sm text-background/50">
              Hemsidor som faktiskt funkar.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 md:items-end">
            <a
              href="mailto:adam@sitelet.se"
              className="text-sm text-background/70 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              adam@sitelet.se
            </a>
            <a
              href="tel:+46722893346"
              className="text-sm text-background/70 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              072-289 33 46
            </a>
            <p className="text-sm text-background/40">
              Ronneby, Sverige
            </p>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-10 border-background/10" />

        {/* Nav links + privacy */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-background/50 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/integritetspolicy"
              className="text-background/50 transition-colors duration-150 hover:text-background rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
            >
              Integritetspolicy
            </Link>
          </nav>

          <p className="text-xs text-background/30">
            &copy; {new Date().getFullYear()} Sitelet
          </p>
        </div>

        {/* Legal info */}
        <div className="mt-8 flex flex-col items-center gap-1 text-center text-[11px] leading-relaxed text-background/25 md:items-start md:text-left">
          <p>Adam Zrek · Enskild firma · Org.nr 060101-8393</p>
          <p>Godkänd för F-skatt · Momsreg.nr SE060101839301</p>
          <p>Västra Torggatan 7 D, 372 30 Ronneby</p>
        </div>
      </div>
    </footer>
  );
}
