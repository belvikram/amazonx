import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const PRICES = {
  listing: 999,
  photo: 600,
  video: 1999,
  keyword: 1499,
  aplus: 1999,
} as const;

export default function Calculator() {
  const [listing, setListing] = useState(true);
  const [photos, setPhotos] = useState(0);
  const [videos, setVideos] = useState(0);
  const [keyword, setKeyword] = useState(false);
  const [aplus, setAplus] = useState(false);

  const total = useMemo(() => {
    let t = 0;
    if (listing) t += PRICES.listing;
    if (keyword) t += PRICES.keyword;
    if (aplus) t += PRICES.aplus;
    t += photos * PRICES.photo;
    t += videos * PRICES.video;
    return t;
  }, [listing, photos, videos, keyword, aplus]);

  return (
    <section id="calculator" className="scroll-mt-24 border-t bg-background">
      <div className="container grid gap-8 py-14 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Cost Calculator</h2>
          <p className="mt-2 text-muted-foreground">
            Select services and see your total cost instantly. PPC Training is custom-priced and not included in this calculator.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const details = {
                listing,
                photos,
                videos,
                keyword,
                aplus,
                total,
              };
              console.log("Quote details", details);
              alert(`Estimated total: Rs${total.toLocaleString()}`);
            }}
            className="mt-6 grid gap-4 rounded-xl border bg-card p-6 shadow-sm"
          >
            <label className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium">Amazon Product Listing</div>
                <div className="text-sm text-muted-foreground">Rs{PRICES.listing.toLocaleString()}</div>
              </div>
              <input
                type="checkbox"
                checked={listing}
                onChange={(e) => setListing(e.target.checked)}
                className="h-5 w-5 rounded border"
              />
            </label>

            <div className="grid gap-2">
              <label className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-medium">Photo Editing</div>
                  <div className="text-sm text-muted-foreground">Rs{PRICES.photo.toLocaleString()} per photo</div>
                </div>
                <input
                  type="number"
                  min={0}
                  value={photos}
                  onChange={(e) => setPhotos(Math.max(0, Number(e.target.value)))}
                  className="w-24 rounded-md border px-3 py-2 text-right"
                />
              </label>
              <label className="flex items-center justify-between gap-4">
                <div>
                  <div className="font-medium">Video Editing</div>
                  <div className="text-sm text-muted-foreground">Rs{PRICES.video.toLocaleString()} per video</div>
                </div>
                <input
                  type="number"
                  min={0}
                  value={videos}
                  onChange={(e) => setVideos(Math.max(0, Number(e.target.value)))}
                  className="w-24 rounded-md border px-3 py-2 text-right"
                />
              </label>
            </div>

            <label className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium">Keyword Optimization Add-On</div>
                <div className="text-sm text-muted-foreground">Rs{PRICES.keyword.toLocaleString()}</div>
              </div>
              <input
                type="checkbox"
                checked={keyword}
                onChange={(e) => setKeyword(e.target.checked)}
                className="h-5 w-5 rounded border"
              />
            </label>

            <label className="flex items-center justify-between gap-4">
              <div>
                <div className="font-medium">A+ Content (EBC) Design</div>
                <div className="text-sm text-muted-foreground">Rs{PRICES.aplus.toLocaleString()}</div>
              </div>
              <input
                type="checkbox"
                checked={aplus}
                onChange={(e) => setAplus(e.target.checked)}
                className="h-5 w-5 rounded border"
              />
            </label>

            <div className="mt-4 flex items-center justify-between border-t pt-4">
              <div className="text-sm text-muted-foreground">Estimated Total</div>
              <div className="text-2xl font-extrabold tracking-tight">Rs{total.toLocaleString()}</div>
            </div>

            <Button type="submit" className="justify-self-start">Save Estimate</Button>
          </form>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">What’s Included</h3>
          <ul className="mt-3 grid gap-2 text-sm text-foreground/80">
            <li>• 3 months free Profit Calculation Tool</li>
            <li>• Access to private community of 400+ sellers</li>
            <li>• Keyword research mapped to listing structure</li>
            <li>• Best practices for titles, bullets, and A+ sections</li>
          </ul>
          <div className="mt-6 rounded-lg bg-accent p-4 text-sm text-accent-foreground">
            PPC Training is custom-priced based on your current skill level. Contact to get a tailored plan.
          </div>
        </div>
      </div>
    </section>
  );
}
