import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { termsSchema, type TermsFormData } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface TermsCollateralSectionProps {
  onContinue: () => void;
}

const lockingMethods = [
  "Smart Contract Lock",
  "Escrow Service",
  "Custodial Wallet",
  "Multi-Signature Wallet"
];

const defaultHandlingOptions = [
  "Automatic Liquidation",
  "Negotiated Settlement",
  "Extension Request",
  "Collateral Transfer"
];

export function TermsCollateralSection({ onContinue }: TermsCollateralSectionProps) {
  const form = useForm<TermsFormData>({
    resolver: zodResolver(termsSchema),
    mode: "onChange",
    defaultValues: {
      lockingMethod: "",
      autoLiquidationConsent: false,
      defaultHandling: "",
    },
  });

  const onSubmit = (data: TermsFormData) => {
    console.log("Terms & Collateral data:", data);
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

        {/* Collateral Locking Method */}
        <FormField
          control={form.control}
          name="lockingMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Collateral Locking Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Locking Method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {lockingMethods.map((method) => (
                    <SelectItem key={method} value={method.toLowerCase().replace(/\s/g, '-')}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Auto-liquidation Consent */}
        <FormField
          control={form.control}
          name="autoLiquidationConsent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="form-label form-label-required">
                  Auto-liquidation Consent
                </FormLabel>
                <p className="text-sm text-muted-foreground">
                  I understand and consent that if the loan-to-value ratio exceeds the threshold, 
                  my collateral may be automatically liquidated to protect lenders.
                </p>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Default Handling Preference */}
        <FormField
          control={form.control}
          name="defaultHandling"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">Default Handling Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Default Handling Preference" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {defaultHandlingOptions.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase().replace(/\s/g, '-')}>
                      {option}
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

