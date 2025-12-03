import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$45.M", label: "Ecosystem TVL" },
  { value: "$28.7M", label: "IP-NFT Value" },
  { value: "$8.9M", label: "Lending Pool" },
  { value: "$7.6M", label: "Staked Assets" },
];

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl hero-gradient p-8 text-primary-foreground">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-teal/40 to-transparent blur-3xl" />
        <div className="absolute top-20 right-32 w-48 h-48 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
      </div>

      <div className="relative z-10 flex justify-between items-start">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-3 leading-tight">
            Transforming Scientific<br />IP into Investable Assets
          </h2>
          <p className="text-primary-foreground/70 mb-6 text-sm leading-relaxed">
            Tokenize, trade, and monetize cutting-edge nanotechnology intellectual property on the world's fastest blockchain.
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Explore Patents
            </Button>
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="bg-navy-light/50 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/60 mb-1">Ecosystem TVL</p>
          <p className="text-sm font-medium text-primary-foreground/80 mb-4">Total ValueLocker</p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
