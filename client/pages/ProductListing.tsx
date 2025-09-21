import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, FileText, ArrowLeft, Star, Shield, Zap } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";
import { Link } from "react-router-dom";

export default function ProductListingPage() {
  const service = {
    name: "Amazon Product Listing",
    price: "Rs999",
    description: "Complete Amazon product listing optimization with your photos, videos, and content",
    timeline: "3-5 business days",
    category: "Core Service",
    icon: FileText
  };

  const outline = [
    "Product title optimization (200 characters max)",
    "Bullet points creation (5 points, 1000 characters each)",
    "Product description enhancement",
    "Search terms optimization (backend keywords)",
    "Category and subcategory selection",
    "Image alt text optimization"
  ];

  const clientExpectations = [
    "High-quality product images (minimum 1000x1000px)",
    "Raw product videos (if available)",
    "Basic product information and features",
    "Target keywords and competitor analysis",
    "Brand guidelines and tone of voice",
    "Any specific requirements or restrictions"
  ];

  const deliverables = [
    "Optimized product title",
    "5 compelling bullet points",
    "Enhanced product description",
    "Backend search terms list",
    "Image optimization recommendations",
    "Category placement strategy",
    "2 rounds of revisions included"
  ];

  const samples = [
    "Before/after title comparison",
    "Sample bullet points for similar products",
    "Description template examples",
    "Keyword research methodology"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increased Visibility",
      description: "Optimized keywords and structure improve search ranking"
    },
    {
      icon: Star,
      title: "Higher Conversion",
      description: "Compelling copy and clear benefits drive more sales"
    },
    {
      icon: Shield,
      title: "Amazon Compliance",
      description: "Follows all Amazon guidelines and best practices"
    }
  ];

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-8">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
        
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-3">
              <service.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{service.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{service.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-primary">{service.price}</div>
            <Badge className="bg-blue-100 text-blue-800 mt-2">{service.category}</Badge>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Service Outline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Service Outline
              </CardTitle>
              <CardDescription>What's included in this service</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {outline.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Client Expectations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                What We Need From You
              </CardTitle>
              <CardDescription>Requirements to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {clientExpectations.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                What You'll Get
              </CardTitle>
              <CardDescription>Complete deliverables included</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Samples */}
          <Card>
            <CardHeader>
              <CardTitle>Samples Available</CardTitle>
              <CardDescription>Examples and templates we provide</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {samples.map((sample, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{sample}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pricing & Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Price</p>
                <p className="text-2xl font-bold">{service.price}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Timeline</p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {service.timeline}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Category</p>
                <Badge className="bg-blue-100 text-blue-800">{service.category}</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Why Choose This Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <benefit.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold">Ready to Get Started?</h3>
                <p className="text-sm text-muted-foreground">
                  Get your Amazon listing optimized for maximum visibility and sales.
                </p>
                <Button asChild size="lg" className="w-full">
                  <a href={waLinkWith(`Hi, I'm interested in the ${service.name} service. Please share more details and samples.`)}>
                    Get This Service
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Free consultation included
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
