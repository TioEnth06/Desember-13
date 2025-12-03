import { Search, LayoutDashboard, Wallet, Vote, ShoppingCart, Coins, Briefcase, ChevronDown, Bell, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  href?: string;
}

const NavItem = ({ icon, label, active, hasSubmenu, href = "#" }: NavItemProps) => {
  const baseClasses = "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors";
  const activeClasses = active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground";

  const content = (
    <>
      {icon}
      <span>{label}</span>
      {hasSubmenu && <ChevronDown className="w-3 h-3" />}
    </>
  );

  if (href && href !== "#") {
    return (
      <Link to={href} className={cn(baseClasses, activeClasses)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, activeClasses)}>
      {content}
    </button>
  );
};

interface NavbarProps {
  activePage?: "overview" | "vault" | "governance" | "marketplace" | "staking" | "portfolio";
}

export const Navbar = ({ activePage = "overview" }: NavbarProps) => {
  return (
    <header className="h-16 bg-card border-b border-border sticky top-0 z-50">
      <div className="h-full max-w-[1600px] mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">∞</span>
            </div>
            <span className="font-semibold text-lg text-foreground">NANOFi</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <NavItem 
              icon={<LayoutDashboard className="w-4 h-4" />} 
              label="Overview" 
              active={activePage === "overview"}
              href="/"
            />
            <NavItem 
              icon={<Wallet className="w-4 h-4" />} 
              label="Vault" 
              active={activePage === "vault"}
              href="/vault"
            />
            <NavItem 
              icon={<Vote className="w-4 h-4" />} 
              label="Governance" 
              active={activePage === "governance"} 
            />
            <NavItem 
              icon={<ShoppingCart className="w-4 h-4" />} 
              label="Marketplace" 
              hasSubmenu 
              active={activePage === "marketplace"} 
            />
            <NavItem 
              icon={<Coins className="w-4 h-4" />} 
              label="Staking" 
              hasSubmenu 
              active={activePage === "staking"} 
            />
            <NavItem 
              icon={<Briefcase className="w-4 h-4" />} 
              label="Portfolio" 
              hasSubmenu 
              active={activePage === "portfolio"} 
            />
          </nav>
        </div>

        {/* Right: Search + Actions + User */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="w-48 pl-9 pr-10 py-2 text-sm bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-background px-1.5 py-0.5 rounded">⌘P</kbd>
          </div>

          {/* Live Badge */}
          <span className="badge-live">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
            LIVE
          </span>

          {/* Actions */}
          <Button variant="outline" className="gap-2">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4" />
            New Vault
          </Button>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* User */}
          <div className="flex items-center gap-2 pl-3 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-medium">GF</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
