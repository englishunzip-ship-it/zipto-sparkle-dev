import { Calendar, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const blogs = [
  {
    title: "10 Web Development Trends for 2024",
    excerpt: "Stay ahead of the curve with these emerging web development trends that are shaping the digital landscape.",
    date: "Dec 20, 2024",
    category: "Development",
  },
  {
    title: "Why Your Business Needs Automation",
    excerpt: "Discover how IT automation can transform your business operations and boost productivity.",
    date: "Dec 15, 2024",
    category: "Automation",
  },
  {
    title: "SEO Best Practices for Modern Websites",
    excerpt: "Learn the essential SEO strategies to improve your website's visibility and ranking.",
    date: "Dec 10, 2024",
    category: "SEO",
  },
];

const SkeletonCard = () => (
  <article className="glass-card overflow-hidden">
    {/* Image Skeleton */}
    <div className="h-40 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 animate-shimmer" />
    
    <div className="p-6">
      {/* Date Skeleton */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 bg-muted/30 rounded animate-pulse" />
        <div className="h-3 w-20 bg-muted/30 rounded animate-pulse" />
      </div>
      
      {/* Title Skeleton */}
      <div className="h-5 w-full bg-muted/30 rounded mb-2 animate-pulse" />
      <div className="h-5 w-3/4 bg-muted/30 rounded mb-4 animate-pulse" />
      
      {/* Excerpt Skeleton */}
      <div className="h-3 w-full bg-muted/20 rounded mb-2 animate-pulse" />
      <div className="h-3 w-5/6 bg-muted/20 rounded mb-4 animate-pulse" />
      
      {/* Link Skeleton */}
      <div className="h-4 w-24 bg-primary/20 rounded animate-pulse" />
    </div>
  </article>
);

const BlogSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Blog & Insights
          </span>
          <h2 className="heading-lg mt-3 mb-4">
            Latest <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our tech experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            blogs.map((blog, index) => (
              <article
                key={index}
                className="group glass-card overflow-hidden hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Blog Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-primary/30 text-sm font-medium uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all duration-300"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;