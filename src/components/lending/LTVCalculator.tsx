import { Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LTVCalculator() {
  const [patentValue, setPatentValue] = useState("");
  
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm animate-fade-in">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Calculator className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">LTV Calculator</h3>
          <p className="text-xs text-muted-foreground">Calculate your loan potential</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Patent Appraised Value
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <input
              type="text"
              value={patentValue}
              onChange={(e) => setPatentValue(e.target.value)}
              placeholder="0.00"
              className="w-full rounded-lg border border-border bg-background py-2.5 pl-7 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="flex items-start gap-2 rounded-lg bg-muted/50 p-3">
          <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">
            Based on verified patent valuation
          </p>
        </div>

        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center">
          <p className="text-sm font-medium text-foreground">Ready to Calculate</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Enter your patent valuation data above to see your collateral conversion and LTV ratio
          </p>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Calculate Now
        </Button>
      </div>
    </div>
  );
}

