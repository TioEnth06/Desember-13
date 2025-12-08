import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface PatentDetailsSectionProps {
  onContinue: () => void;
}

const categories = [
  "Biotechnology", "Software & IT", "Medical Devices", "Clean Energy",
  "Pharmaceuticals", "Nanotechnology", "Artificial Intelligence", "Materials Science",
  "Automotive", "Aerospace", "Telecommunications", "Consumer Electronics"
];

const jurisdictions = [
  "USPTO (United States)", "EPO (Europe)", "JPO (Japan)", "CNIPA (China)",
  "KIPO (South Korea)", "UKIPO (United Kingdom)", "CIPO (Canada)", "IP Australia",
  "WIPO (International)"
];

export function PatentDetailsSection({ onContinue }: PatentDetailsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="auto-saved-badge">
          <Check className="w-3 h-3" />
          Auto-saved
        </span>
      </div>

      {/* Patent Title */}
      <div>
        <label className="form-label form-label-required">Patent Title</label>
        <Input placeholder="Enter the official patent title" />
      </div>

      {/* Category & Registration Number */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label form-label-required">Patent Category</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase().replace(/\s/g, '-')}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="form-label form-label-required">Patent Registration Number</label>
          <Input placeholder="e.g., US10,123,456" />
        </div>
      </div>

      {/* Filing Date & Jurisdiction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="form-label form-label-required">Filing Date</label>
          <Input type="date" />
        </div>
        <div>
          <label className="form-label form-label-required">Jurisdiction</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Jurisdiction" />
            </SelectTrigger>
            <SelectContent>
              {jurisdictions.map((j) => (
                <SelectItem key={j} value={j.toLowerCase().replace(/\s/g, '-')}>
                  {j}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Patent Abstract */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label form-label-required">Patent Abstract</label>
          <span className="text-xs text-muted-foreground">Max 1000 characters</span>
        </div>
        <Textarea 
          placeholder="Provide a brief summary of your patent invention..."
          className="min-h-[120px]"
          maxLength={1000}
        />
      </div>

      {/* Keywords */}
      <div>
        <label className="form-label form-label-required">Keywords</label>
        <Input placeholder="Enter keywords separated by commas" />
        <p className="form-hint">Add relevant keywords to improve discoverability</p>
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

