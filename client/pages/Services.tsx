import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, FileText, Image, Video, Target, Palette, BarChart3, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";
import { Link } from "react-router-dom";

type Service = {
  id: string;
  name: string;
  price: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  outline: string[];
  clientExpectations: string[];
  deliverables: string[];
  samples: string[];
  timeline: string;
  category: "core" | "addon" | "premium";
};

const services: Service[] = [
  {
    id: "product-listing",
    name: "Amazon Product Listing",
    price: "Rs999",
    icon: FileText,
    description: "Complete Amazon product listing optimization with your photos, videos, and content",
    outline: [
      "Product title optimization (200 characters max)",
      "Bullet points creation (5 points, 1000 characters each)",
      "Product description enhancement",
      "Search terms optimization (backend keywords)",
      "Category and subcategory selection",
      "Image alt text optimization"
    ],
    clientExpectations: [
      "High-quality product images (minimum 1000x1000px)",
      "Raw product videos (if available)",
      "Basic product information and features",
      "Target keywords and competitor analysis",
      "Brand guidelines and tone of voice",
      "Any specific requirements or restrictions"
    ],
    deliverables: [
      "Optimized product title",
      "5 compelling bullet points",
      "Enhanced product description",
      "Backend search terms list",
      "Image optimization recommendations",
      "Category placement strategy",
      "2 rounds of revisions included"
    ],
    samples: [
      "Before/after title comparison",
      "Sample bullet points for similar products",
      "Description template examples",
      "Keyword research methodology"
    ],
    timeline: "3-5 business days",
    category: "core"
  },
  {
    id: "photo-editing",
    name: "Photo Editing (Add-on)",
    price: "Rs600 / photo",
    icon: Image,
    description: "Professional photo editing for Amazon product images",
    outline: [
      "Background removal/white background",
      "Color correction and enhancement",
      "Image resizing and optimization",
      "Shadow and lighting adjustments",
      "Product isolation and cleanup",
      "Format conversion for Amazon requirements"
    ],
    clientExpectations: [
      "Raw, unedited product photos",
      "High-resolution images (minimum 2000x2000px)",
      "Multiple angles of the product",
      "Reference images for desired style",
      "Specific editing requirements"
    ],
    deliverables: [
      "Amazon-ready images (1000x1000px minimum)",
      "Multiple format options (JPG, PNG)",
      "Optimized file sizes",
      "Color-corrected and enhanced photos",
      "Background removal if requested"
    ],
    samples: [
      "Before/after photo examples",
      "Different background options",
      "Color correction samples",
      "Various product angle edits"
    ],
    timeline: "2-3 business days per photo",
    category: "addon"
  },
  {
    id: "video-editing",
    name: "Video Editing (Add-on)",
    price: "Rs1999 / video",
    icon: Video,
    description: "Professional video editing for Amazon product videos",
    outline: [
      "Video trimming and optimization",
      "Color correction and enhancement",
      "Audio synchronization and cleanup",
      "Text overlays and graphics",
      "Format conversion for Amazon",
      "Thumbnail creation"
    ],
    clientExpectations: [
      "Raw video footage (minimum 1080p)",
      "Clear audio if voiceover needed",
      "Product demonstration requirements",
      "Desired video length and style",
      "Brand elements for overlays"
    ],
    deliverables: [
      "Amazon-optimized video file",
      "Multiple format options",
      "Thumbnail image",
      "Video description and tags",
      "2 rounds of revisions included"
    ],
    samples: [
      "Sample product demonstration videos",
      "Different editing style options",
      "Thumbnail design examples",
      "Before/after video comparisons"
    ],
    timeline: "5-7 business days per video",
    category: "addon"
  },
  {
    id: "keyword-optimization",
    name: "Keyword Optimization Add-On",
    price: "Rs1499",
    icon: Target,
    description: "Complete listing keyword optimization for maximum reach and visibility",
    outline: [
      "Comprehensive keyword research",
      "Competitor analysis and gap identification",
      "Search volume and difficulty analysis",
      "Long-tail keyword strategy",
      "Backend keyword optimization",
      "Search term performance tracking setup"
    ],
    clientExpectations: [
      "Product category and niche information",
      "Target audience demographics",
      "Competitor product URLs",
      "Current keyword performance data",
      "Specific keyword goals and targets"
    ],
    deliverables: [
      "Primary keyword list (20-30 keywords)",
      "Long-tail keyword suggestions",
      "Backend search terms optimization",
      "Competitor analysis report",
      "Keyword tracking setup guide",
      "Monthly performance review"
    ],
    samples: [
      "Keyword research methodology",
      "Competitor analysis examples",
      "Search term optimization samples",
      "Performance tracking templates"
    ],
    timeline: "5-7 business days",
    category: "addon"
  },
  {
    id: "aplus-content",
    name: "A+ Content (EBC) Design",
    price: "Rs1999",
    icon: Palette,
    description: "Tailored A+ Content design for both desktop and mobile, fully customized",
    outline: [
      "Custom A+ Content layout design",
      "Mobile-responsive optimization",
      "Brand-consistent visual elements",
      "Compelling copywriting",
      "Image and graphic integration",
      "Amazon compliance review"
    ],
    clientExpectations: [
      "Brand guidelines and assets",
      "Product features and benefits list",
      "High-quality product images",
      "Target audience information",
      "Competitor A+ Content examples",
      "Specific messaging requirements"
    ],
    deliverables: [
      "Custom A+ Content design",
      "Mobile-optimized version",
      "Source files and assets",
      "Amazon submission-ready format",
      "2 rounds of revisions included",
      "Compliance checklist"
    ],
    samples: [
      "A+ Content design examples",
      "Mobile vs desktop layouts",
      "Different industry styles",
      "Before/after comparisons"
    ],
    timeline: "7-10 business days",
    category: "premium"
  },
  {
    id: "ppc-training",
    name: "Amazon PPC Training",
    price: "Custom pricing",
    icon: BarChart3,
    description: "Comprehensive Amazon PPC training tailored to seller's skill level",
    outline: [
      "PPC fundamentals and strategy",
      "Campaign structure optimization",
      "Keyword research for PPC",
      "Bid management techniques",
      "Performance analysis and optimization",
      "Advanced PPC strategies"
    ],
    clientExpectations: [
      "Current PPC experience level",
      "Account access for hands-on training",
      "Specific PPC goals and challenges",
      "Available time for training sessions",
      "Preferred learning format"
    ],
    deliverables: [
      "Personalized training curriculum",
      "Hands-on campaign optimization",
      "PPC strategy documentation",
      "Ongoing support and consultation",
      "Performance tracking templates",
      "Monthly review sessions"
    ],
    samples: [
      "Training curriculum outline",
      "PPC strategy examples",
      "Campaign optimization case studies",
      "Performance improvement reports"
    ],
    timeline: "2-4 weeks (flexible)",
    category: "premium"
  }
];

const categoryColors = {
  core: "bg-blue-100 text-blue-800",
  addon: "bg-green-100 text-green-800",
  premium: "bg-purple-100 text-purple-800"
};

const categoryLabels = {
  core: "Core Service",
  addon: "Add-on Service",
  premium: "Premium Service"
};

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">AmazonX Services & Transparent Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The X factor in your Amazon selling success. Clear deliverables, detailed outlines, and transparent pricing. Know exactly what to expect.
        </p>
        <div className="mt-6 flex justify-center">
          <Badge variant="secondary" className="px-4 py-2">
            <Users className="mr-2 h-4 w-4" />
            3 months of Profit Tool + Private Community included
          </Badge>
        </div>
      </div>

      <div className="space-y-12">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <Card key={service.id} className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{service.name}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <Badge className={categoryColors[service.category]}>
                      {categoryLabels[service.category]}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {/* Service Outline */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-semibold">
                      <FileText className="h-4 w-4" />
                      Service Outline
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {service.outline.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Expectations */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-semibold">
                      <Users className="h-4 w-4" />
                      What We Need From You
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {service.clientExpectations.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-0.5 h-3 w-3 rounded-full bg-blue-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-semibold">
                      <CheckCircle className="h-4 w-4" />
                      What You'll Get
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {service.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline & Samples */}
                  <div>
                    <h4 className="mb-4 flex items-center gap-2 font-semibold">
                      <Clock className="h-4 w-4" />
                      Timeline & Samples
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Timeline:</p>
                        <p className="text-sm">{service.timeline}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Samples Available:</p>
                        <ul className="mt-1 space-y-1 text-sm">
                          {service.samples.map((sample, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="mt-0.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span>{sample}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-center gap-3">
                  <Button asChild variant="outline">
                    <Link to={`/services/${service.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg">
                    <a href={waLinkWith(`Hi, I'm interested in the AmazonX ${service.name} service. Please share more details and samples.`)}>
                      Get This Service
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Need a Custom AmazonX Package?</h2>
        <p className="mt-2 text-muted-foreground">
          Let AmazonX create a tailored solution that combines multiple services for your specific Amazon selling needs.
        </p>
        <div className="mt-6">
          <Button asChild size="lg" variant="outline">
            <a href={WHATSAPP_LINK}>
              Discuss Custom Package
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
