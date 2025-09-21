export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t bg-background">
      <div className="container grid gap-10 py-14 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h2>
          <p className="mt-4 text-muted-foreground">
            I bring 3+ years of hands-on Amazon selling and listing optimization experience. I deeply understand how the platform works, how to position products for visibility, and how to extract high-value keywords directly from top competitors.
          </p>
          <ul className="mt-6 grid gap-2 text-foreground/80">
            <li>• End-to-end listing setup and optimization</li>
            <li>• Competitor keyword extraction and mapping</li>
            <li>• A+ (EBC) content tailored for desktop and mobile</li>
            <li>• Practical PPC guidance based on your skill level</li>
          </ul>
        </div>
        <div className="grid content-start gap-6">
          <div className="rounded-xl border p-6">
            <h3 className="text-lg font-semibold">Community & Tools Included</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Each service comes with 3 months of free access to my Profit Calculation Tool. You’ll also be added to a private community of 400+ active Amazon sellers for ongoing support.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <Stat number="3+" label="Years Experience" />
            <Stat number="400+" label="Sellers in Community" />
            <Stat number="100s" label="Listings Improved" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border p-4">
      <div className="text-2xl font-extrabold">{number}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
