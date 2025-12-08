const StakingHero = () => {
  const stats = [
    { label: "Total Staked", value: "$27.50M" },
    { label: "Total Pools", value: "3" },
    { label: "Avg APY", value: "24.6%", highlight: true },
  ];

  return (
    <section className="animate-fade-in">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-foreground lg:text-3xl">
            Earn yield with
            <br />
            NanoFi Staking
          </h2>
          <p className="mt-3 text-muted-foreground">
            Stake your NANO and LP tokens into curated vaults. Automated strategies
            built for sustainable on-chain yield.
          </p>
        </div>

        <div className="flex items-center gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col ${index > 0 ? "border-l border-border pl-6 lg:pl-8" : ""}`}
            >
              <span
                className={`text-2xl font-semibold lg:text-3xl ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakingHero;
