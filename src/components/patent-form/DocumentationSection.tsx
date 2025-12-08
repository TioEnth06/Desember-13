import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Upload, FileText, Image, BarChart3 } from "lucide-react";

interface DocumentationSectionProps {
  onContinue: () => void;
}

interface FileUploadProps {
  label: string;
  required?: boolean;
  hint?: string;
  icon: React.ReactNode;
  accept?: string;
}

function FileUpload({ label, required, hint, icon, accept }: FileUploadProps) {
  return (
    <div>
      <label className={`form-label ${required ? 'form-label-required' : ''}`}>{label}</label>
      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
        <input type="file" className="hidden" accept={accept} />
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-muted-foreground">{hint || 'PDF, DOC, DOCX (max 10MB)'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const trlLevels = [
  { value: "1", label: "TRL 1 - Basic principles observed" },
  { value: "2", label: "TRL 2 - Technology concept formulated" },
  { value: "3", label: "TRL 3 - Experimental proof of concept" },
  { value: "4", label: "TRL 4 - Technology validated in lab" },
  { value: "5", label: "TRL 5 - Technology validated in relevant environment" },
  { value: "6", label: "TRL 6 - Technology demonstrated in relevant environment" },
  { value: "7", label: "TRL 7 - System prototype demonstration in operational environment" },
  { value: "8", label: "TRL 8 - System complete and qualified" },
  { value: "9", label: "TRL 9 - Actual system proven in operational environment" },
];

export function DocumentationSection({ onContinue }: DocumentationSectionProps) {
  return (
    <div className="space-y-6">
      <FileUpload 
        label="Patent Description"
        required
        icon={<FileText className="w-5 h-5 text-muted-foreground" />}
        accept=".pdf,.doc,.docx"
      />

      <FileUpload 
        label="Technical Specification Document"
        required
        icon={<FileText className="w-5 h-5 text-muted-foreground" />}
        accept=".pdf,.doc,.docx"
      />

      <FileUpload 
        label="Figures/Drawings"
        hint="PDF, PNG, JPG (max 10MB each)"
        icon={<Image className="w-5 h-5 text-muted-foreground" />}
        accept=".pdf,.png,.jpg,.jpeg"
      />

      <FileUpload 
        label="Experimental Data/Lab Results (If Any)"
        hint="PDF, CSV, XLSX (max 10MB)"
        icon={<BarChart3 className="w-5 h-5 text-muted-foreground" />}
        accept=".pdf,.csv,.xlsx"
      />

      {/* TRL Level */}
      <div>
        <label className="form-label form-label-required">TRL (Technology Readiness Level)</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select TRL Level" />
          </SelectTrigger>
          <SelectContent>
            {trlLevels.map((level) => (
              <SelectItem key={level.value} value={level.value}>
                {level.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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

