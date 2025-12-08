import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Info } from "lucide-react";

interface ValuationSectionProps {
  onContinue: () => void;
}

const valuationBases = [
  "Cost-Based Valuation",
  "Market-Based Valuation",
  "Income-Based Valuation",
  "Relief from Royalty Method",
  "Comparable Transaction Analysis",
  "Expert Appraisal",
  "Self-Assessment"
];

export function ValuationSection({ onContinue }: ValuationSectionProps) {
  return (
    <div className="space-y-6">
      {/* Proposed Valuation */}
      <div>
        <label className="form-label form-label-required">Proposed Valuation (USD)</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="0.00" type="number" min="0" step="0.01" className="pl-9" />
        </div>
        <p className="form-hint">Enter the total valuation amount in US Dollars</p>
      </div>

      {/* Valuation Basis */}
      <div>
        <label className="form-label form-label-required">Valuation Basis</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Valuation Method" />
          </SelectTrigger>
          <SelectContent>
            {valuationBases.map((basis) => (
              <SelectItem key={basis} value={basis.toLowerCase().replace(/\s/g, '-')}>
                {basis}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Valuation Justification */}
      <div>
        <label className="form-label form-label-required">Valuation Justification</label>
        <Textarea 
          placeholder="Provide detailed justification for your proposed valuation, including methodology, comparable transactions, market analysis, or expert opinions..."
          className="min-h-[120px]"
        />
      </div>

      {/* Licensing/Royalty Structure */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label">Expected Licensing Price/Royalty Structure</label>
          <span className="text-xs text-muted-foreground">Optional</span>
        </div>
        <Textarea 
          placeholder="Describe your expected licensing terms, royalty rates, or revenue-sharing structure..."
          className="min-h-[100px]"
        />
      </div>

      {/* Professional Review Note */}
      <div className="rounded-lg border border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 p-4 flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        </div>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <span className="font-medium">Professional Review:</span> All valuations will be reviewed by our expert team. The final valuation may differ based on market analysis and technical assessment.
        </p>
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

