import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, TrendingUp, Shield, Star, Package, DollarSign, Users, Globe, Zap, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
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
      "Browse Amazon's bestseller lists and trending categories daily",
      "Use tools like Jungle Scout or Helium 10 to analyze market size and competition",
      "Look for products with 100+ monthly sales and 4+ star average ratings",
      "Identify niches with 3-5 main competitors (not 20+ saturated markets)",
      "Check seasonal trends and avoid highly seasonal products initially",
      "Research customer pain points and product gaps in your chosen niche",
      "Validate demand using Google Trends and social media discussions"
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
      "Use Helium 10's Xray tool to analyze top-selling products in your niche",
      "Look for products with 500+ monthly sales and consistent ranking",
      "Check product reviews for common complaints and improvement opportunities",
      "Analyze pricing patterns - avoid products under ₹200 or over ₹5000 initially",
      "Verify products are not brand-restricted or gated categories",
      "Check if products require special certifications or compliance",
      "Ensure products can be sourced from multiple suppliers for backup options",
      "Calculate potential profit margins after Amazon fees (aim for 30%+ margin)"
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
      "Create 20-30 brand name options using niche keywords and creative combinations",
      "Use TM Search website (trademarksearch.gov.in) to check for existing trademarks",
      "Check domain availability on GoDaddy or Namecheap for .com and .in domains",
      "Search social media platforms to ensure handles are available",
      "Test name pronunciation and memorability with friends and family",
      "Ensure name is easy to spell and remember for customers",
      "Avoid generic terms and focus on unique, brandable names",
      "Check if name has negative connotations in different languages",
      "Verify name doesn't infringe on existing brand names in your category"
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
      "File trademark application online at ipindia.gov.in for your brand name",
      "Choose appropriate trademark class (Class 35 for retail services recommended)",
      "Submit required documents: identity proof, address proof, and business registration",
      "Pay application fee (₹4500 for individuals, ₹9000 for companies)",
      "Obtain trademark application number immediately after submission",
      "Set up tracking alerts to monitor application status monthly",
      "Respond to any objections within 30 days if raised by examiner",
      "Keep all correspondence and documents organized for future reference",
      "Consider hiring a trademark attorney for complex cases or objections"
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
      "Register .com and .in domains immediately on GoDaddy, Namecheap, or similar",
      "Create accounts on Instagram, Facebook, Twitter, LinkedIn, and YouTube",
      "Secure handles on TikTok, Pinterest, and other relevant platforms",
      "Set up Google My Business listing for local SEO benefits",
      "Create consistent profile pictures and cover photos across all platforms",
      "Write compelling bio descriptions that match your brand positioning",
      "Set up professional email addresses using your domain (info@yourbrand.com)",
      "Create basic landing pages with contact information and brand story",
      "Enable two-factor authentication on all accounts for security",
      "Document all login credentials in a secure password manager"
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
      "Register as Amazon seller at sellercentral.amazon.in with your trademark number",
      "Complete identity verification with PAN card, Aadhaar, and bank account details",
      "Submit trademark application number and supporting documents for Brand Registry",
      "Set up payment methods and configure automatic disbursement settings",
      "Complete tax information and GST registration if applicable",
      "Enable two-step verification for account security",
      "Set up notification preferences for order alerts and account updates",
      "Configure return and refund policies according to Amazon guidelines",
      "Test the seller account by creating a test listing to ensure everything works",
      "Download Amazon Seller app for mobile account management"
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
      "Select 1-3 products with 500+ monthly sales and consistent ranking",
      "Choose products that complement each other (same target audience)",
      "Ensure products have different price points to test various market segments",
      "Verify products are not seasonal and have year-round demand",
      "Check that products don't require special certifications or compliance",
      "Calculate profit margins after all costs (aim for 30%+ net margin)",
      "Ensure products are lightweight and easy to ship (under 2kg initially)",
      "Choose products with simple assembly or no assembly required",
      "Avoid products with complex features that might increase return rates",
      "Test product quality by ordering samples from multiple suppliers"
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
      "Research suppliers on Alibaba, Global Sources, and local Indian manufacturers",
      "Contact 5-10 suppliers for each product to compare pricing and quality",
      "Request samples from top 3 suppliers and test product quality thoroughly",
      "Negotiate MOQ (Minimum Order Quantity) and payment terms with suppliers",
      "Start with small test orders (50-100 units) to validate supplier reliability",
      "Verify supplier certifications, quality control processes, and delivery times",
      "Get detailed quotes including shipping, customs, and duty costs",
      "Establish backup suppliers for each product to avoid supply chain issues",
      "Create supplier evaluation spreadsheet with pricing, quality, and delivery scores",
      "Set up regular communication schedule with suppliers for updates and issues"
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
      "Hire professional photographer or invest in good camera equipment for product shots",
      "Create 7-9 high-resolution images (1000x1000px minimum) showing different angles",
      "Design mobile-responsive infographics highlighting key features and benefits",
      "Create lifestyle images showing products in real-world usage scenarios",
      "Develop consistent brand colors, fonts, and visual style across all images",
      "Create comparison charts showing your product vs competitors",
      "Design size charts, measurement guides, and installation instructions",
      "Create video content for product demonstrations and unboxing experiences",
      "Ensure all images meet Amazon's image requirements and guidelines",
      "Test image quality on mobile devices to ensure clarity and impact"
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
      "Use Helium 10's Xray tool to identify top 10 competitors in your niche",
      "Analyze competitor listings for pricing, features, and customer pain points",
      "Study competitor review patterns to understand customer expectations",
      "Use Helium 10's Magnet tool to find high-volume, low-competition keywords",
      "Analyze competitor A+ Content and listing optimization strategies",
      "Check competitor social media presence and marketing tactics",
      "Monitor competitor pricing changes and promotional activities",
      "Identify gaps in competitor offerings that you can fill",
      "Create competitor analysis spreadsheet with key metrics and insights",
      "Track competitor new product launches and market positioning"
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
      "Create a list of 50+ friends, family, and acquaintances across different Indian cities",
      "Send them specific keywords to search for your product (not direct links)",
      "Ask them to browse naturally and add to cart before purchasing",
      "Request they write 2-3 line reviews with photos or videos",
      "Ensure they use different devices and IP addresses for authenticity",
      "Space out orders over 2-3 weeks to appear natural",
      "Ask reviewers to mention specific product features and benefits",
      "Avoid using coupon codes or discounts for review orders",
      "Never ask for 5-star reviews - let them write honest feedback",
      "Follow up after delivery to ensure they received the product properly",
      "Document all review requests and responses for future reference"
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


export default function AmazonRoadmap() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

    </div>
  );
}