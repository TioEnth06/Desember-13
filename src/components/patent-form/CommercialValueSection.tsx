import React from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";

interface CommercialValueSectionProps {
  onContinue: () => void;
  onValidationChange?: (isValid: boolean) => void;
}

const commercializationStages = [
  "Research & Development",
  "Proof of Concept",
  "Prototype Development",
  "Pilot Production",
  "Initial Market Entry",
  "Growth Phase",
  "Mature Product",
  "Licensed to Third Party"
];

const industries = [
  "Healthcare & Pharmaceuticals",
  "Information Technology",
  "Automotive",
  "Energy & Clean Tech",
  "Consumer Electronics",
  "Manufacturing",
  "Aerospace & Defense",
  "Agriculture & Food Tech",
  "Financial Services",
  "Telecommunications"
];

export function CommercialValueSection({ onContinue, onValidationChange }: CommercialValueSectionProps) {
  const [commercializationStage, setCommercializationStage] = React.useState("");
  const [targetIndustry, setTargetIndustry] = React.useState("");
  const [marketSize, setMarketSize] = React.useState("");
  const [competitiveAdvantage, setCompetitiveAdvantage] = React.useState("");

  const isValid = commercializationStage !== "" && 
                  targetIndustry !== "" && 
                  marketSize !== "" && 
                  competitiveAdvantage.length >= 10;

  React.useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid, onValidationChange]);

  return (
    <div className="space-y-6">
      {/* Commercialization Stage */}
      <div>
        <label className="form-label form-label-required">Current Stage of Commercialization</label>
        <Select onValueChange={setCommercializationStage} value={commercializationStage}>
          <SelectTrigger>
            <SelectValue placeholder="Select Stage" />
          </SelectTrigger>
          <SelectContent>
            {commercializationStages.map((stage) => (
              <SelectItem key={stage} value={stage.toLowerCase().replace(/\s/g, '-')}>
                {stage}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Target Industry */}
      <div>
        <label className="form-label form-label-required">Target Industry</label>
        <Select onValueChange={setTargetIndustry} value={targetIndustry}>
          <SelectTrigger>
            <SelectValue placeholder="Select Industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase().replace(/\s/g, '-')}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Market Size */}
      <div>
        <label className="form-label form-label-required">Market Size</label>
        <Input 
          placeholder="e.g., $50M - $100M annually"
          value={marketSize}
          onChange={(e) => setMarketSize(e.target.value)}
        />
      </div>

      {/* Competitive Advantage */}
      <div>
        <label className="form-label form-label-required">Competitive Advantage</label>
        <Textarea 
          placeholder="Describe your patent's competitive advantage..."
          className="min-h-[100px]"
          value={competitiveAdvantage}
          onChange={(e) => setCompetitiveAdvantage(e.target.value)}
        />
      </div>

      {/* Existing Partners */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label">Existing Partners/Users</label>
          <span className="text-xs text-muted-foreground">Optional</span>
        </div>
        <Input placeholder="List any current partners, licensees, or users" />
      </div>

      {/* Market Insight Note */}
      <div className="rounded-lg border border-green-500/30 bg-green-50 dark:bg-green-900/20 p-4 flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Info className="w-5 h-5 text-green-600 dark:text-green-500" />
        </div>
        <p className="text-sm text-green-800 dark:text-green-200">
          <span className="font-medium">Market Insight:</span> Detailed commercial information helps potential investors better understand the value proposition of your patent.
        </p>
      </div>

    </div>
  );
}

