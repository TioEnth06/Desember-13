import { Button } from "@/components/ui/button";

const metrics = [
  {
    label: "Current Staking APR",
    value: "24.5%",
    badge: "1,823 Investors",
    badgeColor: "bg-muted text-foreground",
  },
  {
    label: "Lending Interest Rate",
    value: "8.2%",
    badge: "+$340 30 days",
    badgeColor: "bg-success/10 text-success",
  },
  {
    label: "Marketplace Volume (24h)",
    value: "$1.2M",
    badge: "$50K - $2.1M",
    badgeColor: "bg-muted text-foreground",
  },
];

export const YieldOverview = () => {
  return (
    <div className="stat-card h-full">
      <h3 className="font-semibold text-foreground mb-1">Yield & APR Overview</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Current rates and market performance metrics
      </p>

      <div className="space-y-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-foreground">{metric.value}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded-lg ${metric.badgeColor}`}>
                {metric.badge}
              </span>
            </div>
            {index < metrics.length - 1 && (
              <div className="border-b border-border mt-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
