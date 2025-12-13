import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import comingSoonIllustration from "@/assets/coming-soon-illustration.png";

const Launchpad = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar activePage="overview" />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Coming Soon Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
          <div 
            className="animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <img
              src={comingSoonIllustration}
              alt="Coming soon illustration"
              className="w-64 h-64 object-contain mx-auto mb-8"
            />
          </div>

          <h2 
            className="font-display text-4xl font-bold text-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Coming Soon
          </h2>

          <p 
            className="text-muted-foreground text-center max-w-xl mb-8 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <div
            className="animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/">
              <Button 
                variant="outline" 
                size="lg"
                className="gap-2 font-medium group"
              >
                Back to Overview
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Launchpad;

