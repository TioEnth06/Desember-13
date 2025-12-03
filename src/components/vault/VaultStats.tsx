import { FileText } from "lucide-react";

const stats = [
  { value: "$45.M", label: "Total Patents", gradient: "from-accent to-teal-light" },
  { value: "$28.7M", label: "Minted IP-NFT", gradient: "from-accent to-teal-light" },
  { value: "$8.9M", label: "Pending Review", gradient: "from-warning to-amber-400" },
  { value: "$7.6M", label: "Total Value", gradient: "from-accent to-teal-light" },
];

export const VaultStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-xl p-5 bg-gradient-to-br ${stat.gradient} text-primary-foreground animate-fade-in`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-4">
            <FileText className="w-5 h-5" />
          </div>
          <p className="text-3xl font-bold mb-1">{stat.value}</p>
          <p className="text-sm text-primary-foreground/80">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
