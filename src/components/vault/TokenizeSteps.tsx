import { FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { number: 1, title: "Step-01", description: "Upload your patent documentation and supporting materials" },
  { number: 2, title: "Step-02", description: "Provide detailed metadata about your innovation" },
  { number: 3, title: "Step-03", description: "Complete KYC verification for compliance" },
  { number: 4, title: "Step-04", description: "Wait for expert advisor review and valuation" },
  { number: 5, title: "Step-05", description: "Mint your IP-NFT and list on the marketplace" },
];

export const TokenizeSteps = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      {/* Background image placeholder - gradient for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 flex">
        {/* Left side - Laptop mockup area */}
        <div className="flex-1 p-8 flex items-center justify-center min-h-[400px]">
          <div className="w-full max-w-md">
            <div className="bg-slate-700 rounded-t-xl p-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>
            <div className="bg-slate-800 p-4 rounded-b-xl">
              <div className="bg-background/10 rounded-lg p-4 space-y-2">
                <div className="h-3 bg-primary-foreground/20 rounded w-3/4" />
                <div className="h-3 bg-primary-foreground/10 rounded w-1/2" />
                <div className="h-8 bg-accent/30 rounded mt-4" />
              </div>
            </div>
            <div className="h-4 bg-slate-600 rounded-b-xl mx-8" />
          </div>
        </div>

        {/* Right side - Steps */}
        <div className="w-96 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-6">
            How to Tokenize<br />Your Patent
          </h2>
          
          <div className="space-y-4 mb-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/70 mb-0.5">{step.title}</p>
                  <p className="text-sm text-primary-foreground/90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2">
            <FileUp className="w-4 h-4" />
            Tokenize Patent
          </Button>
        </div>
      </div>
    </div>
  );
};
