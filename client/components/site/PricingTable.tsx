type Item = {
  name: string;
  price: string;
  description?: string;
  note?: string;
};

const items: Item[] = [
  {
    name: "Amazon Product Listing",
    price: "Rs999",
    description: "With your photos, videos, and content",
  },
  {
    name: "Photo Editing (Add-on)",
    price: "Rs600 / photo",
    description: "If you provide raw photos (no infographics)",
  },
  {
    name: "Video Editing (Add-on)",
    price: "Rs1999 / video",
    description: "If you provide raw videos",
  },
  {
    name: "Keyword Optimization Add-On",
    price: "Rs1499",
    description: "Complete listing keyword optimization for maximum reach",
  },
  {
    name: "A+ Content (EBC) Design",
    price: "Rs1999",
    description: "Tailored for both desktop & mobile, fully customized",
  },
  {
    name: "Amazon PPC Training",
    price: "Custom pricing",
    description: "Depends on seller’s skill level",
  },
];

export default function PricingTable() {
  return (
    <section id="services" className="scroll-mt-24 border-t bg-background">
      <div className="container py-14">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Services & Transparent Pricing</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear deliverables. No surprises.
            </p>
          </div>
          <div className="rounded-full border px-3 py-1 text-xs font-semibold text-foreground/80">
            3 months of Profit Tool + Private Community included
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.name} className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition hover:shadow">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10" />
              <h3 className="text-lg font-semibold">{it.name}</h3>
              <div className="mt-2 text-2xl font-extrabold tracking-tight">
                {it.price}
              </div>
              {it.description && (
                <p className="mt-2 text-sm text-muted-foreground">{it.description}</p>
              )}
              {it.note && <p className="mt-2 text-xs text-muted-foreground">{it.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
