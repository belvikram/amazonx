import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { href: "/brands", label: "Brands", isRoute: true },
    { href: "/about-me", label: "About Me", isRoute: true },
    { href: "/blog", label: "Blog", isRoute: true },
    { href: "/amazon-roadmap", label: "Success Roadmap", isRoute: true },
  ];

  const services = [
    { href: "#services", label: "Services", isRoute: false },
    { href: "/calculator", label: "Cost Calculator", isRoute: true },
    { href: "/ppc-training", label: "PPC Training", isRoute: true },
    { href: "/aplus-content", label: "A+ Content", isRoute: true },
  ];

  const resources = [
    { href: "/testimonials", label: "Testimonials", isRoute: true },
    { href: "/contact", label: "Contact", isRoute: true },
    { href: "/keyword-optimization", label: "Keyword Research", isRoute: true },
    { href: "/product-listing", label: "Listing Optimization", isRoute: true },
  ];

  return (
    <footer className="bg-[#FF9900] text-white">
      <div className="container grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <div className="mb-4 flex items-center gap-3 font-extrabold tracking-tight">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#FF9900] font-bold text-lg">AX</span>
            <span className="text-2xl">AmazonX</span>
          </div>
          <p className="text-sm text-white/90 leading-relaxed">
            The X factor in your Amazon selling success. All services backed by 3 months of free tools & seller community support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="grid gap-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link 
                    to={link.href} 
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Services</h3>
          <ul className="grid gap-3 text-sm">
            {services.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link 
                    to={link.href} 
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Resources</h3>
          <ul className="grid gap-3 text-sm">
            {resources.map((link) => (
              <li key={link.href}>
                {link.isRoute ? (
                  <Link 
                    to={link.href} 
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    href={link.href} 
                    className="text-white/80 transition-colors hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/80 sm:flex-row">
          <p>© {new Date().getFullYear()} AmazonX. All rights reserved.</p>
          <p>Designed for clarity, speed, and conversions.</p>
        </div>
      </div>
    </footer>
  );
}
