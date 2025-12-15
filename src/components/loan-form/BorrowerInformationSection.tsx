import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { borrowerSchema, type BorrowerFormData } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface BorrowerInformationSectionProps {
  onContinue: () => void;
}

const countries = [
  "United States", "United Kingdom", "Germany", "France", "Japan", 
  "China", "India", "Canada", "Australia", "Singapore", "South Korea",
  "Netherlands", "Switzerland", "Sweden", "Brazil"
];

const roles = [
  "Individual Borrower",
  "Company/Organization",
  "Research Institution",
  "Patent Owner"
];

export function BorrowerInformationSection({ onContinue }: BorrowerInformationSectionProps) {
  const form = useForm<BorrowerFormData>({
    resolver: zodResolver(borrowerSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      role: "",
      email: "",
      phone: "",
      country: "",
    },
  });

  const onSubmit = (data: BorrowerFormData) => {
    console.log("Borrower data:", data);
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
                <FormLabel className="form-label form-label-required">Full name</FormLabel>
                <span className="text-xs text-muted-foreground">As it appears on legal documents</span>
              </div>
              <FormControl>
                <Input placeholder="Full name" {...field} />
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

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1.5">
                <FormLabel className="form-label form-label-required">Email address</FormLabel>
                <span className="text-xs text-muted-foreground">We'll send verification here</span>
              </div>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1.5">
                <FormLabel className="form-label">Phone number</FormLabel>
                <span className="text-xs text-muted-foreground">Optional</span>
              </div>
              <FormControl>
                <Input type="tel" placeholder="+1 (555) 000-0000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Country/Jurisdiction */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Country/Jurisdiction</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country/Jurisdiction" />
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

