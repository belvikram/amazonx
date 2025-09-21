import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";

const categories = [
  { name: "Electronics", count: 52 },
  { name: "Home & Kitchen", count: 68 },
  { name: "Beauty & Personal Care", count: 34 },
  { name: "Sports & Outdoors", count: 27 },
  { name: "Fashion", count: 40 },
  { name: "Automotive", count: 19 },
];

export default function Brands() {
  return (
    <div className="container py-12">
      <header className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Brands Handled</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A snapshot of categories I\'ve worked across for various brands. Detailed brand portfolio and listing samples are shared privately on request.
          </p>
        </div>
        <a
          href={waLinkWith("Hi, please share the Brands Handled portfolio and listing samples.")}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button size="lg">Request Portfolio</Button>
        </a>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div key={c.name} className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10" />
            <div className="text-sm font-medium text-primary">Category</div>
            <h3 className="mt-1 text-lg font-semibold">{c.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.count}+ listings optimized</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border bg-accent p-6 text-accent-foreground">
        Prefer a quick chat? 
        <a className="ml-1 font-semibold underline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer noopener">
          Message me on WhatsApp
        </a>
        .
      </div>
    </div>
  );
}
