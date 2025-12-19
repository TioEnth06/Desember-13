import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Vault from "./pages/Vault";
import Lending from "./pages/Lending";
import Governance from "./pages/Governance";
import Marketplace from "./pages/Marketplace";
import Staking from "./pages/Staking";
import TokenizePatent from "./pages/TokenizePatent";
import RequestLoan from "./pages/RequestLoan";
import Launchpad from "./pages/Launchpad";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/vault/tokenize" element={<TokenizePatent />} />
            <Route path="/lending" element={<Lending />} />
            <Route path="/lending/request-loan" element={<RequestLoan />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
