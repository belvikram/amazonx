export default function Footer() {
  const links = [
    { href: "/brands", label: "Brands" },
    { href: "#services", label: "Services" },
    { href: "#calculator", label: "Cost Calculator" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-6 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2 font-extrabold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">VB</span>
            <span>Vikram Belde</span>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            All services backed by 3 months of free tools & seller community support.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">Quick Links</h3>
          <ul className="grid gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground/80 transition hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">Community</h3>
          <p className="text-sm text-muted-foreground">
            Join 400+ active Amazon sellers learning together.
          </p>
        </div>
      </div>
      <div className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Vikram Belde. All rights reserved.</p>
          <p>Designed for clarity, speed, and conversions.</p>
        </div>
      </div>
    </footer>
  );
}
