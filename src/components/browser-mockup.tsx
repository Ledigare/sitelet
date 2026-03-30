import Image from "next/image";

interface BrowserMockupProps {
  url: string;
  screenshot: string;
  alt: string;
  priority?: boolean;
}

export function BrowserMockup({ url, screenshot, alt, priority }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="h-2.5 w-2.5 rounded-full bg-border" />
          <div className="h-2.5 w-2.5 rounded-full bg-border" />
          <div className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md bg-secondary px-3 py-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-muted-foreground/50"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="truncate text-xs text-muted-foreground">{url}</span>
        </div>
      </div>
      {/* Screenshot — natural aspect ratio, no cropping */}
      <Image
        src={screenshot}
        alt={alt}
        width={1440}
        height={900}
        unoptimized
        className="block w-full h-auto"
        priority={priority}
      />
    </div>
  );
}
