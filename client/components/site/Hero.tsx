import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Wait a bit before starting to delete
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (displayedText.length > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
        } else {
          // Reset for next cycle
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? 50 : 100); // Faster deletion, slower typing

    return () => clearTimeout(timeout);
  }, [currentIndex, text, isDeleting, displayedText]);

  return (
    <span className={`font-bold ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FF9900]/20 via-[#FF9900]/10 to-[#232F3E]/20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_30%_20%,#FF9900/0.3,transparent_50%),radial-gradient(600px_300px_at_70%_80%,#232F3E/0.2,transparent_50%)]" />
      <div className="container flex items-center justify-center gap-6 py-16 md:py-24">
        <div className="text-center max-w-4xl">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-foreground/80">
              Trusted by 400+ Amazon Sellers
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#FF9900] drop-shadow-lg bg-gradient-to-r from-[#FF9900] to-[#FF6600] bg-clip-text text-transparent">Amazon</span>
              <span className="text-[#232F3E] drop-shadow-lg bg-gradient-to-r from-[#232F3E] to-[#000000] bg-clip-text text-transparent animate-pulse">X</span>
            </h1>
            <p className="mt-2 text-lg text-muted-foreground font-medium">
              <TypingText text="The X factor in your Selling success" className="text-[#232F3E]" />
            </p>
          </div>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg text-center">
            Unlock your Amazon potential with professional listing optimization, keyword research, A+ Content design, and PPC training. Transform your listings into conversion machines.
          </p>
          <div className="mt-6 flex flex-row gap-3 items-center justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer noopener">
              <Button size="lg" className="flex-1 px-6">Get Started</Button>
            </a>
            <Link to="/amazon-roadmap">
              <Button size="lg" variant="outline" className="flex-1 px-6">Success Roadmap</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}