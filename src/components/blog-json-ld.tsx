import type { BlogPost } from "@/lib/blog";

export function BlogJsonLd({ post }: { post: BlogPost }) {
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Adam Zrek",
      url: "https://www.sitelet.se/#om",
    },
    publisher: {
      "@type": "Organization",
      name: "Sitelet",
      url: "https://www.sitelet.se",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.sitelet.se/blogg/${post.slug}`,
    },
    url: `https://www.sitelet.se/blogg/${post.slug}`,
    inLanguage: "sv",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.sitelet.se" },
      { "@type": "ListItem", position: 2, name: "Blogg", item: "https://www.sitelet.se/blogg" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.sitelet.se/blogg/${post.slug}` },
    ],
  };

  const faqSchema = post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  );
}
