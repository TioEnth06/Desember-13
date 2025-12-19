import { z } from "zod";

// Email validation - comprehensive email format check
export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email address")
  .refine(
    (val) => {
      // Additional check for email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(val);
    },
    {
      message: "Please enter a valid email address (e.g., user@example.com)",
    }
  );

// Phone number validation - supports international formats
export const phoneSchema = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val || val.trim() === "") return true; // Optional field
      // Remove common formatting characters for validation
      const cleaned = val.replace(/[\s\-\(\)\.\+]/g, "");
      // Check if it contains only digits and has reasonable length (7-15 digits)
      const phoneRegex = /^[\d]{7,15}$/;
      return phoneRegex.test(cleaned);
    },
    {
      message: "Please enter a valid phone number (7-15 digits, formats like +1-555-123-4567 or (555) 123-4567)",
    }
  );

// Website/URL validation - supports various URL formats including LinkedIn
export const websiteSchema = z
  .string()
  .optional()
  .refine(
    (val) => {
      if (!val || val.trim() === "") return true; // Optional field
      const trimmed = val.trim();
      
      // Check if it's a valid URL format
      try {
        // If it doesn't start with http:// or https://, add https://
        const url = trimmed.startsWith("http://") || trimmed.startsWith("https://") 
          ? trimmed 
          : `https://${trimmed}`;
        
        const urlObj = new URL(url);
        
        // Validate it has a valid hostname
        if (!urlObj.hostname || urlObj.hostname.length < 3) {
          return false;
        }
        
        // Check for valid domain format (at least one dot or valid TLD)
        const domainRegex = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i;
        return domainRegex.test(urlObj.hostname) || 
               urlObj.hostname.includes("linkedin.com") ||
               urlObj.hostname.includes("github.com") ||
               urlObj.hostname.includes("institution");
      } catch {
        return false;
      }
    },
    {
      message: "Please enter a valid website URL (e.g., https://example.com or linkedin.com/in/username)",
    }
  );

// Combined validation schemas for form sections
export const inventorSchema = z.object({
  fullName: z.string().min(1, "Full name or organization name is required"),
  role: z.string().min(1, "Role is required"),
  email: emailSchema,
  phone: phoneSchema,
  country: z.string().min(1, "Country is required"),
  website: websiteSchema,
});

export type InventorFormData = z.infer<typeof inventorSchema>;

// Loan form validation schemas
export const borrowerSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  role: z.string().min(1, "Role is required"),
  email: emailSchema,
  phone: phoneSchema,
  country: z.string().min(1, "Country/Jurisdiction is required"),
});

export type BorrowerFormData = z.infer<typeof borrowerSchema>;

export const collateralSchema = z.object({
  ipNftId: z.string().min(1, "Please select an IP-NFT"),
  patentTitle: z.string(),
  valuationSource: z.string().min(1, "Valuation source is required"),
  verifiedValue: z.string().min(1, "Verified collateral value is required"),
});

export type CollateralFormData = z.infer<typeof collateralSchema>;

export const loanRequestSchema = z.object({
  requestedAmount: z.string().min(1, "Requested loan amount is required"),
  loanType: z.string().min(1, "Loan type is required"),
  loanDuration: z.string().min(1, "Loan duration is required"),
  interestModel: z.string().min(1, "Interest model is required"),
  purpose: z.string().min(1, "Purpose of loan is required"),
  fundingProposal: z.any().nullable(),
});

export type LoanRequestFormData = z.infer<typeof loanRequestSchema>;

export const riskComplianceSchema = z.object({
  existingObligations: z.string().min(1, "Please disclose existing obligations"),
  coOwnership: z.string().min(1, "Co-ownership confirmation is required"),
  patentStatus: z.string().min(1, "Patent status is required"),
  materialRisks: z.string().optional(),
  ipLegalDocs: z.any().nullable(),
});

export type RiskComplianceFormData = z.infer<typeof riskComplianceSchema>;

export const ltvRequestSchema = z.object({
  preferredLTV: z.string().min(1, "Preferred LTV is required"),
  ltvRiskInfo: z.string().min(1, "LTV risk information is required"),
  collateralValue: z.string().min(1, "Collateral value is required"),
  maxLoanAmount: z.string(),
});

export type LTVRequestFormData = z.infer<typeof ltvRequestSchema>;

export const repaymentSchema = z.object({
  repaymentMethod: z.string().min(1, "Repayment method is required"),
  repaymentSource: z.string().min(1, "Source of repayment is required"),
  royaltyShare: z.string().optional(),
});

export type RepaymentFormData = z.infer<typeof repaymentSchema>;

export const documentsSchema = z.object({
  patentCertificate: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Patent Certificate/Filing Document is required"
  }),
  valuationDocument: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Valuation Document is required"
  }),
  technicalDocumentation: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Technical Documentation is required"
  }),
  financialProjection: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Financial Projection is required"
  }),
  companyRegistration: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Company Registration/KYC is required"
  }),
});

export type DocumentsFormData = z.infer<typeof documentsSchema>;

export const termsSchema = z.object({
  lockingMethod: z.string().min(1, "Collateral locking method is required"),
  autoLiquidationConsent: z.boolean().refine(val => val === true, {
    message: "You must consent to auto-liquidation terms"
  }),
  defaultHandling: z.string().min(1, "Default handling preference is required"),
});

export type TermsFormData = z.infer<typeof termsSchema>;

// Patent Vault Form validation schemas
export const patentDetailsSchema = z.object({
  patentTitle: z.string().min(1, "Patent title is required"),
  category: z.string().min(1, "Patent category is required"),
  registrationNumber: z.string().min(1, "Patent registration number is required"),
  filingDate: z.string().min(1, "Filing date is required"),
  jurisdiction: z.string().min(1, "Jurisdiction is required"),
  abstract: z.string().min(10, "Patent abstract must be at least 10 characters").max(1000, "Patent abstract must not exceed 1000 characters"),
  keywords: z.string().min(1, "Keywords are required"),
});

export type PatentDetailsFormData = z.infer<typeof patentDetailsSchema>;

export const documentationSchema = z.object({
  patentDescription: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Patent Description is required"
  }),
  technicalSpecification: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Technical Specification Document is required"
  }),
  trlLevel: z.string().min(1, "TRL Level is required"),
});

export type DocumentationFormData = z.infer<typeof documentationSchema>;

export const commercialValueSchema = z.object({
  commercializationStage: z.string().min(1, "Commercialization stage is required"),
  targetIndustry: z.string().min(1, "Target industry is required"),
  marketSize: z.string().min(1, "Market size is required"),
  competitiveAdvantage: z.string().min(10, "Competitive advantage must be at least 10 characters"),
});

export type CommercialValueFormData = z.infer<typeof commercialValueSchema>;

export const ownershipSchema = z.object({
  ownershipPercentage: z.string().min(1, "Ownership percentage is required"),
  coOwners: z.array(z.object({
    name: z.string().min(1, "Co-owner name is required"),
    percentage: z.string().min(1, "Percentage is required"),
  })).optional(),
});

export type OwnershipFormData = z.infer<typeof ownershipSchema>;

export const valuationSchema = z.object({
  proposedValuation: z.string().min(1, "Proposed valuation is required"),
  valuationBasis: z.string().min(1, "Valuation basis is required"),
  valuationMethodology: z.string().min(10, "Valuation methodology must be at least 10 characters"),
});

export type ValuationFormData = z.infer<typeof valuationSchema>;

export const nftMintingSchema = z.object({
  tokenName: z.string().min(1, "Token name is required"),
  tokenSymbol: z.string().min(1, "Token symbol is required").max(10, "Token symbol must not exceed 10 characters"),
  fractionalizationEnabled: z.boolean(),
  totalSupply: z.string().optional(),
});

export type NFTMintingFormData = z.infer<typeof nftMintingSchema>;

