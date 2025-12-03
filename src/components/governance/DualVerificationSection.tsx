import { FileSearch, Vote } from "lucide-react";

export function DualVerificationSection() {
  return (
    <div className="mb-8 rounded-xl border border-border bg-card p-8 shadow-sm animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">Dual Verification System</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          NanoFi employs a unique dual verification governance model combining expert SPV (Special Purpose Vehicle) review with community DAO voting. This ensures nanotech proposals are both technically sound and community-approved.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* SPV Review Card */}
        <div className="group rounded-xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
          <div className="mb-6 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg transition-transform duration-300 group-hover:scale-110">
              <FileSearch className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold text-foreground">SPV Review</h3>
          <p className="text-center text-sm text-muted-foreground">
            Expert advisors validate technical feasibility, financial viability, and risk assessment before proposals open to community vote.
          </p>
        </div>

        {/* DAO Voting Card */}
        <div className="group rounded-xl border border-border bg-muted/30 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
          <div className="mb-6 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-accent/5 to-accent/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Vote className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold text-foreground">DAO Voting</h3>
          <p className="text-center text-sm text-muted-foreground">
            Token holders vote on-chain with voting power based on stake and participation. Decisions are executed automatically via smart contracts.
          </p>
        </div>
      </div>
    </div>
  );
}

