import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/services", label: "Services" },
    { href: "/calculator", label: "Calculator" },
    { href: "/amazon-roadmap", label: "Success Roadmap" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/brands", label: "Brands" },
    { href: "/blog", label: "Blog" },
    { href: "/about-me", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">AX</span>
          <span className="text-base sm:text-lg">AmazonX</span>
          <span className="hidden text-muted-foreground sm:inline">— The X factor in your Selling success</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm font-medium text-foreground/80 transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer noopener">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 4.5a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t bg-background md:hidden">
          <div className="container grid gap-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer noopener" onClick={() => setOpen(false)} className="px-2">
              <Button className="w-full">Get Started</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
