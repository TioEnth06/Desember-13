import { FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VaultHero = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Patent Vault</h1>
        <p className="text-muted-foreground text-sm">
          Manage, tokenize, and track your nanotechnology intellectual property portfolio
        </p>
      </div>
      <Button className="gap-2 bg-card text-foreground border border-border hover:bg-muted">
        <FileUp className="w-4 h-4" />
        Tokenize Patent
      </Button>
    </div>
  );
};
