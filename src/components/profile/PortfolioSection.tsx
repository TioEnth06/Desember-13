import { Wallet, HandCoins, Coins, TrendingUp } from "lucide-react";

export function PortfolioSection() {
  const portfolioStats = [
    {
      label: "Total IP-NFT Value",
      value: "$1,200,000",
      icon: Wallet,
    },
    {
      label: "Total Borrowed",
      value: "$250,000",
      icon: HandCoins,
    },
    {
      label: "Active Staking",
      value: "$180,000",
      icon: Coins,
    },
    {
      label: "Yield Earned",
      value: "$32,400",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Portfolio Overview</h1>
        <p className="text-muted-foreground mt-1">View your complete portfolio summary</p>
      </div>

      <div className="bg-card rounded-xl border border-border p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolioStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="border border-border rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

