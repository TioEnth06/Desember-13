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
    <div className="stat-card">
      <h3 className="font-semibold text-foreground mb-1">Yield & APR Overview</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Current rates and market performance metrics
      </p>

      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="animate-fade-in"
            style={{ 
              animationDelay: `${index * 100}ms`,
              padding: '16px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              boxShadow: '0 33px 9px 0 rgba(0, 0, 0, 0.00), 0 21px 8px 0 rgba(0, 0, 0, 0.01), 0 12px 7px 0 rgba(0, 0, 0, 0.02), 0 5px 5px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.04)'
            }}
          >
            <p className="text-sm text-muted-foreground mb-12">{metric.label}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-foreground">{metric.value}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded-lg ${metric.badgeColor}`}>
                {metric.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
