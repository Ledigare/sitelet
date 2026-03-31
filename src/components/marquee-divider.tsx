"use client";

interface MarqueeDividerProps {
  text: string;
  className?: string;
}

export function MarqueeDivider({ text, className = "" }: MarqueeDividerProps) {
  const repeated = `${text} — `.repeat(10);

  return (
    <div className={`select-none overflow-hidden py-4 ${className}`} aria-hidden="true">
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <div
        className="flex whitespace-nowrap text-[clamp(1rem,2vw,1.5rem)] font-heading font-bold tracking-tight text-foreground/[0.07]"
        style={{ animation: "scroll-left 30s linear infinite" }}
      >
        <span className="shrink-0">{repeated}</span>
        <span className="shrink-0">{repeated}</span>
      </div>
      <div
        className="mt-2 flex whitespace-nowrap text-[clamp(1rem,2vw,1.5rem)] font-heading font-bold tracking-tight text-foreground/[0.04]"
        style={{ animation: "scroll-right 35s linear infinite" }}
      >
        <span className="shrink-0">{repeated}</span>
        <span className="shrink-0">{repeated}</span>
      </div>
    </div>
  );
}
