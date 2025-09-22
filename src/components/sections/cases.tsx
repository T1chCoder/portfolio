import { Grid } from "@/components/base/case";
import cases from "@/data/case";

export default function Section() {
  return (
    <section id="client-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
            Client Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivered projects showcasing collaboration and results.
          </p>
        </div>

        <Grid items={cases} />
      </div>
    </section>
  );
}