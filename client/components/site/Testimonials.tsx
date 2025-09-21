type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Vikram reworked our listings and we saw a 35% lift in conversion within a month.",
    name: "Anita Sharma",
    role: "Private Label Seller",
  },
  {
    quote:
      "The keyword strategy pulled from competitors was spot-on. We finally started ranking.",
    name: "Rohit Gupta",
    role: "FBA Seller",
  },
  {
    quote:
      "A+ content design was crisp and mobile-first. Our pages now look truly professional.",
    name: "Neha Verma",
    role: "Brand Owner",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 border-t bg-background">
      <div className="container py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Track Record & Testimonials</h2>
          <p className="mt-2 text-sm text-muted-foreground">3+ years of experience helping sellers increase visibility and profits.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-xl border bg-card p-6 shadow-sm">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="absolute -left-3 -top-3 h-8 w-8 text-primary/20"
                fill="currentColor"
              >
                <path d="M7.17 6A5.17 5.17 0 002 11.17V22h8.28v-8.28H6.1c0-2.06 1.07-3.64 3.1-4.73V6H7.17zm11.73 0A5.17 5.17 0 0013.73 11.17V22h8.27v-8.28h-4.17c0-2.06 1.07-3.64 3.1-4.73V6h-2.03z" />
              </svg>
              <blockquote className="text-sm leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium">
                {t.name}
                <span className="ml-2 text-muted-foreground">— {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
