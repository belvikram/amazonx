import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string>("");

  return (
    <section id="contact" className="scroll-mt-24 border-t bg-background">
      <div className="container grid gap-8 py-14 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Work With Me</h2>
          <p className="mt-2 text-muted-foreground">
            Tell me what you need. I’ll reply with next steps and a tailored plan.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!name || !email) {
                toast.error("Please provide your name and email");
                return;
              }
              toast.success("Thanks! I\'ll be in touch shortly.");
              console.log({ name, email, services });
              setName("");
              setEmail("");
              setServices("");
            }}
            className="mt-6 grid gap-4 rounded-xl border bg-card p-6 shadow-sm"
          >
            <label className="grid gap-1 text-sm">
              <span className="font-medium">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md border px-3 py-2"
                placeholder="Your full name"
                required
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md border px-3 py-2"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-medium">Services Needed</span>
              <textarea
                value={services}
                onChange={(e) => setServices(e.target.value)}
                className="min-h-[96px] rounded-md border px-3 py-2"
                placeholder="e.g. Listing + Keyword Optimization + A+ Content"
              />
            </label>
            <Button type="submit" size="lg" className="justify-self-start">Submit</Button>
          </form>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Why Work With Me</h3>
          <ul className="mt-3 grid gap-2 text-sm text-foreground/80">
            <li>• Proven strategies tailored to your niche</li>
            <li>• Focus on visibility, conversions, and long-term growth</li>
            <li>• Transparent pricing and clear deliverables</li>
          </ul>
          <div className="mt-6 rounded-lg bg-accent p-4 text-sm text-accent-foreground">
            All services include 3 months of free Profit Tool access and entry into the private 400+ seller community.
          </div>
        </div>
      </div>
    </section>
  );
}
