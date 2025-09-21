export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t bg-background">
      <div className="container grid gap-10 py-14 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About AmazonX</h2>
          <p className="mt-4 text-muted-foreground">
            AmazonX is your trusted partner in Amazon selling success. With 3+ years of hands-on experience, we understand the platform inside out – from positioning products for maximum visibility to extracting high-value keywords from top competitors. We're the X factor that transforms your Amazon listings into conversion machines.
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
            <h3 className="text-lg font-semibold">AmazonX Community & Tools</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every AmazonX service includes 3 months of free access to our Profit Calculation Tool. Join our private community of 400+ active Amazon sellers for ongoing support, tips, and success stories.
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
