import VaultCard from "./VaultCard";

const VaultsSection = () => {
  const vaults = [
    {
      name: "NANO Single-Sided",
      deposited: "20,700 NANO",
      tvl: "$12.40M",
      apy: "15.5%",
      earnings: "$1.25K",
      riskLevel: "Standard" as const,
    },
    {
      name: "NANO Single-Sided",
      deposited: "20,700 NANO",
      tvl: "$12.40M",
      apy: "15.5%",
      earnings: "$1.25K",
      riskLevel: "Standard" as const,
    },
    {
      name: "NANO Single-Sided",
      deposited: "20,700 NANO",
      tvl: "$12.40M",
      apy: "15.5%",
      earnings: "$1.25K",
      riskLevel: "Standard" as const,
    },
    {
      name: "NANO Single-Sided",
      deposited: "20,700 NANO",
      tvl: "$12.40M",
      apy: "15.5%",
      earnings: "$1.25K",
      riskLevel: "Standard" as const,
    },
  ];

  return (
    <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">Your staking vaults</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage all active positions, yields, and rewards.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {vaults.map((vault, index) => (
          <VaultCard key={index} {...vault} />
        ))}
      </div>
    </section>
  );
};

export default VaultsSection;
