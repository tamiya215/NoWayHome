import type { ReactNode } from "react";

export function SectionHeading({ number, label, id, children }: { number: string; label: string; id: string; children: ReactNode }) {
  return (
    <div className="section-heading" lang="en">
      <p className="eyebrow"><span className="section-number">{number}</span>{label}</p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}
