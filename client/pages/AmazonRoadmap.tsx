import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, TrendingUp, Shield, Star, Package, DollarSign, Users, Globe, Zap, ChevronLeft, ChevronRight, Play, Pause, MessageCircle, X, Send } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";
import { useState, useEffect } from "react";

const roadmapSteps = [
  {
    phase: "Foundation",
    step: 1,
    title: "Choose a Niche to Start With",
    description: "Identify a profitable niche with existing demand and sales potential",
    icon: Target,
    details: [
      "Research trending product categories on Amazon",
      "Analyze competitor sales and market saturation",
      "Choose products with proven sales history",
      "Focus on niches with manageable competition"
    ],
    explanation: "Selecting the right niche is the foundation of your Amazon success. Look for categories with consistent demand, manageable competition, and products that solve real problems. Use Amazon's bestseller lists and trending categories to identify opportunities."
  },
  {
    phase: "Foundation",
    step: 2,
    title: "Choose Products with Existing Sales",
    description: "Select product categories that already have sales on Amazon",
    icon: Package,
    details: [
      "Choose product categories with existing Amazon sales",
      "Validate demand through sales data analysis",
      "Look for products with consistent sales velocity",
      "Focus on products with good profit margins"
    ],
    explanation: "Don't try to create new markets. Choose products that are already selling well on Amazon. This reduces risk and increases your chances of success. Use tools like Helium 10 to analyze sales data and identify winning products."
  },
  {
    phase: "Foundation",
    step: 3,
    title: "Create a Catchy Brand Name",
    description: "Develop a memorable brand name that resonates with your niche",
    icon: Shield,
    details: [
      "Brainstorm catchy, niche-specific brand names",
      "Use TM Search website to check for similar names",
      "Ensure name resonates with your target niche",
      "Avoid names that closely match existing companies"
    ],
    explanation: "Your brand name is your identity on Amazon. It should be memorable, easy to pronounce, and relevant to your niche. Use the TM Search website to ensure no similar names exist to avoid legal issues later."
  },
  {
    phase: "Foundation",
    step: 4,
    title: "Register Trademark & Get Application Number",
    description: "Protect your brand with trademark registration",
    icon: Shield,
    details: [
      "File trademark application for your brand name",
      "Obtain trademark application number",
      "Complete all required documentation",
      "Track application status regularly"
    ],
    explanation: "Trademark registration protects your brand and is required for Amazon Brand Registry. This gives you access to enhanced listing features, brand protection tools, and helps prevent counterfeiters from using your brand name."
  },
  {
    phase: "Foundation",
    step: 5,
    title: "Secure Domain & Social Media Accounts",
    description: "Act quickly to prevent domain squatting and secure your online presence",
    icon: Globe,
    details: [
      "Register domain name with your brand name",
      "Create all social media accounts (Instagram, Facebook, Twitter, etc.)",
      "Act quickly to prevent domain squatting",
      "Set up consistent branding across all platforms"
    ],
    explanation: "Once your trademark is registered, thousands of people will try to register your domain and social media handles to sell them back to you at inflated prices. Act immediately to secure your online presence."
  },
  {
    phase: "Foundation",
    step: 6,
    title: "Register as Amazon Seller with TM Number",
    description: "Complete Amazon seller registration with your trademark number",
    icon: Globe,
    details: [
      "Register as Amazon seller with trademark number",
      "Complete brand registration process",
      "Set up seller account verification",
      "Configure payment and tax settings"
    ],
    explanation: "Amazon seller registration with your trademark number enables Brand Registry, giving you access to enhanced listing features, brand protection tools, and better customer support. The approval process typically takes 1-2 weeks."
  },
  {
    phase: "Product Development",
    step: 7,
    title: "Choose 1-3 Products to Start With",
    description: "Focus on a manageable number of products for initial launch",
    icon: Package,
    details: [
      "Select 1-3 products with existing Amazon sales",
      "Choose products that complement each other",
      "Focus on manageable product portfolio initially",
      "Ensure products have good profit margins"
    ],
    explanation: "Starting with too many products can be overwhelming and dilute your focus. Choose 1-3 products that are already selling well on Amazon. This allows you to concentrate your efforts and optimize each product thoroughly."
  },
  {
    phase: "Product Development",
    step: 8,
    title: "Source Products from Reliable Suppliers",
    description: "Find reliable suppliers with better pricing and quality",
    icon: Package,
    details: [
      "Research and vet multiple suppliers",
      "Negotiate better pricing for bulk orders",
      "Start with small quantities to test quality",
      "Don't order huge stock initially - test first"
    ],
    explanation: "Finding reliable suppliers is crucial for your success. Start with small quantities to test product quality and supplier reliability. Don't order huge stock initially as you never know which product will succeed or fail."
  },
  {
    phase: "Product Development",
    step: 9,
    title: "Create Premium Visual Content",
    description: "Develop high-quality product images and mobile-optimized graphics",
    icon: TrendingUp,
    details: [
      "Create high-resolution product photography",
      "Design mobile-responsive infographics (95% of sales are mobile)",
      "Develop clear branding and messaging",
      "Create lifestyle and usage scenario images"
    ],
    explanation: "Visual content is crucial for Amazon success. Since 95% of Amazon sales happen through mobile apps, ensure your images and graphics are mobile-responsive. High-quality visuals can significantly increase conversion rates."
  },
  {
    phase: "Optimization",
    step: 10,
    title: "Research Top 5 Competitors",
    description: "Analyze competitor strategies and use Helium 10 for keyword research",
    icon: Zap,
    details: [
      "Identify top 5 competitors in your niche",
      "Analyze their sales performance and strategies",
      "Use Helium 10 for comprehensive keyword research",
      "Map primary and long-tail keywords"
    ],
    explanation: "Understanding your competition is essential for success. Analyze their listings, pricing, reviews, and marketing strategies. Use Helium 10 to identify high-volume, low-competition keywords that can drive traffic to your listings."
  },
  {
    phase: "Optimization",
    step: 11,
    title: "Optimize Keywords in Listings",
    description: "Craft compelling titles and bullet points with strategic keyword placement",
    icon: Target,
    details: [
      "Craft compelling product titles with keywords",
      "Write detailed bullet points containing all keywords",
      "Optimize product descriptions for search",
      "Use better wording and natural keyword integration"
    ],
    explanation: "Keyword optimization is crucial for Amazon SEO. Your title, bullet points, and description should contain relevant keywords naturally. Focus on high-volume, low-competition keywords that your target customers are searching for."
  },
  {
    phase: "Product Development",
    step: 12,
    title: "Optimize Product Packaging",
    description: "Design efficient packaging that minimizes costs while ensuring safety",
    icon: Package,
    details: [
      "Minimize packaging while ensuring product safety",
      "Create cost-effective packaging solutions",
      "Avoid expensive packaging that eats into profits",
      "Test packaging durability during shipping"
    ],
    explanation: "Packaging costs can significantly impact your profits. Most sellers lose money due to poor packaging decisions. Design packaging that's minimal yet safe, and test it thoroughly to ensure products arrive undamaged."
  },
  {
    phase: "Product Development",
    step: 13,
    title: "Enhance Product Materials & Unboxing",
    description: "Create memorable unboxing experience with quality materials",
    icon: Package,
    details: [
      "Include user guides and instructions",
      "Add warranty details if applicable",
      "Create premium unboxing experience",
      "Reduce customer return chances through better experience"
    ],
    explanation: "The unboxing experience can make or break customer satisfaction. Include user guides, warranty information, and create a premium experience. Better unboxing reduces return rates and increases customer satisfaction."
  },
  {
    phase: "Optimization",
    step: 14,
    title: "Optimize Pricing for Referral Fees",
    description: "Set pricing to leverage Amazon's referral fee structure",
    icon: DollarSign,
    details: [
      "Price under ₹300 to avoid referral fees",
      "If above ₹300, optimize for fee slabs",
      "Calculate profit margins after all fees",
      "Implement dynamic pricing strategies"
    ],
    explanation: "Amazon's referral fee structure can significantly impact your profits. Products under ₹300 have no referral fees, while those above have tiered fees. Price strategically to maximize profits while remaining competitive."
  },
  {
    phase: "Launch",
    step: 15,
    title: "Generate Authentic Reviews",
    description: "Build reviews through strategic network engagement",
    icon: Star,
    details: [
      "Engage friends and family across India for orders",
      "Ask them to find your product organically (not direct links)",
      "Request specific keywords to search for your brand",
      "Aim for minimum 30 reviews with photos/videos",
      "Keep reviews 2-3 lines maximum (realistic length)",
      "Avoid third-party review services and coupon reviews"
    ],
    explanation: "Reviews are crucial for Amazon success. Work with friends and family across India to generate authentic reviews. Never share direct links - ask them to find your product organically. Avoid third-party services as Amazon bans these accounts."
  },
  {
    phase: "Launch",
    step: 16,
    title: "Move Inventory to FBA",
    description: "Transfer inventory to Amazon FBA for better visibility",
    icon: Package,
    details: [
      "Prepare products for FBA shipment",
      "Create FBA shipment plans",
      "Send inventory to Amazon fulfillment centers",
      "Monitor inventory levels and reorder points"
    ],
    explanation: "FBA (Fulfillment by Amazon) provides better visibility, faster shipping, and customer trust. The more stock you have on FBA, the more visibility your products get. Start advertising only after reviews are visible."
  },
  {
    phase: "Launch",
    step: 17,
    title: "Create Multi-City FBA Shipments",
    description: "Distribute inventory across multiple Indian cities for better visibility",
    icon: Globe,
    details: [
      "Distribute inventory across multiple Indian cities",
      "Create additional FBA shipments to key locations",
      "Optimize inventory distribution for faster delivery",
      "Monitor regional performance metrics"
    ],
    explanation: "Creating FBA shipments across multiple Indian cities improves delivery speed and visibility. This gives you a competitive advantage over sellers with inventory in only one location."
  },
  {
    phase: "Launch",
    step: 18,
    title: "Maintain Review Ratings Above 4.2",
    description: "Consistently monitor and maintain high review ratings",
    icon: Star,
    details: [
      "Monitor review ratings continuously",
      "Address negative reviews promptly",
      "Implement quality control measures",
      "Engage with customer feedback"
    ],
    explanation: "Maintaining high review ratings is crucial for Amazon success. Ratings below 4.2 can significantly impact your visibility and sales. Monitor reviews daily and address issues promptly."
  },
  {
    phase: "Scale",
    step: 19,
    title: "Monitor Ad Spend & Performance",
    description: "Track ACOS and ROAS to optimize advertising campaigns",
    icon: TrendingUp,
    details: [
      "Track advertising cost of sales (ACOS)",
      "Monitor return on ad spend (ROAS)",
      "Analyze campaign performance metrics",
      "Optimize budget allocation based on performance"
    ],
    explanation: "Effective ad management is crucial for scaling your business. Monitor ACOS (Advertising Cost of Sales) and ROAS (Return on Ad Spend) to ensure your advertising is profitable and efficient."
  },
  {
    phase: "Scale",
    step: 20,
    title: "Use Brand Analytics for Keyword Analysis",
    description: "Analyze brand analytics to identify winning and failing keywords",
    icon: Target,
    details: [
      "Analyze brand analytics data regularly",
      "Identify high-performing keywords",
      "Identify underperforming keywords",
      "Adjust strategy based on data insights"
    ],
    explanation: "Brand analytics provides valuable insights into which keywords are driving sales and which are not. Use this data to optimize your campaigns, improve performing keywords, and eliminate underperforming ones."
  },
  {
    phase: "Scale",
    step: 21,
    title: "Optimize Campaigns & Bidding",
    description: "Improve performing campaigns and adjust bidding strategies",
    icon: TrendingUp,
    details: [
      "Increase bidding on high-performing campaigns",
      "Optimize underperforming campaigns",
      "Test different bidding strategies",
      "Scale successful campaigns"
    ],
    explanation: "Continuous campaign optimization is key to maximizing your advertising ROI. Increase bids on winning campaigns, optimize underperforming ones, and test different strategies to find what works best."
  },
  {
    phase: "Scale",
    step: 22,
    title: "Add Negative Keywords",
    description: "Eliminate unprofitable impressions with negative keywords",
    icon: Target,
    details: [
      "Identify keywords with high impressions but no conversions",
      "Add negative keywords to campaigns",
      "Regularly review and update negative keyword lists",
      "Optimize ad spend efficiency"
    ],
    explanation: "Negative keywords are crucial for optimizing ad spend. They prevent your ads from showing for irrelevant searches, saving money and improving campaign performance. Regularly review and update your negative keyword lists."
  },
  {
    phase: "Scale",
    step: 23,
    title: "Reduce Product Costs",
    description: "Optimize costs through bulk importing or manufacturing",
    icon: DollarSign,
    details: [
      "Negotiate better prices with suppliers for bulk orders",
      "Consider manufacturing products yourself",
      "Improve operational efficiency",
      "Reduce packaging and shipping costs"
    ],
    explanation: "Reducing product costs increases your profit margins. Consider bulk importing, manufacturing, or improving operational efficiency. Even small cost reductions can significantly impact your bottom line."
  },
  {
    phase: "Scale",
    step: 24,
    title: "Expand Product Line",
    description: "Add more relevant products to strengthen brand presence",
    icon: Package,
    details: [
      "Research complementary products in your niche",
      "Launch 2-3 additional products",
      "Cross-promote products within listings",
      "Build comprehensive brand catalog"
    ],
    explanation: "Expanding your product line increases brand presence and customer lifetime value. Choose complementary products that your existing customers would be interested in. Cross-promote products to maximize sales."
  },
  {
    phase: "Brand Building",
    step: 25,
    title: "Build Website & Digital Presence",
    description: "Create professional website and strengthen social media presence",
    icon: Globe,
    details: [
      "Create professional brand website",
      "Strengthen social media presence",
      "Develop content marketing strategy",
      "Implement SEO optimization"
    ],
    explanation: "Building a strong digital presence beyond Amazon helps establish your brand and provides additional sales channels. A professional website and active social media presence can drive traffic back to your Amazon listings."
  },
  {
    phase: "Brand Building",
    step: 26,
    title: "Partner with Influencers",
    description: "Collaborate with influencers for authentic product testimonials",
    icon: Users,
    details: [
      "Identify relevant influencers in your niche",
      "Create authentic video testimonials",
      "Leverage user-generated content",
      "Build long-term influencer relationships"
    ],
    explanation: "Influencer partnerships can significantly boost your brand awareness and credibility. Choose influencers whose audience matches your target market. Authentic video testimonials are more effective than paid promotions."
  }
];

const whatsappTemplates = [
  "Need help with product listing optimization",
  "Looking for PPC training and campaign management",
  "Want to discuss keyword research strategies",
  "Need assistance with A+ Content design",
  "Interested in photo editing services",
  "Want to discuss brand registration process",
  "Need help with FBA setup and management",
  "Looking for competitor analysis services"
];

export default function AmazonRoadmap() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

  const totalSteps = roadmapSteps.length;

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % totalSteps);
      }, 5000); // Change step every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSteps]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % totalSteps);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleWhatsAppTemplate = (template: string) => {
    const whatsappLink = `https://wa.me/919640715714?text=${encodeURIComponent(template)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      const whatsappLink = `https://wa.me/919640715714?text=${encodeURIComponent(customMessage)}`;
      window.open(whatsappLink, '_blank');
      setCustomMessage("");
    }
  };

  const currentStepData = roadmapSteps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div className="container py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
          Amazon Success Roadmap
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive 26-step guide to building a successful Amazon business in India, 
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

      {/* Step Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextStep}
              disabled={currentStep === totalSteps - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>

        {/* Step Dots */}
        <div className="flex flex-wrap gap-2 justify-center">
          {roadmapSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentStep 
                  ? 'bg-primary scale-125' 
                  : index < currentStep 
                    ? 'bg-primary/60' 
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Step Card */}
      <div className="max-w-4xl mx-auto">
        <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 group">
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
                  {currentStepData.step}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Phase indicator */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${
                    currentStepData.phase === 'Foundation' ? 'bg-blue-500' :
                    currentStepData.phase === 'Product Development' ? 'bg-green-500' :
                    currentStepData.phase === 'Optimization' ? 'bg-purple-500' :
                    currentStepData.phase === 'Launch' ? 'bg-orange-500' :
                    currentStepData.phase === 'Scale' ? 'bg-red-500' :
                    'bg-indigo-500'
                  }`}></div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{currentStepData.phase}</span>
                </div>
                
                <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                  {currentStepData.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {currentStepData.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="space-y-6">
              {/* Explanation */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground/90 mb-2">Why This Matters:</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentStepData.explanation}
                </p>
              </div>

              {/* Key Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                  <h4 className="font-semibold text-foreground/90">Key Actions</h4>
                </div>
                
                <div className="grid gap-3">
                  {currentStepData.details.map((detail, detailIndex) => (
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

      {/* Floating WhatsApp Chat */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showWhatsApp ? (
          <Button
            onClick={() => setShowWhatsApp(true)}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        ) : (
          <Card className="w-80 shadow-2xl border-0">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">AmazonX Support</h4>
                    <p className="text-xs text-muted-foreground">We're online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowWhatsApp(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Quick templates:</p>
                <div className="grid gap-2">
                  {whatsappTemplates.map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto p-2 text-xs"
                      onClick={() => handleWhatsAppTemplate(template)}
                    >
                      {template}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Or send a custom message:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomMessage()}
                  />
                  <Button
                    size="sm"
                    onClick={handleCustomMessage}
                    disabled={!customMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}