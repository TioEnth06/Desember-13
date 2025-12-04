import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StatsCard } from "@/components/lending/StatsCard";
import { DualVerificationSection } from "@/components/governance/DualVerificationSection";
import { ProposalTable } from "@/components/governance/ProposalTable";
import { HowToVote } from "@/components/governance/HowToVote";
import { CreateProposalInfo } from "@/components/governance/CreateProposalInfo";
import { FileText, Vote, Users, ShieldCheck, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: FileText, value: "154", label: "Total Proposals" },
  { icon: Vote, value: "8", label: "Active Loans" },
  { icon: Users, value: "2,358", label: "DAO Members" },
  { icon: ShieldCheck, value: "84%", label: "SPV Verified" },
];

const Governance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar activePage="governance" />
      <main className="p-6">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {/* Hero Section */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dao Governance</h1>
              <p className="mt-1 text-muted-foreground">
                Shape the future of nanotech innovation through decentralized decision-making
              </p>
            </div>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <PlusCircle className="h-4 w-4" />
              Create Proposal
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          {/* Dual Verification System */}
          <DualVerificationSection />

          {/* Proposal Table */}
          <ProposalTable />

          {/* How to Vote & Creating Proposals */}
          <div className="grid gap-6 lg:grid-cols-2">
            <HowToVote />
            <CreateProposalInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Governance;

