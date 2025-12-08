import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface NFTMintingSectionProps {
  onContinue: () => void;
}

export function NFTMintingSection({ onContinue }: NFTMintingSectionProps) {
  return (
    <div className="space-y-6">
      {/* NFT Name */}
      <div>
        <label className="form-label form-label-required">IP-NFT Name</label>
        <Input placeholder="Enter a unique name for your IP-NFT" />
        <p className="form-hint">This name will be displayed on marketplaces and wallets</p>
      </div>

      {/* NFT Symbol */}
      <div>
        <label className="form-label form-label-required">IP-NFT Symbol</label>
        <Input placeholder="e.g., IPNFT" maxLength={10} />
        <p className="form-hint">Short ticker symbol (max 10 characters, uppercase recommended)</p>
      </div>

      {/* Metadata Visibility */}
      <div>
        <label className="form-label form-label-required">NFT Metadata Visibility</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Visibility" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="public">Public - Visible to everyone</SelectItem>
            <SelectItem value="private">Private - Only visible to owner and approved parties</SelectItem>
          </SelectContent>
        </Select>
        <p className="form-hint">Control who can view your patent metadata on-chain</p>
      </div>

      {/* Fractionalization */}
      <div className="rounded-lg border border-border p-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="fractionalization" className="text-sm font-medium">
              Enable Fractionalization
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Allow your IP-NFT to be divided into fractional ownership tokens
            </p>
          </div>
          <Switch id="fractionalization" />
        </div>
      </div>

      {/* Fractionalization Options (conditionally shown) */}
      <div className="space-y-4 pl-4 border-l-2 border-muted">
        <div>
          <label className="form-label">Total Fraction Supply</label>
          <Input placeholder="e.g., 1,000,000" type="number" />
        </div>
        <div>
          <label className="form-label">Initial Price per Fraction (USD)</label>
          <Input placeholder="e.g., 0.01" type="number" step="0.01" />
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={onContinue} className="gap-2">
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

