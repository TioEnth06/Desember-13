import { Search, LayoutDashboard, Wallet, Vote, ShoppingCart, Coins, HandCoins, ChevronDown, Bell, Plus, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useDevice } from "@/hooks/use-device";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  href?: string;
}

interface NavItemWithDialogProps extends NavItemProps {
  onComingSoon?: () => void;
}

const NavItem = ({ icon, label, active, hasSubmenu, href = "#", onComingSoon }: NavItemWithDialogProps) => {
  const baseClasses = "flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap";
  const activeClasses = active ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground";

  const content = (
    <>
      {icon}
      <span>{label}</span>
      {hasSubmenu && <ChevronDown className="w-3 h-3" />}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (onComingSoon) {
      e.preventDefault();
      onComingSoon();
    }
  };

  if (href && href !== "#" && !onComingSoon) {
    return (
      <Link to={href} className={cn(baseClasses, activeClasses)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(baseClasses, activeClasses)} onClick={handleClick}>
      {content}
    </button>
  );
};

interface NavbarProps {
  activePage?: "overview" | "vault" | "lending" | "governance" | "marketplace" | "staking";
}

export const Navbar = ({ activePage = "overview" }: NavbarProps) => {
  const { isMobile, isTablet, isDesktop } = useDevice();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);

  const navItems = [
    { icon: <LayoutDashboard className="w-4 h-4" />, label: "Overview", active: activePage === "overview", href: "/" },
    { icon: <Wallet className="w-4 h-4" />, label: "Vault", active: activePage === "vault", href: "/vault" },
    { icon: <HandCoins className="w-4 h-4" />, label: "Lending", active: activePage === "lending", href: "/lending" },
    { icon: <Vote className="w-4 h-4" />, label: "Governance", active: activePage === "governance", href: "/governance" },
    { icon: <ShoppingCart className="w-4 h-4" />, label: "Marketplace", hasSubmenu: true, active: activePage === "marketplace", onComingSoon: true },
    { icon: <Coins className="w-4 h-4" />, label: "Staking", hasSubmenu: true, active: activePage === "staking", onComingSoon: true },
  ];

  return (
    <header className="h-14 md:h-16 bg-card border-b border-border sticky top-0 z-50">
      <div className="h-full max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between gap-2 md:gap-4">
        {/* Left: Logo + Nav + Live Badge + User */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-1 min-w-0">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/nanofi-logo.png" 
              alt="NanoFi Logo" 
              className="h-7 sm:h-8 md:h-10 w-auto object-contain"
              style={{ maxHeight: '40px', maxWidth: '120px' }}
            />
          </Link>

          {/* Desktop & Tablet Navigation - Show above 1340px */}
          <nav className="hidden nav:flex items-center gap-0.5 lg:gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => (
              <NavItem 
                key={index}
                icon={item.icon}
                label={item.label}
                active={item.active}
                hasSubmenu={item.hasSubmenu}
                href={item.href}
                onComingSoon={item.onComingSoon ? () => setComingSoonOpen(true) : undefined}
              />
            ))}
          </nav>

          {/* Live Badge - Show on tablet and desktop */}
          {!isMobile && (
            <span className="badge-live hidden sm:flex flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
              LIVE
            </span>
          )}

        </div>

        {/* Right: Actions + Notifications + Mobile Menu */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 flex-shrink-0">
          {/* Search Icon - Mobile & Tablet */}
          {(isMobile || isTablet) && (
            <button className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
            </button>
          )}

          {/* Live Badge - Mobile only */}
          {isMobile && (
            <span className="badge-live flex flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-slow" />
              <span className="hidden xs:inline">LIVE</span>
            </span>
          )}

          {/* Desktop Actions - Full buttons on desktop, icon-only on tablet */}
          {!isMobile && (
            <>
              <Button 
                variant="outline" 
                size={isTablet ? "icon" : "default"}
                className={cn(
                  "gap-2",
                  isTablet ? "h-9 w-9" : "hidden lg:flex"
                )}
              >
                <Wallet className="w-4 h-4" />
                {isDesktop && <span>Connect Wallet</span>}
              </Button>
              <Button 
                size={isTablet ? "icon" : "default"}
                className={cn(
                  "gap-2 bg-primary text-primary-foreground hover:bg-primary/90",
                  isTablet ? "h-9 w-9" : "hidden lg:flex"
                )}
              >
                <Plus className="w-4 h-4" />
                {isDesktop && <span>New Vault</span>}
              </Button>
            </>
          )}

          {/* Notifications - Always visible */}
          <button className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
          </button>

          {/* User Avatar - Show on tablet and desktop */}
          {!isMobile && (
            <div className="hidden sm:flex items-center gap-2 pl-2 md:pl-3 border-l border-border flex-shrink-0">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-medium">GF</span>
              </div>
            </div>
          )}

          {/* Hamburger Menu Toggle - Hidden on all screens */}
          <div className="hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="p-1.5 sm:p-2 rounded-lg hover:bg-muted transition-colors">
                  <Menu className="w-5 h-5 text-muted-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setMobileMenuOpen(false)}>
                      <img 
                        src="/nanofi-logo.png" 
                        alt="NanoFi Logo" 
                        className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                        style={{ maxHeight: '40px', maxWidth: '120px' }}
                      />
                    </Link>
                  </div>
                  
                  {/* Navigation */}
                  <nav className="flex flex-col gap-1">
                    {navItems.map((item, index) => {
                      if (item.onComingSoon) {
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setComingSoonOpen(true);
                            }}
                            className={cn(
                              "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors w-full text-left",
                              item.active
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                            {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                          </button>
                        );
                      }
                      return (
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
                      );
                    })}
                  </nav>

                  {/* Actions */}
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

                  {/* User Profile */}
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
          </div>
        </div>
      </div>

      {/* Coming Soon Dialog */}
      <AlertDialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Coming Soon Update</AlertDialogTitle>
            <AlertDialogDescription>
              This feature is currently under development. We're working hard to bring you an amazing experience. Please check back soon!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setComingSoonOpen(false)}>
              Got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
};
