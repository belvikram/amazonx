import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send } from "lucide-react";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";

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

export default function FloatingChatBot() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [customMessage, setCustomMessage] = useState("");

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

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      {!showWhatsApp ? (
        <Button
          onClick={() => setShowWhatsApp(true)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      ) : (
        <Card className="w-72 sm:w-80 max-w-[calc(100vw-2rem)] sm:max-w-none shadow-2xl border-0">
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
  );
}
