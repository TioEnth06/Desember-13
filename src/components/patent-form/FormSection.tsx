import { ChevronDown, Check, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FormSectionProps {
  title: string;
  description: string;
  isOpen: boolean;
  isComplete: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function FormSection({ title, description, isOpen, isComplete, onToggle, children }: FormSectionProps) {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="shadow-card rounded-lg overflow-hidden animate-fade-in">
      <CollapsibleTrigger className="w-full">
        <div className={cn(
          "section-header",
          isOpen ? "rounded-t-lg rounded-b-none" : "rounded-lg"
        )}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold">{title}</h3>
                {isComplete && (
                  <span className="inline-flex items-center gap-1 bg-success text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3" />
                    Done
                  </span>
                )}
              </div>
              <p className="text-sm text-primary-foreground/70 mt-0.5">{description}</p>
            </div>
          </div>
          <ChevronDown className={cn(
            "w-5 h-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="section-content">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

