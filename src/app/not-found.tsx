import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <span
        aria-hidden="true"
        className="font-heading text-[8rem] font-bold leading-none text-foreground/[0.06] md:text-[12rem]"
      >
        404
      </span>
      <h1 className="-mt-6 font-heading text-2xl font-semibold md:-mt-10 md:text-3xl">
        Sidan hittades inte
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        Sidan du letar efter finns inte eller har flyttats.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Tillbaka hem
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
