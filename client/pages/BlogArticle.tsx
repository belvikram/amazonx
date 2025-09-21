import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { blogArticles } from "@/lib/blog-data";

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const article = blogArticles.find(article => article.id === id);

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-6 sm:py-12">
      {/* Back Button */}
      <div className="mb-6 sm:mb-8">
        <Button variant="ghost" asChild>
          <Link to="/blog" className="flex items-center gap-2 text-sm sm:text-base">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
          <Badge variant="secondary" className="text-xs sm:text-sm">
            {article.category}
          </Badge>
          <span className="text-xs sm:text-sm text-muted-foreground">{article.readTime}</span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <User className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>By {article.author}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{new Date(article.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Article Image */}
        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mb-8">
          <span className="text-6xl">{article.categoryIcon}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="flex items-center gap-1 text-xs sm:text-sm px-2 py-1">
              <Tag className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-none">
        <div 
          className="prose prose-gray prose-lg max-w-none text-base leading-relaxed sm:text-lg"
          dangerouslySetInnerHTML={{ 
            __html: article.content
              .replace(/\n\n/g, '</p><p class="mb-4 sm:mb-6">')
              .replace(/\n/g, '<br>')
              .replace(/^/, '<p class="mb-4 sm:mb-6">')
              .replace(/$/, '</p>')
              .replace(/#{1,6}\s(.+)/g, (match, title) => {
                const level = match.match(/#/g)?.length || 1;
                const headingClass = level === 1 ? 'text-2xl sm:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6' :
                                   level === 2 ? 'text-xl sm:text-2xl font-bold mt-6 sm:mt-10 mb-3 sm:mb-5' :
                                   level === 3 ? 'text-lg sm:text-xl font-semibold mt-5 sm:mt-8 mb-2 sm:mb-4' :
                                   'text-base sm:text-lg font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3';
                return `<h${level} class="${headingClass}">${title}</h${level}>`;
              })
              .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
              .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
              .replace(/- \*\*(.*?)\*\*:/g, '<li class="mb-2 text-gray-800"><strong class="font-semibold text-gray-900">$1:</strong>')
              .replace(/- (.*?)(?=\n|$)/g, '<li class="mb-2 text-gray-800">$1</li>')
              .replace(/(<li class="mb-2 text-gray-800">.*<\/li>)/gs, '<ul class="list-disc list-inside mb-4 sm:mb-6 space-y-1 pl-4">$1</ul>')
              .replace(/```\n(.*?)\n```/gs, '<pre class="bg-gray-50 border border-gray-200 p-3 sm:p-4 rounded-lg overflow-x-auto mb-4 sm:mb-6"><code class="text-sm text-gray-800">$1</code></pre>')
              .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800">$1</code>')
          }}
        />
      </article>

      {/* Author Bio */}
      <div className="mt-12 p-6 bg-muted/50 rounded-xl">
        <h3 className="font-semibold mb-2">About the Author</h3>
        <p className="text-sm text-muted-foreground">
          Vikram is an Amazon optimization expert with 3+ years of experience helping sellers increase their visibility and profits. 
          He specializes in PPC management, listing optimization, and A+ Content design.
        </p>
      </div>

      {/* Related Articles */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6">Related Articles</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {blogArticles
            .filter(a => a.id !== article.id && a.category === article.category)
            .slice(0, 2)
            .map((relatedArticle) => (
              <Card key={relatedArticle.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link 
                      to={`/blog/${relatedArticle.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {relatedArticle.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{relatedArticle.excerpt}</CardDescription>
                </CardHeader>
              </Card>
            ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center p-8 bg-primary/5 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Need Help with Your Amazon Business?</h3>
        <p className="text-muted-foreground mb-4">
          Let AmazonX help you implement these strategies and grow your Amazon business.
        </p>
        <Button size="lg">
          <Link to="/contact">Get Started Today</Link>
        </Button>
      </div>
    </div>
  );
}
