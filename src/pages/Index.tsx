import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { PatentActivityFeed } from "@/components/PatentActivityFeed";
import { VotingWindow } from "@/components/VotingWindow";
import { YieldOverview } from "@/components/YieldOverview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar activePage="overview" />
      <main className="p-6">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <HeroSection />
          <FeatureCards />
          <PatentActivityFeed />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <VotingWindow />
            </div>
            <div className="md:col-span-1">
              <YieldOverview />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
