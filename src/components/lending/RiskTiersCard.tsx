import { Info, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskTier {
  name: string;
  color: "green" | "yellow" | "red";
  items: string[];
}

const riskTiers: RiskTier[] = [
  {
    name: "Low Risk",
    color: "green",
    items: [
      "Lower APR (6-7%)",
      "Stricter requirements",
      "Highly-valued collateral",
      "Lower LTV (≤ 70)"
    ]
  },
  {
    name: "Medium Risk",
    color: "yellow",
    items: [
      "Balanced APR (7-10%)",
      "Moderate requirements",
      "Standard LTV (50-60%)",
      "Flexible terms"
    ]
  },
  {
    name: "High Risk",
    color: "red",
    items: [
      "Higher APR (10-15%)",
      "Flexible requirements",
      "Higher LTV (60-70%)",
      "Faster approvals"
    ]
  }
];

const colorStyles = {
  green: {
    bg: "bg-success/10",
    text: "text-success",
    bullet: "bg-success"
  },
  yellow: {
    bg: "bg-warning/10",
    text: "text-warning",
    bullet: "bg-warning"
  },
  red: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    bullet: "bg-destructive"
  }
};

export function RiskTiersCard() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent p-6 text-primary-foreground shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground/20">
          <Info className="h-4 w-4 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-primary-foreground">Understanding Risk Tiers</h3>
          <p className="text-xs text-primary-foreground/70">
            Choose the right pool based on your risk tolerance and lending needs
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {riskTiers.map((tier) => (
          <div key={tier.name}>
            <h4 className={cn("mb-3 font-medium", colorStyles[tier.color].text)}>
              {tier.name}
            </h4>
            <ul className="space-y-2">
              {tier.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-primary-foreground/80">
                  <div className={cn(
                    "mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0",
                    colorStyles[tier.color].bullet
                  )} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

