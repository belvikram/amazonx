import Hero from "@/components/site/Hero";
import PricingTable from "@/components/site/PricingTable";
import Calculator from "@/components/site/Calculator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Linkedin, MessageCircle, Award, Users, Target, TrendingUp } from "lucide-react";

export default function Index() {
  return (
    <div>
      <Hero />
      
      {/* About Me Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Meet Your Amazon Expert
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With experience working with internal teams at Amazon, Microsoft, Walmart, and Best Buy
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  V
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Vikram Belde</h3>
                  <p className="text-muted-foreground">Amazon Optimization Specialist</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I've worked alongside internal teams at some of the world's most customer-centric companies, 
                gaining unique insights into what drives success on Amazon. This experience allows me to bring 
                proven strategies and insider knowledge to help optimize your Amazon presence.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Button asChild>
                  <a href="https://linkedin.com/in/vikrambelde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about-me" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Learn More About Me
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Internal Team Experience</h4>
                  <p className="text-sm text-muted-foreground">Direct experience with Amazon, Microsoft, Walmart, and Best Buy teams</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Customer-Centric Focus</h4>
                  <p className="text-sm text-muted-foreground">Understanding what drives conversions and customer satisfaction</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Proven Results</h4>
                  <p className="text-sm text-muted-foreground">Helped numerous brands increase their Amazon sales</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Direct Communication</h4>
                  <p className="text-sm text-muted-foreground">Available for direct consultation and project discussions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <PricingTable />
      <Calculator />
    </div>
  );
}
