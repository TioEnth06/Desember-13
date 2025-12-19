import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Upload, FileText, Image, BarChart3, Info } from "lucide-react";

interface DocumentationSectionProps {
  onContinue: () => void;
  onValidationChange?: (isValid: boolean) => void;
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
  { value: "research", label: "Research" },
  { value: "technology-formulation", label: "Technology Formulation" },
  { value: "experimental-proof", label: "Experimental Proof" },
  { value: "lab-validation", label: "Lab Validation" },
  { value: "integrated-validation", label: "Integrated validation" },
  { value: "prototype", label: "Prototype" },
  { value: "demo", label: "Demo" },
  { value: "completed-qualified", label: "Completed and Qualified" },
  { value: "commercialized", label: "Commercialized" },
];

export function DocumentationSection({ onContinue, onValidationChange }: DocumentationSectionProps) {
  const [trlLevel, setTrlLevel] = React.useState("");
  const [files, setFiles] = React.useState({
    patentDescription: null as File | null,
    technicalSpecification: null as File | null,
  });

  // Validate: TRL level is required, files are optional but recommended
  const isValid = trlLevel !== "";

  React.useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid, onValidationChange]);

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
        <Select onValueChange={setTrlLevel} value={trlLevel}>
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

      {/* Note */}
      <div className="rounded-lg border border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 p-4 flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-500" />
        </div>
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <span className="font-medium">Note:</span> All documents will be securely stored on IPFS and encrypted for confidentiality.
        </p>
      </div>

    </div>
  );
}

