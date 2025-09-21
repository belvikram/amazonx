import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Linkedin, Mail, MessageCircle, Award, Users, Target, TrendingUp } from "lucide-react";

export default function AboutMe() {
  const companies = [
    {
      name: "Amazon",
      role: "Internal Teams",
      description: "Worked with internal teams on customer-centric solutions and optimization strategies",
      icon: "🛒",
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "Microsoft",
      role: "Internal Teams", 
      description: "Collaborated with internal teams to enhance customer experience and product optimization",
      icon: "🪟",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Walmart",
      role: "Internal Teams",
      description: "Partnered with internal teams on customer-focused initiatives and process improvements",
      icon: "🏪",
      color: "bg-blue-100 text-blue-900"
    },
    {
      name: "Best Buy",
      role: "Internal Teams",
      description: "Worked alongside internal teams to drive customer satisfaction and operational excellence",
      icon: "📱",
      color: "bg-yellow-100 text-yellow-800"
    }
  ];

  const skills = [
    "Amazon PPC Optimization",
    "Product Listing Enhancement", 
    "A+ Content Design",
    "Keyword Research & Strategy",
    "Customer Experience Optimization",
    "Data Analysis & Insights",
    "Cross-functional Collaboration",
    "Process Improvement"
  ];

  return (
    <div className="container py-6 sm:py-12">
      {/* Header */}
      <header className="mb-8 sm:mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          About Vikram
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Amazon optimization expert with extensive experience working with internal teams at top customer-centric companies
        </p>
      </header>

      {/* Hero Section */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                  Your Amazon Success Partner
                </h2>
                <p className="text-muted-foreground mb-6 text-base sm:text-lg leading-relaxed">
                  With years of experience working alongside internal teams at Amazon, Microsoft, Walmart, and Best Buy, 
                  I bring insider knowledge and proven strategies to help you optimize your Amazon presence and maximize your sales.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <a href="https://linkedin.com/in/vikrambelde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://wa.me/919640715714" className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Me
                    </a>
                  </Button>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-4xl sm:text-5xl mb-4">
                  V
                </div>
                <h3 className="text-xl font-semibold">Vikram Belde</h3>
                <p className="text-muted-foreground">Amazon Optimization Specialist</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Experience with Top Companies
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <Card key={company.name} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{company.icon}</div>
                <CardTitle className="text-lg">{company.name}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {company.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {company.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Core Expertise
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Me Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Why Choose Me?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Internal Team Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Direct experience working with internal teams at major e-commerce companies gives me unique insights into best practices and optimization strategies.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Customer-Centric Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                My background in customer-centric companies means I understand what drives conversions and customer satisfaction on Amazon.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Proven Results</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                I've helped numerous brands increase their Amazon sales through strategic optimization, A+ content design, and PPC management.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About AmazonX Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          About AmazonX
        </h2>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AmazonX is your trusted partner in Amazon selling success. With 3+ years of hands-on experience, we understand the platform inside out – from positioning products for maximum visibility to extracting high-value keywords from top competitors. We're the X factor that transforms your Amazon listings into conversion machines.
            </p>
            <ul className="grid gap-2 text-foreground/80">
              <li>• End-to-end listing setup and optimization</li>
              <li>• Competitor keyword extraction and mapping</li>
              <li>• A+ (EBC) content tailored for desktop and mobile</li>
              <li>• Practical PPC guidance based on your skill level</li>
            </ul>
          </div>
          <div className="grid content-start gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="text-lg font-semibold">AmazonX Community & Tools</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every AmazonX service includes 3 months of free access to our Profit Calculation Tool. Join our private community of 400+ active Amazon sellers for ongoing support, tips, and success stories.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl border p-4">
                <div className="text-2xl font-extrabold">3+</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-2xl font-extrabold">400+</div>
                <div className="text-xs text-muted-foreground">Sellers in Community</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="text-2xl font-extrabold">100s</div>
                <div className="text-xs text-muted-foreground">Listings Improved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Optimize Your Amazon Presence?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to maximize your Amazon sales with proven strategies from my experience with top e-commerce companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wa.me/919640715714" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Start Your Project
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://linkedin.com/in/vikrambelde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
