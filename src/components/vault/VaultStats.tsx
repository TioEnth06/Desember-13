import { FileText } from "lucide-react";

const stats = [
  { value: "$45.M", label: "Total Patents" },
  { value: "$28.7M", label: "Minted IP-NFT" },
  { value: "$8.9M", label: "Pending Review" },
  { value: "$7.6M", label: "Total Value" },
];

export const VaultStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-xl p-5 bg-white text-black animate-fade-in"
          style={{ 
            animationDelay: `${index * 100}ms`,
            border: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center mb-4">
            <FileText className="w-5 h-5 text-black" />
          </div>
          <p className="text-3xl font-bold mb-1 text-black">{stat.value}</p>
          <p className="text-sm text-black/80">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
