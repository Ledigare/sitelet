import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border pt-10">
      <h2 className="font-heading text-lg font-semibold text-foreground">Relaterade artiklar</h2>
      <div className="mt-4 flex flex-col gap-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogg/${post.slug}`}
            className="group flex items-center justify-between rounded-lg border border-border p-4 transition-all duration-200 hover:bg-secondary hover:-translate-y-0.5"
          >
            <div>
              <p className="font-medium text-foreground group-hover:underline">{post.title}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{post.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
