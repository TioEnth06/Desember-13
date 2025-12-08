import { useState } from "react";
import { FormSection } from "./FormSection";
import { InventorSection } from "./InventorSection";
import { PatentDetailsSection } from "./PatentDetailsSection";
import { DocumentationSection } from "./DocumentationSection";
import { CommercialValueSection } from "./CommercialValueSection";
import { OwnershipSection } from "./OwnershipSection";
import { ValuationSection } from "./ValuationSection";
import { NFTMintingSection } from "./NFTMintingSection";
import { SignSubmitSection } from "./SignSubmitSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type SectionId = 
  | 'inventor' 
  | 'patent' 
  | 'documentation' 
  | 'commercial' 
  | 'ownership' 
  | 'valuation' 
  | 'nft' 
  | 'submit';

interface Section {
  id: SectionId;
  title: string;
  description: string;
}

const sections: Section[] = [
  { id: 'inventor', title: 'Inventor Details', description: "Share who is behind this patent. You can update these details later before submission." },
  { id: 'patent', title: 'Patent Details', description: "Provide the core information about your patent registration and classification." },
  { id: 'documentation', title: 'Documentation', description: "Upload required documents including specifications and technical drawings." },
  { id: 'commercial', title: 'Commercial Value & Market Information', description: "Describe the commercial potential and market positioning of your patent." },
  { id: 'ownership', title: 'Ownership Verification', description: "Verify your ownership rights and list any co-owners of the patent." },
  { id: 'valuation', title: 'Requested IP Valuation', description: "Propose your valuation with supporting justification and methodology." },
  { id: 'nft', title: 'IP-NFT Minting Parameters', description: "Configure how your patent will be tokenized as an IP-NFT." },
  { id: 'submit', title: 'Sign & Submit', description: "Review and sign your application to complete the submission." },
];

interface PatentVaultFormProps {
  onClose?: () => void;
}

export function PatentVaultForm({ onClose }: PatentVaultFormProps) {
  const [openSection, setOpenSection] = useState<SectionId>('inventor');
  const [completedSections, setCompletedSections] = useState<SectionId[]>([]);
  const { toast } = useToast();

  const handleSectionToggle = (sectionId: SectionId) => {
    setOpenSection(openSection === sectionId ? sectionId : sectionId);
  };

  const handleContinue = (currentSection: SectionId) => {
    // Mark current section as complete
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    
    // Move to next section
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    if (currentIndex < sections.length - 1) {
      setOpenSection(sections[currentIndex + 1].id);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Application Submitted",
      description: "Your patent vault application has been submitted successfully. We'll review it within 3-5 business days.",
    });
    // Close dialog after a short delay
    setTimeout(() => {
      onClose?.();
    }, 1500);
  };

  const renderSectionContent = (sectionId: SectionId) => {
    switch (sectionId) {
      case 'inventor':
        return <InventorSection onContinue={() => handleContinue('inventor')} />;
      case 'patent':
        return <PatentDetailsSection onContinue={() => handleContinue('patent')} />;
      case 'documentation':
        return <DocumentationSection onContinue={() => handleContinue('documentation')} />;
      case 'commercial':
        return <CommercialValueSection onContinue={() => handleContinue('commercial')} />;
      case 'ownership':
        return <OwnershipSection onContinue={() => handleContinue('ownership')} />;
      case 'valuation':
        return <ValuationSection onContinue={() => handleContinue('valuation')} />;
      case 'nft':
        return <NFTMintingSection onContinue={() => handleContinue('nft')} />;
      case 'submit':
        return <SignSubmitSection onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Form Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Patent Vault Form</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Start by describing the inventor and organization behind this patent. We use this information to verify ownership and prepare your IP for tokenization.
        </p>
      </div>

      {/* Form Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <FormSection
            key={section.id}
            title={section.title}
            description={section.description}
            isOpen={openSection === section.id}
            isComplete={completedSections.includes(section.id)}
            onToggle={() => handleSectionToggle(section.id)}
          >
            {renderSectionContent(section.id)}
          </FormSection>
        ))}
      </div>

      {/* Submit Button (always visible) */}
      <div className="flex justify-end mt-6">
        <Button 
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary/90 px-8"
          disabled={completedSections.length < sections.length - 1}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

