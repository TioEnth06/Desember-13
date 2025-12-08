import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Info } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inventorSchema, type InventorFormData } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface InventorSectionProps {
  onContinue: () => void;
}

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Japan", 
  "China", "India", "Canada", "Australia", "Singapore", "South Korea",
  "Netherlands", "Switzerland", "Sweden", "Brazil"
];

const roles = [
  "Inventor",
  "Patent Owner",
  "Research institution",
  "Company"
];

export function InventorSection({ onContinue }: InventorSectionProps) {
  const form = useForm<InventorFormData>({
    resolver: zodResolver(inventorSchema),
    mode: "onChange", // Validate in real-time as user types
    reValidateMode: "onChange", // Re-validate on change after first validation
    defaultValues: {
      fullName: "",
      role: "",
      email: "",
      phone: "",
      country: "",
      website: "",
    },
  });

  const onSubmit = (data: InventorFormData) => {
    console.log("Form data:", data);
    onContinue();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Auto-saved Badge */}
        <div className="flex items-center gap-2">
          <span className="auto-saved-badge">
            <Check className="w-3 h-3" />
            Auto-saved
          </span>
        </div>

        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1.5">
                <FormLabel className="form-label form-label-required">Full name / Organization Name</FormLabel>
                <span className="text-xs text-muted-foreground">As it appears on legal documents</span>
              </div>
              <FormControl>
                <Input placeholder="Full name/Organization Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Role */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role} value={role.toLowerCase().replace(/\s/g, '-')}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between mb-1.5">
                  <FormLabel className="form-label form-label-required">Email Address</FormLabel>
                  <span className="text-xs text-muted-foreground">We'll send verification here</span>
                </div>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between mb-1.5">
                  <FormLabel className="form-label">Phone Number</FormLabel>
                  <span className="text-xs text-muted-foreground">We'll send verification here</span>
                </div>
                <FormControl>
                  <Input type="tel" placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Country */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Country of Origin</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country.toLowerCase().replace(/\s/g, '-')}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Website */}
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1.5">
                <FormLabel className="form-label">Website / Linkedin / Institution Page</FormLabel>
                <span className="text-xs text-muted-foreground">Optional</span>
              </div>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Privacy Note */}
        <div className="rounded-lg border border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 p-4 flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </div>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <span className="font-medium">Privacy Note:</span> Your contact information will be kept confidential and only used for verification purposes.
          </p>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end pt-4">
          <Button type="submit" className="gap-2">
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
}

