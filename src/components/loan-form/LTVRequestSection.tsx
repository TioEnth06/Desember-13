import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Info } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ltvRequestSchema, type LTVRequestFormData } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface LTVRequestSectionProps {
  onContinue: () => void;
}

export function LTVRequestSection({ onContinue }: LTVRequestSectionProps) {
  const form = useForm<LTVRequestFormData>({
    resolver: zodResolver(ltvRequestSchema),
    mode: "onChange",
    defaultValues: {
      preferredLTV: "",
      ltvRiskInfo: "",
      collateralValue: "",
      maxLoanAmount: "",
    },
  });

  const preferredLTV = parseFloat(form.watch("preferredLTV") || "0");
  const collateralValue = parseFloat(form.watch("collateralValue") || "0");
  const calculatedMaxLoan = (collateralValue * preferredLTV) / 100;

  const onSubmit = (data: LTVRequestFormData) => {
    console.log("LTV Request data:", data);
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

        {/* Preferred LTV */}
        <FormField
          control={form.control}
          name="preferredLTV"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between mb-1.5">
                <FormLabel className="form-label form-label-required">Preferred LTV (%)</FormLabel>
                <span className="text-xs text-muted-foreground">Recommended: 50-70%</span>
              </div>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="0" 
                  {...field}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* LTV Risk Information */}
        <FormField
          control={form.control}
          name="ltvRiskInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label form-label-required">LTV Risk Information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Acknowledge that you understand the risks associated with your requested LTV ratio..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Collateral Value & Max Loan Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="collateralValue"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label form-label-required">Collateral Value (USD)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="0.00" 
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value);
                      const value = parseFloat(e.target.value) || 0;
                      const ltv = parseFloat(form.getValues("preferredLTV") || "0");
                      form.setValue("maxLoanAmount", ((value * ltv) / 100).toFixed(2));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxLoanAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Max Loan Amount (USD)</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    placeholder="Auto-calculated" 
                    {...field}
                    disabled
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Info Box */}
        <div className="rounded-lg border border-blue-500/30 bg-blue-50 dark:bg-blue-900/20 p-4 flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-500" />
          </div>
          <div className="text-sm text-blue-800 dark:text-blue-200">
            <p className="font-medium mb-1">LTV Risk Information:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Higher LTV ratios (70%+) carry increased risk of liquidation</li>
              <li>Lower LTV ratios (50% or less) provide more safety margin</li>
              <li>Your collateral value determines the maximum loan amount</li>
            </ul>
          </div>
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

