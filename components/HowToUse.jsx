import { siteConfig } from "../data/content";

export default function HowToUse() {
  const { howToUse } = siteConfig;

  return (
    <section>
      <div className="wrap" style={{ maxWidth: "780px" }}>
        <h2>{howToUse.heading}</h2>
        <p>{howToUse.intro}</p>
        <ol className="st">
          {howToUse.steps.map((step, index) => (
            <li key={index}>
              <b>{step.bold}</b> {step.text}
            </li>
          ))}
        </ol>
        <p className="note" style={{ marginTop: "14px" }}>
          <b>{howToUse.note.bold}</b> {howToUse.note.text}
        </p>
      </div>
    </section>
  );
}
