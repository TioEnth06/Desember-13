import { Search, LayoutDashboard, Wallet, Vote, ShoppingCart, Coins, Briefcase, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

const NavItem = ({ icon, label, active, hasSubmenu }: NavItemProps) => (
  <button className={cn("nav-item w-full justify-between", active && "nav-item-active")}>
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    {hasSubmenu && <ChevronDown className="w-4 h-4" />}
  </button>
);

export const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">∞</span>
          </div>
          <span className="font-semibold text-lg text-foreground">NANOFi</span>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-12 py-2 text-sm bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-background px-1.5 py-0.5 rounded">⌘P</kbd>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        <NavItem icon={<LayoutDashboard className="w-5 h-5" />} label="Overview" active />
        <NavItem icon={<Wallet className="w-5 h-5" />} label="Vault" />
        <NavItem icon={<Vote className="w-5 h-5" />} label="Governance" />
        <NavItem icon={<ShoppingCart className="w-5 h-5" />} label="Marketplace" hasSubmenu />
        <NavItem icon={<Coins className="w-5 h-5" />} label="Staking" hasSubmenu />
        <NavItem icon={<Briefcase className="w-5 h-5" />} label="Portfolio" hasSubmenu />
      </nav>

      {/* User */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-medium">GF</span>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">George Form</p>
            <p className="text-xs text-muted-foreground">Patent Verified</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
