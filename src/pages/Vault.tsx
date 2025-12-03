import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { VaultHero } from "@/components/vault/VaultHero";
import { VaultStats } from "@/components/vault/VaultStats";
import { PatentTable } from "@/components/vault/PatentTable";
import { TokenizeSteps } from "@/components/vault/TokenizeSteps";
import { BenefitsSection } from "@/components/vault/BenefitsSection";
import { Footer } from "@/components/Footer";

const Vault = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activePage="vault" />
      <div className="flex-1 flex flex-col">
        <Header title="Vault" />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <VaultHero />
            <VaultStats />
            <PatentTable />
            <TokenizeSteps />
            <BenefitsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Vault;
