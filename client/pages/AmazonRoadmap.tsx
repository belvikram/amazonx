import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target, TrendingUp, Shield, Star, Package, DollarSign, Users, Globe, Zap, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";
import { useState, useEffect } from "react";

const roadmapSteps = [
  {
    phase: "Foundation",
    step: 1,
    title: "Niche Selection & Market Research",
    description: "Identify a profitable niche with existing demand and sales potential",
    icon: Target,
    details: [
      "Research trending product categories on Amazon",
      "Analyze competitor sales and market saturation",
      "Choose products with proven sales history",
      "Focus on niches with manageable competition"
    ],
    duration: "1-2 weeks",
    priority: "Critical"
  },
  {
    phase: "Foundation",
    step: 2,
    title: "Product Selection & Validation",
    description: "Choose products within your niche that already have sales on Amazon",
    icon: Package,
    details: [
      "Select product categories with existing Amazon sales",
      "Validate demand through sales data analysis",
      "Choose products with proven market acceptance",
      "Focus on products with good profit margins"
    ],
    duration: "1-2 weeks",
    priority: "Critical"
  },
  {
    phase: "Foundation",
    step: 3,
    title: "Brand Name Creation & Trademark Check",
    description: "Create a catchy brand name and verify trademark availability",
    icon: Shield,
    details: [
      "Brainstorm catchy, niche-specific brand names",
      "Use TM Search website to check for similar names",
      "Ensure name resonates with your target niche",
      "Avoid names that closely match existing companies"
    ],
    duration: "1 week",
    priority: "Critical"
  },
  {
    phase: "Foundation",
    step: 4,
    title: "Trademark Registration",
    description: "Register your brand trademark and obtain application number",
    icon: Shield,
    details: [
      "File trademark application for your brand name",
      "Obtain trademark application number",
      "Complete all required documentation",
      "Track application status regularly"
    ],
    duration: "2-4 weeks",
    priority: "Critical"
  },
  {
    phase: "Foundation",
    step: 5,
    title: "Domain & Social Media Setup",
    description: "Secure domain and social media accounts immediately after trademark registration",
    icon: Globe,
    details: [
      "Register domain name with your brand name",
      "Create all social media accounts (Instagram, Facebook, Twitter, etc.)",
      "Act quickly to prevent domain squatting",
      "Set up consistent branding across all platforms"
    ],
    duration: "1-2 days",
    priority: "Critical"
  },
  {
    phase: "Foundation",
    step: 6,
    title: "Amazon Seller Registration",
    description: "Register as Amazon seller with trademark number under specific brand",
    icon: Globe,
    details: [
      "Register as Amazon seller with trademark number",
      "Complete brand registration process",
      "Set up seller account verification",
      "Configure payment and tax settings"
    ],
    duration: "1-2 weeks",
    priority: "Critical"
  },
  {
    phase: "Product Development",
    step: 7,
    title: "Product Selection & Sourcing",
    description: "Choose 1-3 products to start with for focused optimization",
    icon: Package,
    details: [
      "Select 1-3 products with existing Amazon sales",
      "Source high-quality products from reliable suppliers",
      "Ensure products meet Amazon's quality standards",
      "Focus on manageable product portfolio initially"
    ],
    duration: "2-4 weeks",
    priority: "High"
  },
  {
    phase: "Product Development",
    step: 8,
    title: "Visual Content Creation",
    description: "Develop premium product images and mobile-optimized graphics",
    icon: TrendingUp,
    details: [
      "Create high-resolution product photography",
      "Design mobile-responsive infographics (95% of sales are mobile)",
      "Develop clear branding and messaging",
      "Create lifestyle and usage scenario images"
    ],
    duration: "1-2 weeks",
    priority: "High"
  },
  {
    phase: "Optimization",
    step: 9,
    title: "Competitor Research & Keyword Analysis",
    description: "Research top 5 competitors and use Helium 10 for keyword research",
    icon: Zap,
    details: [
      "Identify top 5 competitors in your niche",
      "Analyze their sales performance and strategies",
      "Use Helium 10 for comprehensive keyword research",
      "Map primary and long-tail keywords"
    ],
    duration: "1 week",
    priority: "High"
  },
  {
    phase: "Optimization",
    step: 10,
    title: "Listing Optimization",
    description: "Optimize product listings with strategic keyword placement",
    icon: Target,
    details: [
      "Craft compelling product titles with keywords",
      "Write detailed bullet points containing all keywords",
      "Optimize product descriptions for search",
      "Use better wording and natural keyword integration"
    ],
    duration: "1 week",
    priority: "High"
  },
  {
    phase: "Product Development",
    step: 11,
    title: "Packaging Optimization",
    description: "Design efficient packaging that minimizes costs while ensuring safety",
    icon: Package,
    details: [
      "Minimize packaging while ensuring product safety",
      "Create cost-effective packaging solutions",
      "Avoid expensive packaging that eats into profits",
      "Test packaging durability during shipping"
    ],
    duration: "1-2 weeks",
    priority: "High"
  },
  {
    phase: "Product Development",
    step: 12,
    title: "Product Materials & Unboxing Experience",
    description: "Enhance product materials and create memorable unboxing experience",
    icon: Package,
    details: [
      "Include user guides and instructions",
      "Add warranty details if applicable",
      "Create premium unboxing experience",
      "Reduce customer return chances through better experience"
    ],
    duration: "1-2 weeks",
    priority: "High"
  },
  {
    phase: "Optimization",
    step: 13,
    title: "Pricing Strategy & Referral Fee Optimization",
    description: "Set pricing to leverage Amazon's referral fee structure",
    icon: DollarSign,
    details: [
      "Price under ₹300 to avoid referral fees",
      "If above ₹300, optimize for fee slabs",
      "Calculate profit margins after all fees",
      "Implement dynamic pricing strategies"
    ],
    duration: "3-5 days",
    priority: "Medium"
  },
  {
    phase: "Launch",
    step: 14,
    title: "Review Generation Strategy",
    description: "Build authentic reviews through strategic network engagement",
    icon: Star,
    details: [
      "Engage friends and family across India for orders",
      "Ask them to find your product organically (not direct links)",
      "Request specific keywords to search for your brand",
      "Aim for minimum 30 reviews with photos/videos",
      "Keep reviews 2-3 lines maximum (realistic length)",
      "Avoid third-party review services and coupon reviews"
    ],
    duration: "2-3 weeks",
    priority: "Critical"
  },
  {
    phase: "Launch",
    step: 15,
    title: "FBA Setup & Inventory Management",
    description: "Move inventory to FBA for better visibility and customer trust",
    icon: Package,
    details: [
      "Prepare products for FBA shipment",
      "Create FBA shipment plans",
      "Send inventory to Amazon fulfillment centers",
      "Monitor inventory levels and reorder points"
    ],
    duration: "1-2 weeks",
    priority: "High"
  },
  {
    phase: "Launch",
    step: 16,
    title: "Multi-City FBA Expansion",
    description: "Create multiple FBA shipments across India for better visibility",
    icon: Globe,
    details: [
      "Distribute inventory across multiple Indian cities",
      "Create additional FBA shipments to key locations",
      "Optimize inventory distribution for faster delivery",
      "Monitor regional performance metrics"
    ],
    duration: "2-3 weeks",
    priority: "Medium"
  },
  {
    phase: "Launch",
    step: 17,
    title: "Review Management & Quality Control",
    description: "Maintain consistent review ratings above 4.2 stars",
    icon: Star,
    details: [
      "Monitor review ratings continuously",
      "Address negative reviews promptly",
      "Implement quality control measures",
      "Engage with customer feedback"
    ],
    duration: "Ongoing",
    priority: "Critical"
  },
  {
    phase: "Scale",
    step: 18,
    title: "Advertising Campaign Management",
    description: "Monitor ad spend, track ACOS and ROAS performance",
    icon: TrendingUp,
    details: [
      "Track advertising cost of sales (ACOS)",
      "Monitor return on ad spend (ROAS)",
      "Analyze campaign performance metrics",
      "Optimize budget allocation based on performance"
    ],
    duration: "Ongoing",
    priority: "High"
  },
  {
    phase: "Scale",
    step: 19,
    title: "Brand Analytics & Keyword Analysis",
    description: "Use brand analytics to understand winning and failing keywords",
    icon: Target,
    details: [
      "Analyze brand analytics data regularly",
      "Identify high-performing keywords",
      "Identify underperforming keywords",
      "Adjust strategy based on data insights"
    ],
    duration: "Ongoing",
    priority: "High"
  },
  {
    phase: "Scale",
    step: 20,
    title: "Campaign Optimization & Bidding",
    description: "Improve performing campaigns and adjust bidding strategies",
    icon: TrendingUp,
    details: [
      "Increase bidding on high-performing campaigns",
      "Optimize underperforming campaigns",
      "Test different bidding strategies",
      "Scale successful campaigns"
    ],
    duration: "Ongoing",
    priority: "High"
  },
  {
    phase: "Scale",
    step: 21,
    title: "Negative Keyword Management",
    description: "Add negative keywords to eliminate unprofitable impressions",
    icon: Target,
    details: [
      "Identify keywords with high impressions but no conversions",
      "Add negative keywords to campaigns",
      "Regularly review and update negative keyword lists",
      "Optimize ad spend efficiency"
    ],
    duration: "Ongoing",
    priority: "High"
  },
  {
    phase: "Scale",
    step: 22,
    title: "Product Line Expansion",
    description: "Add more relevant products to strengthen brand presence",
    icon: Package,
    details: [
      "Research complementary products in your niche",
      "Launch 2-3 additional products",
      "Cross-promote products within listings",
      "Build comprehensive brand catalog"
    ],
    duration: "4-6 weeks",
    priority: "Medium"
  },
  {
    phase: "Brand Building",
    step: 23,
    title: "Website & Digital Presence",
    description: "Build brand website and strengthen social media presence",
    icon: Globe,
    details: [
      "Create professional brand website",
      "Strengthen social media presence",
      "Develop content marketing strategy",
      "Implement SEO optimization"
    ],
    duration: "3-4 weeks",
    priority: "Low"
  },
  {
    phase: "Brand Building",
    step: 24,
    title: "Influencer Partnerships",
    description: "Collaborate with influencers for authentic product testimonials",
    icon: Users,
    details: [
      "Identify relevant influencers in your niche",
      "Create authentic video testimonials",
      "Leverage user-generated content",
      "Build long-term influencer relationships"
    ],
    duration: "2-3 weeks",
    priority: "Low"
  }
];


export default function AmazonRoadmap() {
  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Amazon Success Roadmap
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive 17-step guide to building a successful Amazon business in India, 
          from niche selection to brand building and scaling.
        </p>
        <div className="mt-6">
          <a
            href={waLinkWith("Hi, I'd like to discuss the Amazon Success Roadmap and get personalized guidance for my business.")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button size="lg" className="mr-4">
              Get Personalized Guidance
            </Button>
          </a>
          <a
            href={waLinkWith("Hi, I need help implementing specific steps from the Amazon Success Roadmap.")}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button variant="outline" size="lg">
              Get Implementation Help
            </Button>
          </a>
        </div>
      </header>


      {/* Detailed Steps */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Detailed Implementation Steps</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block"></div>
          
          {roadmapSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            const phaseColors = {
              'Foundation': 'from-blue-500/10 to-blue-600/5 border-blue-200',
              'Product Development': 'from-green-500/10 to-green-600/5 border-green-200',
              'Optimization': 'from-purple-500/10 to-purple-600/5 border-purple-200',
              'Launch': 'from-orange-500/10 to-orange-600/5 border-orange-200',
              'Scale': 'from-red-500/10 to-red-600/5 border-red-200',
              'Brand Building': 'from-indigo-500/10 to-indigo-600/5 border-indigo-200'
            };
            
            return (
              <div key={step.step} className="relative mb-8">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden lg:block z-10">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary/80 rounded-full"></div>
                </div>
                
                {/* Step card with alternating layout */}
                <div className={`lg:ml-16 ${isEven ? 'lg:mr-8' : 'lg:ml-24'}`}>
                  <Card className={`relative overflow-hidden border-2 bg-gradient-to-br ${phaseColors[step.phase as keyof typeof phaseColors]} hover:shadow-xl transition-all duration-300 group`}>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                    <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-primary/5 to-transparent rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        {/* Icon with enhanced design */}
                        <div className="flex-shrink-0 relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          {/* Step number badge */}
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                            {step.step}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          {/* Phase indicator */}
                          <div className="inline-flex items-center gap-2 mb-3">
                            <div className={`w-2 h-2 rounded-full ${
                              step.phase === 'Foundation' ? 'bg-blue-500' :
                              step.phase === 'Product Development' ? 'bg-green-500' :
                              step.phase === 'Optimization' ? 'bg-purple-500' :
                              step.phase === 'Launch' ? 'bg-orange-500' :
                              step.phase === 'Scale' ? 'bg-red-500' :
                              'bg-indigo-500'
                            }`}></div>
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{step.phase}</span>
                          </div>
                          
                          {/* Badges */}
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <Badge 
                              variant={step.priority === 'Critical' ? 'destructive' : step.priority === 'High' ? 'default' : 'secondary'}
                              className="text-xs font-medium"
                            >
                              {step.priority}
                            </Badge>
                            <Badge variant="outline" className="text-xs font-medium">
                              <Clock className="w-3 h-3 mr-1" />
                              {step.duration}
                            </Badge>
                          </div>
                          
                          <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                            {step.title}
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                          <h4 className="font-semibold text-foreground/90">Key Actions</h4>
                        </div>
                        
                        <div className="grid gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group/item">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mt-0.5">
                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                              </div>
                              <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Success Tips */}
      <div className="mt-16">
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              Pro Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold">Timing is Everything</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Secure domain and social media handles immediately after trademark registration</li>
                  <li>• Start with 1-3 products to avoid overwhelming optimization efforts</li>
                  <li>• Wait for reviews to be visible before launching advertising campaigns</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Quality Over Quantity</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Focus on mobile optimization (95% of Amazon sales are mobile)</li>
                  <li>• Maintain review ratings above 4.2 stars consistently</li>
                  <li>• Invest in premium packaging and unboxing experience</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <Card className="bg-accent">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Amazon Journey?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized guidance and implementation support for your specific niche and products. 
              Let's work together to build your successful Amazon business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={waLinkWith("Hi, I'm ready to start implementing the Amazon Success Roadmap. Can we discuss my specific niche and products?")}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Journey
                </Button>
              </a>
              <a
                href={waLinkWith("Hi, I need help with specific steps from the roadmap. Can we discuss my current challenges?")}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get Help Now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
