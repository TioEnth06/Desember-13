import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, HandCoins, ShoppingCart } from "lucide-react";

export function MyIPNFTsSection() {
  const ipNFTs = [
    {
      id: "#00123",
      title: "Nano Coating Technology",
      status: "Verified",
      valuation: "$250,000",
      usage: "Collateral",
    },
    {
      id: "#00124",
      title: "Quantum Dot Display",
      status: "Verified",
      valuation: "$180,000",
      usage: "Marketplace",
    },
    {
      id: "#00125",
      title: "Graphene Battery Tech",
      status: "Pending",
      valuation: "$320,000",
      usage: "Idle",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My IP-NFTs</h1>
        <p className="text-muted-foreground mt-1">Manage your tokenized intellectual property</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {ipNFTs.map((nft) => (
          <div key={nft.id} className="bg-card rounded-xl border border-border p-4 sm:p-6">
            <div className="flex flex-col gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{nft.title}</h3>
                  <Badge 
                    variant={nft.status === "Verified" ? "default" : "secondary"}
                    className={nft.status === "Verified" ? "bg-success/10 text-success border-success/20" : ""}
                  >
                    {nft.status}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Token ID</span>
                    <span className="font-mono text-foreground">{nft.id}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Valuation</span>
                    <span className="font-semibold text-foreground">{nft.valuation}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Usage</span>
                    <Badge variant="outline">{nft.usage}</Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">
                <Button variant="outline" size="sm" className="gap-2">
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <HandCoins className="w-4 h-4" />
                  Use as Collateral
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Marketplace
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

