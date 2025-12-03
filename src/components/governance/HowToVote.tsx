export function HowToVote() {
  const steps = [
    "Browse active proposals and review details",
    "Check SPV verification status and risk assessment",
    "Review supporting documents and community discussion",
    "Cast your vote (for or against) on-chain",
    "Track proposal status and voting results",
  ];

  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
      <h3 className="mb-4 text-lg font-semibold text-foreground">How to Vote</h3>
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
              {index + 1}
            </span>
            <span className="text-sm text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

