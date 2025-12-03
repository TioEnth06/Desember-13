import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureCards } from "@/components/FeatureCards";
import { PatentActivityFeed } from "@/components/PatentActivityFeed";
import { VotingWindow } from "@/components/VotingWindow";
import { YieldOverview } from "@/components/YieldOverview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-[1400px] mx-auto space-y-6">
            <HeroSection />
            <FeatureCards />
            <PatentActivityFeed />
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <VotingWindow />
              </div>
              <div className="col-span-1">
                <YieldOverview />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
