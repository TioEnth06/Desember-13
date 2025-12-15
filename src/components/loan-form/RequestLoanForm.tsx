import { useState } from "react";
import { FormSection } from "../patent-form/FormSection";
import { BorrowerInformationSection } from "./BorrowerInformationSection";
import { CollateralDetailsSection } from "./CollateralDetailsSection";
import { LoanRequestInfoSection } from "./LoanRequestInfoSection";
import { RiskComplianceSection } from "./RiskComplianceSection";
import { LTVRequestSection } from "./LTVRequestSection";
import { RepaymentStructureSection } from "./RepaymentStructureSection";
import { DocumentsUploadSection } from "./DocumentsUploadSection";
import { TermsCollateralSection } from "./TermsCollateralSection";
import { ReviewSubmitSection } from "./ReviewSubmitSection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type SectionId = 
  | 'borrower' 
  | 'collateral' 
  | 'loan-request' 
  | 'risk-compliance' 
  | 'ltv-request' 
  | 'repayment' 
  | 'documents' 
  | 'terms' 
  | 'review';

interface Section {
  id: SectionId;
  title: string;
  description: string;
}

const sections: Section[] = [
  { id: 'borrower', title: 'Borrower Information', description: "Provide your personal or organizational details for loan application." },
  { id: 'collateral', title: 'Collateral (IP-NFT) Details', description: "Select and verify the IP-NFT you want to use as collateral." },
  { id: 'loan-request', title: 'Loan Request Information', description: "Specify the loan amount, type, duration, and purpose." },
  { id: 'risk-compliance', title: 'Risk & Compliance', description: "Disclose existing obligations, patent status, and legal documentation." },
  { id: 'ltv-request', title: 'Loan-to-Value (LTV) Request', description: "Set your preferred LTV ratio and understand the risk implications." },
  { id: 'repayment', title: 'Repayment & Revenue Structure', description: "Define how you plan to repay the loan and revenue sharing options." },
  { id: 'documents', title: 'Required Documents Upload', description: "Upload all necessary documentation for loan approval." },
  { id: 'terms', title: 'Terms & Collateral Locking', description: "Review and accept the terms for collateral locking and liquidation." },
  { id: 'review', title: 'Review & Submit', description: "Review your application summary and submit for approval." },
];

interface RequestLoanFormProps {
  onClose?: () => void;
}

export function RequestLoanForm({ onClose }: RequestLoanFormProps) {
  const [openSection, setOpenSection] = useState<SectionId>('borrower');
  const [completedSections, setCompletedSections] = useState<SectionId[]>([]);
  const [startedSections, setStartedSections] = useState<SectionId[]>(['borrower']);
  const { toast } = useToast();

  const handleSectionToggle = (sectionId: SectionId) => {
    setOpenSection(openSection === sectionId ? sectionId : sectionId);
    if (!startedSections.includes(sectionId)) {
      setStartedSections([...startedSections, sectionId]);
    }
  };

  const getProgressStatus = (sectionId: SectionId): "undone" | "on progress" | "done" => {
    if (completedSections.includes(sectionId)) {
      return "done";
    } else if (startedSections.includes(sectionId) || openSection === sectionId) {
      return "on progress";
    } else {
      return "undone";
    }
  };

  const handleContinue = (currentSection: SectionId) => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    
    const currentIndex = sections.findIndex(s => s.id === currentSection);
    if (currentIndex < sections.length - 1) {
      setOpenSection(sections[currentIndex + 1].id);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Loan Application Submitted",
      description: "Your loan request has been submitted successfully. We'll review it within 3-5 business days.",
    });
    setTimeout(() => {
      onClose?.();
    }, 1500);
  };

  const renderSectionContent = (sectionId: SectionId) => {
    switch (sectionId) {
      case 'borrower':
        return <BorrowerInformationSection onContinue={() => handleContinue('borrower')} />;
      case 'collateral':
        return <CollateralDetailsSection onContinue={() => handleContinue('collateral')} />;
      case 'loan-request':
        return <LoanRequestInfoSection onContinue={() => handleContinue('loan-request')} />;
      case 'risk-compliance':
        return <RiskComplianceSection onContinue={() => handleContinue('risk-compliance')} />;
      case 'ltv-request':
        return <LTVRequestSection onContinue={() => handleContinue('ltv-request')} />;
      case 'repayment':
        return <RepaymentStructureSection onContinue={() => handleContinue('repayment')} />;
      case 'documents':
        return <DocumentsUploadSection onContinue={() => handleContinue('documents')} />;
      case 'terms':
        return <TermsCollateralSection onContinue={() => handleContinue('terms')} />;
      case 'review':
        return <ReviewSubmitSection onSubmit={handleSubmit} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Form Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Request Loan Form</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Complete all sections to submit your loan application. Your IP-NFT will be used as collateral for the loan.
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
            progress={getProgressStatus(section.id)}
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
          Submit Application
        </Button>
      </div>
    </div>
  );
}


