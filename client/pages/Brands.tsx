import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, waLinkWith } from "@/lib/constants";

const brands = [
  { 
    name: "Home Elem", 
    description: "Home & Kitchen accessories and organization solutions",
    category: "Home & Kitchen",
    storeUrl: "https://www.amazon.in/stores/HomeElem/page/198F6965-E107-431F-8552-9C687220AB91",
    services: ["Product Listing Optimization", "A+ Content Design", "Keyword Research"]
  },
  { 
    name: "Yumun", 
    description: "Bathroom and kitchen accessories focusing on style, durability, and organization",
    category: "Home & Kitchen",
    storeUrl: "https://www.amazon.in/stores/YUMUN/page/F86C89DB-E73D-4D3B-BF86-4A000E5BDC3E",
    services: ["Complete Listing Optimization", "Photo Editing", "A+ Content Design"]
  },
];

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
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Brands I've Worked With</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Real brands, real results. Here are some of the brands I've helped optimize their Amazon presence with professional listing optimization, A+ Content design, and keyword research.
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

      {/* Featured Brands Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Brands</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {brands.map((brand) => (
            <div key={brand.name} className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10" />
              <div className="text-sm font-medium text-primary">{brand.category}</div>
              <h3 className="mt-1 text-xl font-semibold">{brand.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{brand.description}</p>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium text-foreground/80 mb-2">Services Provided:</h4>
                <div className="flex flex-wrap gap-2">
                  {brand.services.map((service, index) => (
                    <span key={index} className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <a 
                  href={brand.storeUrl} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Amazon Store
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Overview Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Categories Worked Across</h2>
        <p className="text-sm text-muted-foreground mb-6">
          A comprehensive overview of product categories I've optimized across various brands and projects.
        </p>
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
      </div>

      <div className="mt-12 rounded-xl border bg-accent p-6 text-accent-foreground">
        Prefer a quick chat? 
        <a className="ml-1 font-semibold underline" href={WHATSAPP_LINK} target="_blank" rel="noreferrer noopener">
          Message us on WhatsApp
        </a>
        .
      </div>
    </div>
  );
}
