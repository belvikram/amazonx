import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Linkedin, Globe, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t bg-background">
      <div className="container py-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get In Touch</h2>
            <p className="mt-2 text-muted-foreground">
              Ready to optimize your Amazon presence? Let's discuss your project.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
                <CardDescription>Call or WhatsApp me</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+919640715714" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +91 96407 15714
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription>Send me an email</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:belvikram@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    belvikram@gmail.com
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Linkedin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">LinkedIn</CardTitle>
                <CardDescription>Connect with me</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://linkedin.com/in/vikrambelde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    vikrambelde
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Website</CardTitle>
                <CardDescription>Visit my website</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.belvikram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    belvikram.com
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Prefer WhatsApp?</h3>
                <p className="text-muted-foreground mb-6">
                  For quick communication, you can reach me directly on WhatsApp
                </p>
                <Button size="lg" asChild>
                  <a href="https://wa.me/919640715714" className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Message on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
