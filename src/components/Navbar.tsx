import { Search, LayoutDashboard, Wallet, Vote, ShoppingCart, Coins, HandCoins, ChevronDown, Bell, Plus, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
  activePage?: "overview" | "vault" | "lending" | "governance" | "marketplace" | "staking";
}

export const Navbar = ({ activePage = "overview" }: NavbarProps) => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: "Overview", active: activePage === "overview", href: "/" },
    { icon: <Wallet className="w-4 h-4" />, label: "Vault", active: activePage === "vault", href: "/vault" },
    { icon: <HandCoins className="w-4 h-4" />, label: "Lending", active: activePage === "lending", href: "/lending" },
    { icon: <Vote className="w-4 h-4" />, label: "Governance", active: activePage === "governance", href: "/governance" },
    { icon: <ShoppingCart className="w-4 h-4" />, label: "Marketplace", hasSubmenu: true, active: activePage === "marketplace" },
    { icon: <Coins className="w-4 h-4" />, label: "Staking", hasSubmenu: true, active: activePage === "staking" },
  ];

  return (
    <header className="h-16 bg-card border-b border-border sticky top-0 z-50">
      <div className="h-full max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/nanofi-logo.png" 
              alt="NanoFi Logo" 
              className="h-8 sm:h-10 w-auto object-contain"
              style={{ maxHeight: '40px', maxWidth: '120px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <NavItem 
                  key={index}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  hasSubmenu={item.hasSubmenu}
                  href={item.href}
                />
              ))}
            </nav>
          )}
        </div>

        {/* Right: Search + Actions + User */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Search */}
          {!isMobile && (
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-48 pl-9 pr-10 py-2 text-sm bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-background px-1.5 py-0.5 rounded">⌘P</kbd>
            </div>
          )}

          {/* Mobile Search Icon */}
          {isMobile && (
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>
          )}

          {/* Live Badge - Hidden on very small screens */}
          <span className="badge-live hidden sm:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
            LIVE
          </span>

          {/* Desktop Actions */}
          {!isMobile && (
            <>
              <Button variant="outline" className="gap-2 hidden lg:flex">
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </Button>
              <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hidden lg:flex">
                <Plus className="w-4 h-4" />
                New Vault
              </Button>
            </>
          )}

          {/* Mobile Actions - Icon only */}
          {isMobile && (
            <>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Wallet className="w-4 h-4" />
              </Button>
              <Button size="icon" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 lg:hidden">
                <Plus className="w-4 h-4" />
              </Button>
            </>
          )}

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* User - Hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-border">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-medium">GF</span>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Menu className="w-5 h-5 text-muted-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img 
                      src="/nanofi-logo.png" 
                      alt="NanoFi Logo" 
                      className="h-10 w-auto object-contain"
                      style={{ maxHeight: '40px', maxWidth: '120px' }}
                    />
                  </div>
                  
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href || "#"}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                          item.active
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Actions */}
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                    <Button variant="outline" className="w-full gap-2 justify-start">
                      <Wallet className="w-4 h-4" />
                      Connect Wallet
                    </Button>
                    <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 justify-start">
                      <Plus className="w-4 h-4" />
                      New Vault
                    </Button>
                  </div>

                  {/* Mobile User Profile */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                      <span className="text-primary-foreground text-xs font-medium">GF</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">George Farm</div>
                      <div className="text-xs text-muted-foreground">Patent Verified</div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};
