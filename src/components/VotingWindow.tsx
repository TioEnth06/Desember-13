import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const proposals = [
  { id: 1, name: "Carbon Nanofilter", type: "Biotech", prop: "PROP-45", forVotes: 3289, against: 439, apy: "30%", funded: 80 },
  { id: 2, name: "Carbon Nanofilter", type: "Biotech", prop: "PROP-45", forVotes: 3289, against: 439, apy: "30%", funded: 80 },
  { id: 3, name: "Carbon Nanofilter", type: "Biotech", prop: "PROP-45", forVotes: 3289, against: 439, apy: "30%", funded: 80 },
  { id: 4, name: "Carbon Nanofilter", type: "Biotech", prop: "PROP-45", forVotes: 3289, against: 439, apy: "30%", funded: 80 },
  { id: 5, name: "Carbon Nanofilter", type: "Biotech", prop: "PROP-45", forVotes: 3289, against: 439, apy: "30%", funded: 80 },
  { id: 6, name: "Carbon Nanofilter", type: "Biotech", prop: "PROP-45", forVotes: 3289, against: 439, apy: "30%", funded: 80 },
];

const CircularProgress = ({ value }: { value: number }) => {
  const circumference = 2 * Math.PI * 16;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-10 h-10">
      <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-muted"
          strokeWidth="3"
        />
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-accent"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const VotingWindow = () => {
  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs text-muted-foreground">Top Governance Proposal</p>
        <Button variant="ghost" className="text-accent gap-1 text-sm h-auto p-0">
          View All
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <h3 className="font-semibold text-foreground mb-1">Voting Window</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Total Vault Value <span className="font-semibold text-success">$6.2M</span>
      </p>

      <div className="grid grid-cols-2 gap-3">
        {proposals.map((proposal, index) => (
          <div
            key={proposal.id}
            className="vote-card animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Vote ended</span>
              </div>
              <span className="text-xs text-muted-foreground">5d, 12h, 36m</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-accent flex items-center justify-center">
                <span className="text-xs text-primary-foreground font-medium">CN</span>
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">{proposal.type}</p>
                <p className="text-sm font-medium text-foreground">{proposal.name}</p>
              </div>
              <span className="text-xs text-muted-foreground">{proposal.prop}</span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3 text-center">
              <div>
                <p className="text-xs text-muted-foreground">For</p>
                <p className="text-sm font-semibold text-foreground">{proposal.forVotes.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Against</p>
                <p className="text-sm font-semibold text-foreground">{proposal.against}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">APY</p>
                <p className="text-sm font-semibold text-success">{proposal.apy}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CircularProgress value={proposal.funded} />
                <div>
                  <p className="text-xs text-muted-foreground">Funded</p>
                  <p className="text-sm font-semibold text-accent">{proposal.funded}%</p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                className="text-foreground gap-1 text-sm h-8"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              >
                Vote Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
