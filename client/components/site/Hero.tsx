import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/lib/constants";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_50%_-10%,hsl(var(--primary)/0.15),transparent_60%),linear-gradient(to_bottom,white,white)]" />
      <div className="container grid items-center gap-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold text-foreground/80">
            Trusted by 400+ Amazon Sellers
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            AmazonX – The X factor in your Amazon selling success
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Unlock your Amazon potential with professional listing optimization, keyword research, A+ Content design, and PPC training. Transform your listings into conversion machines.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer noopener">
              <Button size="lg" className="px-6">Get Started</Button>
            </a>
            <Link to="/amazon-roadmap">
              <Button size="lg" variant="outline" className="px-6">Success Roadmap</Button>
            </Link>
           
          </div>
        
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-xl border bg-gradient-to-br from-orange-50 to-amber-100 p-4 shadow-sm md:max-w-none">
          <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_100%_0%,#ff9900_0%,transparent_60%)] opacity-20" />
          <div className="relative grid h-full place-items-center rounded-lg bg-white">
            <div className="grid gap-2 p-6 text-center">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">���️</span>
              <h3 className="text-lg font-bold">Conversion-Ready Listings</h3>
              <p className="text-sm text-muted-foreground">
                From keyword strategy to visuals: build listings that rank and sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
