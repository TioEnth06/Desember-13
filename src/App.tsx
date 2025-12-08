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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
            <Route path="/governance" element={<Governance />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/staking" element={<Staking />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
