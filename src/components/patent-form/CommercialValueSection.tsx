import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CommercialValueSectionProps {
  onContinue: () => void;
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

export function CommercialValueSection({ onContinue }: CommercialValueSectionProps) {
  return (
    <div className="space-y-6">
      {/* Commercialization Stage */}
      <div>
        <label className="form-label form-label-required">Current Stage of Commercialization</label>
        <Select>
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
        <Select>
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

      {/* Potential Use Cases */}
      <div>
        <label className="form-label form-label-required">Potential Use Cases</label>
        <Textarea 
          placeholder="Describe the potential applications and use cases for this patent..."
          className="min-h-[100px]"
        />
      </div>

      {/* Comparable Market Solutions */}
      <div>
        <label className="form-label form-label-required">Comparable Market Solutions</label>
        <Textarea 
          placeholder="List existing similar solutions in the market and how your patent differs..."
          className="min-h-[100px]"
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

      <div className="flex justify-end pt-4">
        <Button onClick={onContinue} className="gap-2">
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

