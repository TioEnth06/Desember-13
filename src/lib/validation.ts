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

