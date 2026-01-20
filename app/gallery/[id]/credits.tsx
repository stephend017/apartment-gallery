type CreditsProps = {
  credits?: Array<{
    name: string;
    role: string;
  }>;
};

export function Credits({ credits }: CreditsProps) {
  if (!credits || credits.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 pt-6 border-t border-zinc-700/50 dark:border-zinc-700/50">
      <div className="space-y-2">
        {credits.map((credit, index) => (
          <p
            key={index}
            className="text-sm dark:text-zinc-400 italic"
            style={{ fontFamily: '"Noto Sans"' }}
          >
            {credit.name} — {credit.role}
          </p>
        ))}
      </div>
    </section>
  );
}
