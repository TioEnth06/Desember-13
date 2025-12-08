import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface InventorSectionProps {
  onContinue: () => void;
}

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Japan", 
  "China", "India", "Canada", "Australia", "Singapore", "South Korea",
  "Netherlands", "Switzerland", "Sweden", "Brazil"
];

export function InventorSection({ onContinue }: InventorSectionProps) {
  return (
    <div className="space-y-6">
      {/* Auto-saved Badge */}
      <div className="flex items-center gap-2">
        <span className="auto-saved-badge">
          <Check className="w-3 h-3" />
          Auto-saved
        </span>
      </div>

      {/* Full Name */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label form-label-required">Full name / Organization Name</label>
          <span className="text-xs text-muted-foreground">As it appears on legal documents</span>
        </div>
        <Input placeholder="Full name/Organization Name" />
      </div>

      {/* Role */}
      <div>
        <label className="form-label form-label-required">Role</label>
        <Input placeholder="Your role" />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="form-label form-label-required">Email Address</label>
            <span className="text-xs text-muted-foreground">We'll send verification here</span>
          </div>
          <Input type="email" placeholder="Your email" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="form-label">Phone Number</label>
            <span className="text-xs text-muted-foreground">We'll send verification here</span>
          </div>
          <Input type="tel" placeholder="Your phone number" />
        </div>
      </div>

      {/* Country */}
      <div>
        <label className="form-label form-label-required">Country of Origin</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country} value={country.toLowerCase().replace(/\s/g, '-')}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Website */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label">Website / Linkedin / Institution Page</label>
          <span className="text-xs text-muted-foreground">Optional</span>
        </div>
        <Input placeholder="https://" />
      </div>

      {/* Continue Button */}
      <div className="flex justify-end pt-4">
        <Button onClick={onContinue} className="gap-2">
          Continue
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

