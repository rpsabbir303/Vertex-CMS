import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { MARKETING_PAGES } from "@/lib/marketing/pages";
import { ROUTES } from "@/lib/marketing/navigation";
import { excludeBlogById, getBlogArticles, getFeaturedBlog } from "@/lib/marketing/resources/blog";
import { RESOURCES_HUB } from "@/lib/marketing/resources/content";

import { BlogDetailCtaSection } from "../blog-detail/BlogDetailCtaSection";
import { BlogAbstractSystem } from "./BlogAbstractSystem";
import { BlogLibrarySection } from "./BlogLibrarySection";
import { BlogsHero } from "./BlogsHero";
import { BlogsRelatedConnection } from "./BlogsRelatedConnection";
import { FeaturedBlogArticle } from "./FeaturedBlogArticle";

/** Full Blog library — `/resources/blog`. */
export function BlogListingPage() {
  const allArticles = getBlogArticles();
  const featured = getFeaturedBlog();
  const libraryArticles = excludeBlogById(allArticles, featured?.id);
  const breadcrumbs = MARKETING_PAGES.resourcesBlog.breadcrumbs ?? [
    { label: "Home", href: ROUTES.home },
    { label: "Resources", href: ROUTES.resources },
    { label: "Blog" },
  ];

  return (
    <div className="relative overflow-x-hidden bg-[#F5F8FC] font-sans text-brand-navy">
      <BlogAbstractSystem />
      <div className="relative z-[1]">
        <Breadcrumbs items={breadcrumbs} />
        <BlogsHero />
        {featured ? <FeaturedBlogArticle article={featured} /> : null}
        <BlogLibrarySection
          articles={featured ? libraryArticles : allArticles}
          catalogHasArticles={allArticles.length > 0}
        />
        <BlogsRelatedConnection />
        <BlogDetailCtaSection />
        <p className="sr-only">
          Next steps: {RESOURCES_HUB.cta.primary.label}, {RESOURCES_HUB.cta.secondary.label}.
        </p>
      </div>
    </div>
  );
}
