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
  {
    quote:
      "PPC training was game-changing. We reduced ACOS from 45% to 28% while doubling our sales volume.",
    name: "Rajesh Kumar",
    role: "Amazon PPC Manager",
  },
  {
    quote:
      "Photo editing service transformed our product images. Conversion rate increased by 40% immediately.",
    name: "Priya Singh",
    role: "Electronics Seller",
  },
  {
    quote:
      "Video editing made our product demos stand out. We're now in the top 3 for our main keywords.",
    name: "Amit Patel",
    role: "Home & Kitchen Seller",
  },
  {
    quote:
      "The keyword optimization add-on was worth every penny. Our organic traffic tripled in 2 months.",
    name: "Sneha Reddy",
    role: "Beauty & Personal Care",
  },
  {
    quote:
      "Professional listing optimization helped us break into the top 10 for competitive keywords.",
    name: "Vikash Mehta",
    role: "Sports & Outdoors",
  },
  {
    quote:
      "A+ Content design was exactly what we needed. Our brand story now converts visitors into buyers.",
    name: "Deepika Joshi",
    role: "Fashion & Apparel",
  },
  {
    quote:
      "The comprehensive service package was perfect. We went from struggling to profitable in 3 months.",
    name: "Arjun Nair",
    role: "Health & Wellness",
  },
  {
    quote:
      "Keyword research methodology was brilliant. We found hidden gems that competitors missed completely.",
    name: "Kavya Iyer",
    role: "Baby Products Seller",
  },
  {
    quote:
      "Mobile-first A+ Content approach was spot-on. Our mobile conversion rate improved by 60%.",
    name: "Ravi Sharma",
    role: "Automotive Accessories",
  },
  {
    quote:
      "The PPC training sessions were incredibly detailed. We now manage our campaigns like pros.",
    name: "Sunita Agarwal",
    role: "Home Improvement",
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
