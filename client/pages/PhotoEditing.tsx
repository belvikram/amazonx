import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Image, ArrowLeft, Star, Shield, Zap } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";
import { Link } from "react-router-dom";

export default function PhotoEditingPage() {
  const service = {
    name: "Photo Editing (Add-on)",
    price: "Rs600 / photo",
    description: "Professional photo editing for Amazon product images",
    timeline: "2-3 business days per photo",
    category: "Add-on Service",
    icon: Image
  };

  const outline = [
    "Background removal/white background",
    "Color correction and enhancement",
    "Image resizing and optimization",
    "Shadow and lighting adjustments",
    "Product isolation and cleanup",
    "Format conversion for Amazon requirements"
  ];

  const clientExpectations = [
    "Raw, unedited product photos",
    "High-resolution images (minimum 2000x2000px)",
    "Multiple angles of the product",
    "Reference images for desired style",
    "Specific editing requirements"
  ];

  const deliverables = [
    "Amazon-ready images (1000x1000px minimum)",
    "Multiple format options (JPG, PNG)",
    "Optimized file sizes",
    "Color-corrected and enhanced photos",
    "Background removal if requested"
  ];

  const samples = [
    "Before/after photo examples",
    "Different background options",
    "Color correction samples",
    "Various product angle edits"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Professional Quality",
      description: "High-quality edits that meet Amazon's standards"
    },
    {
      icon: Star,
      title: "Consistent Branding",
      description: "Maintains consistent visual identity across all images"
    },
    {
      icon: Shield,
      title: "Amazon Optimized",
      description: "Images optimized specifically for Amazon's requirements"
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
            <Badge className="bg-green-100 text-green-800 mt-2">{service.category}</Badge>
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
                <Image className="h-5 w-5" />
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
                <Badge className="bg-green-100 text-green-800">{service.category}</Badge>
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
                  Let AmazonX be the X factor in your Amazon selling success. Get your product photos professionally edited for Amazon.
                </p>
                <Button asChild size="lg" className="w-full">
                  <a href={waLinkWith(`Hi, I'm interested in the AmazonX ${service.name} service. Please share more details and samples.`)}>
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
