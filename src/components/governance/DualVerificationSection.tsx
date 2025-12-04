
export function DualVerificationSection() {
  return (
    <div className="mb-8 rounded-xl bg-transparent p-8 animate-fade-in">
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">Dual Verification System</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
          NanoFi employs a unique dual verification governance model combining expert SPV (Special Purpose Vehicle) review with community DAO voting. This ensures nanotech proposals are both technically sound and community-approved.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mx-8 justify-center items-center">
        {/* SPV Review Card */}
        <div className="group rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md w-full md:w-[400px]">
          <div className="mb-6 flex h-auto min-h-[200px] items-center justify-center rounded-lg overflow-hidden relative p-4" style={{ backgroundColor: '#F4F4F4' }}>
            <img 
              src="/daocheck.png" 
              alt="SPV Review" 
              className="h-full max-h-[300px] w-auto object-contain rounded-lg"
            />
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold text-foreground">SPV Review</h3>
          <p className="text-center text-sm text-muted-foreground">
            Expert advisors validate technical feasibility, financial viability, and risk assessment before proposals open to community vote.
          </p>
        </div>

        {/* DAO Voting Card */}
        <div className="group rounded-xl border border-border bg-white p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md w-full md:w-[400px]">
          <div className="mb-6 flex h-auto min-h-[200px] items-center justify-center rounded-lg overflow-hidden relative p-4" style={{ backgroundColor: '#F4F4F4' }}>
            <img 
              src="/votingsss.png" 
              alt="DAO Voting" 
              className="h-full max-h-[300px] w-auto object-contain rounded-lg"
            />
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

