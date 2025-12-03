import { Coins, ShieldCheck, Zap } from "lucide-react";

const infoItems = [
  {
    icon: Coins,
    title: "Any Token Holder Can Propose",
    description: "Minimum 1,000 NANO tokens required",
  },
  {
    icon: ShieldCheck,
    title: "SPV Review Recommended",
    description: "Increases credibility and approval rate",
  },
  {
    icon: Zap,
    title: "On-Chain Execution",
    description: "Passed proposals execute automatically",
  },
];

export function CreateProposalInfo() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
      <h3 className="mb-4 text-lg font-semibold text-foreground">Creating Proposals</h3>
      <div className="space-y-4">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

