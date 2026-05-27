type Props = {
  pros: string[];
  cons: string[];
  prosTitle: string;
  consTitle: string;
};

export function AfProsCons({ pros, cons, prosTitle, consTitle }: Props) {
  return (
    <div className="af-prosCons">
      <div className="af-prosCons__col pros">
        <h4>{prosTitle}</h4>
        <ul>
          {pros.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="af-prosCons__col cons">
        <h4>{consTitle}</h4>
        <ul>
          {cons.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
