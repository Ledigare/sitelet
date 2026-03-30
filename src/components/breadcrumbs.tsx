import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, i) => (
        <span key={item.href} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="h-3 w-3" />}
          {i === items.length - 1 ? (
            <span className="text-foreground">{item.label}</span>
          ) : (
            <Link href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
