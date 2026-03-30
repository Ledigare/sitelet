import { cn } from "@/lib/utils";

interface SiteletLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SiteletLogo({ size = "md", className }: SiteletLogoProps) {
  return (
    <span
      className={cn(
        "font-heading font-extrabold tracking-[-0.03em]",
        size === "sm" && "text-base",
        size === "md" && "text-lg",
        size === "lg" && "text-xl",
        className
      )}
    >
      Site
      <span className="underline decoration-current/35 decoration-[0.08em] underline-offset-[0.15em]">
        let
      </span>
    </span>
  );
}

interface SiteletMarkProps {
  className?: string;
  inverted?: boolean;
}

export function SiteletMark({ className, inverted }: SiteletMarkProps) {
  const bg = inverted ? "var(--foreground)" : "currentColor";
  const fg = inverted ? "var(--background)" : "var(--background, #ffffff)";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="28" height="28" rx="7" fill={bg} />
      <rect x="10" y="8" width="12" height="12" rx="3" fill={fg} />
      <line x1="8" y1="25" x2="24" y2="25" stroke={fg} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
