import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
};

export function AfSectionHead({ id, eyebrow, title, lead, action }: Props) {
  return (
    <div className="af-sectionhead">
      <div className="af-sectionhead__t">
        {eyebrow && <div className="af-eyebrow">{eyebrow}</div>}
        <h2 id={id} className="af-h2">{title}</h2>
        {lead && <p className="af-lead" style={{ marginTop: 14 }}>{lead}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
