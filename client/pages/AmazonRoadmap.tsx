import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Target, TrendingUp, Shield, Star, Package, DollarSign, Users, Globe, Zap, ChevronUp, ChevronDown, Play, Pause, ArrowUp, ArrowDown, ArrowUpCircle, PlayCircle, Building, Settings, Rocket, BarChart3, Heart } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";
import { useState, useEffect, useRef } from "react";

const roadmapSteps = [
  {
    phase: "Start",
    step: 0,
    title: "Amazon Success Roadmap",
    description: "Swipe up to get started",
    icon: PlayCircle,
    details: [
      "24-step process to Amazon success",
      "Swipe up to begin your journey"
    ],
    explanation: "Ready to start your Amazon success journey? Swipe up to begin with the first step.",
    isWelcomeCard: true
  },
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
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [showInitialSwipeHint, setShowInitialSwipeHint] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const totalSteps = roadmapSteps.length;

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % totalSteps);
      }, 8000); // Change step every 8 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSteps]);

  // Hide swipe hint after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hide initial swipe hint after user starts interacting
  useEffect(() => {
    if (currentStep > 0) {
      setShowInitialSwipeHint(false);
    }
  }, [currentStep]);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % totalSteps);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diff = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swipe up - next step
        nextStep();
      } else {
        // Swipe down - previous step
        prevStep();
      }
    }
  };

  const currentStepData = roadmapSteps[currentStep];
  const Icon = currentStepData.icon;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top notch area with step number - fixed header */}
      <div className="fixed top-0 left-0 right-0 h-12 bg-black flex items-center justify-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#FF9900] flex items-center justify-center">
            <span className="text-xs font-bold text-white">{currentStepData.step}</span>
          </div>
          <span className="text-sm font-medium text-white">
            {currentStep === 0 ? 'Start' : currentStep} of {totalSteps - 1}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={togglePlayPause}
          className="absolute right-4 text-white hover:bg-white/20 p-2"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>

      {/* Card stack container */}
      <div className="relative h-full w-full" style={{ paddingTop: '120px' }}>
        {/* Background cards - stacked effect */}
        {roadmapSteps.slice(Math.max(0, currentStep - 2), currentStep + 3).map((step, index) => {
          const actualIndex = Math.max(0, currentStep - 2) + index;
          const isCurrent = actualIndex === currentStep;
          const isNext = actualIndex === currentStep + 1;
          const isPrev = actualIndex === currentStep - 1;
          const isBehind = actualIndex < currentStep - 1;
          const isAhead = actualIndex > currentStep + 1;
          
          if (isBehind || isAhead) return null;
          
          const StepIcon = step.icon;
          const zIndex = isCurrent ? 30 : isNext ? 20 : isPrev ? 10 : 5;
          const scale = isCurrent ? 1 : isNext ? 0.95 : isPrev ? 0.9 : 0.85;
          const translateY = isCurrent ? 0 : isNext ? 20 : isPrev ? -20 : 0;
          const opacity = isCurrent ? 1 : isNext ? 0.8 : isPrev ? 0.6 : 0.4;
          
          return (
            <div
              key={actualIndex}
              className="absolute inset-x-4 transition-all duration-500 ease-out"
              style={{
                zIndex,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                opacity,
                top: '80px',
                bottom: '20px'
              }}
            >
              <div className="h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Phase indicator */}
                <div className="flex items-center justify-center pt-4 pb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100">
                    {step.phase === 'Start' && <PlayCircle className="w-4 h-4 text-blue-500" />}
                    {step.phase === 'Foundation' && <Building className="w-4 h-4 text-blue-500" />}
                    {step.phase === 'Product Development' && <Package className="w-4 h-4 text-green-500" />}
                    {step.phase === 'Optimization' && <Settings className="w-4 h-4 text-purple-500" />}
                    {step.phase === 'Launch' && <Rocket className="w-4 h-4 text-orange-500" />}
                    {step.phase === 'Scale' && <BarChart3 className="w-4 h-4 text-red-500" />}
                    {step.phase === 'Brand Building' && <Heart className="w-4 h-4 text-pink-500" />}
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-700">{step.phase}</span>
                  </div>
                </div>

                {/* Card header */}
                <div className="bg-gradient-to-r from-[#FF9900] to-[#FF6600] p-6 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide opacity-90">
                        {step.phase}
                      </div>
                      <div className="text-lg font-bold">{step.step === 0 ? 'Get Started' : `Step ${step.step}`}</div>
                    </div>
                  </div>
                  
                  <h1 className="text-xl font-bold mb-2 leading-tight">
                    {step.title}
                  </h1>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Card content */}
                <div className="p-6 flex-1 overflow-y-auto">
                  <div className="space-y-3">
                    {step.details.slice(0, 4).map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                    {step.details.length > 4 && (
                      <div className="text-center text-gray-500 text-sm py-2">
                        +{step.details.length - 4} more actions
                      </div>
                    )}
                  </div>
                </div>

                {/* Card footer - only show for non-welcome cards */}
                {!step.isWelcomeCard && (
                  <div className="p-6 bg-gray-50">
                    <a
                      href={waLinkWith(`Hi, I'm on step ${step.step} of the Amazon Success Roadmap: "${step.title}". Can we discuss this step and get personalized guidance?`)}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button className="w-full bg-[#FF9900] hover:bg-[#FF6600] text-white font-bold">
                        Get Help with This Step
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Initial swipe indicators - only show on first card */}
      {showInitialSwipeHint && currentStep === 0 && (
        <div className="absolute inset-0 pointer-events-none z-40">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-black/20 flex items-center justify-center">
                  <ArrowUp className="w-10 h-10 animate-bounce text-black" />
                </div>
                <span className="text-4xl font-bold text-center text-black">SWIPE UP</span>
                <span className="text-2xl font-semibold text-center text-black">to get started</span>
              </div>
              <div className="text-center">
                <span className="text-xl font-medium text-black/80">24 steps to Amazon success</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular swipe indicators */}
      {showSwipeHint && currentStep > 0 && (
        <div className="absolute inset-0 pointer-events-none z-40">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center gap-4 text-white/60">
              <div className="flex flex-col items-center gap-1">
                <ArrowUp className="w-6 h-6 animate-bounce" />
                <span className="text-sm font-medium">Swipe up for next</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 animate-bounce" />
                <span className="text-sm font-medium">Swipe down for previous</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex gap-2">
          {roadmapSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep 
                  ? 'bg-[#FF9900] scale-125' 
                  : index < currentStep 
                    ? 'bg-white/60' 
                    : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}