import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload, FileText, Plus, Trash2, Info } from "lucide-react";
import { useState } from "react";

interface OwnershipSectionProps {
  onContinue: () => void;
}

interface CoOwner {
  id: string;
  name: string;
  percentage: string;
}

export function OwnershipSection({ onContinue }: OwnershipSectionProps) {
  const [coOwners, setCoOwners] = useState<CoOwner[]>([]);

  const addCoOwner = () => {
    setCoOwners([...coOwners, { id: Date.now().toString(), name: '', percentage: '' }]);
  };

  const removeCoOwner = (id: string) => {
    setCoOwners(coOwners.filter(co => co.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Proof of Ownership */}
      <div>
        <label className="form-label form-label-required">Proof of Patent Ownership (PDF)</label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <input type="file" className="hidden" accept=".pdf" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">Official patent certificate or assignment document (PDF)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inventor Certification */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label">Inventor Certification/Affidavit</label>
          <span className="text-xs text-muted-foreground">Optional</span>
        </div>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <input type="file" className="hidden" accept=".pdf" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <Upload className="w-5 h-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">Signed affidavit or certification (PDF)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Owners */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="form-label">Co-Owners (If any)</label>
          <Button type="button" variant="outline" size="sm" onClick={addCoOwner} className="gap-1">
            <Plus className="w-4 h-4" />
            Add Co-Owner
          </Button>
        </div>
        
        {coOwners.length > 0 && (
          <div className="space-y-3">
            {coOwners.map((coOwner, index) => (
              <div key={coOwner.id} className="flex gap-3 items-start">
                <div className="flex-1">
                  <Input placeholder={`Co-Owner ${index + 1} Name`} />
                </div>
                <div className="w-32">
                  <Input placeholder="% Ownership" type="number" min="0" max="100" />
                </div>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon"
                  onClick={() => removeCoOwner(coOwner.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {coOwners.length === 0 && (
          <p className="text-sm text-muted-foreground">No co-owners added. Click "Add Co-Owner" if applicable.</p>
        )}
      </div>

      {/* Percentage Ownership */}
      <div>
        <label className="form-label form-label-required">Your Percentage Ownership</label>
        <div className="relative">
          <Input placeholder="100" type="number" min="0" max="100" className="pr-8" />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
        </div>
      </div>

      {/* Important Warning Note */}
      <div className="rounded-lg border border-yellow-500/30 bg-yellow-50 dark:bg-yellow-900/20 p-4 flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
        </div>
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <span className="font-medium">Important:</span> Providing false ownership information is a serious offense and may result in legal action and permanent ban from the platform.
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

