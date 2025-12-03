import { CheckCircle } from "lucide-react";

const benefits = [
  "Fractional ownership enables broader investor access",
  "Liquidity for traditionally illiquid IP assets",
  "Transparent ownership and transaction history",
  "Automated royalty distribution via smart contracts",
  "Global marketplace access 24/7",
];

export const BenefitsSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-foreground text-center mb-8">Benefits of IP-NFTs</h2>
      <div className="flex flex-col items-center space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
            <p className="text-muted-foreground">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
