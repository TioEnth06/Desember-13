import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  iconBgColor?: string;
  className?: string;
}

export function StatsCard({ icon: Icon, value, label, iconBgColor = "bg-primary/10", className }: StatsCardProps) {
  return (
    <div className={cn(
      "rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md animate-fade-in",
      className
    )}>
      <div className={cn("mb-4 flex h-10 w-10 items-center justify-center rounded-lg", iconBgColor)}>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

