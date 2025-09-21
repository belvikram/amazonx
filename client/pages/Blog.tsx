import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogArticles, blogCategories } from "@/lib/blog-data";

export default function Blog() {
  return (
    <div className="container py-6 sm:py-12">
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">AmazonX Blog</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Expert insights, strategies, and tips to help you succeed on Amazon. Learn from real experiences and proven methods.
        </p>
      </header>


      {/* Featured Articles */}
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Latest Articles</h2>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogArticles.map((article) => (
            <Link key={article.id} to={`/blog/${article.id}`} className="block">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl">{article.categoryIcon}</span>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="rounded-xl border bg-accent p-4 sm:p-8 text-center">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Stay Updated</h3>
        <p className="text-sm sm:text-base text-muted-foreground mb-4">
          Get the latest Amazon selling tips and strategies delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border rounded-md text-sm"
          />
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
