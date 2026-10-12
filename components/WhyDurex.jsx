import { siteConfig } from "../data/content";

export default function WhyDurex() {
  const { comparison } = siteConfig;

  return (
    <section className="alt">
      <div className="wrap">
        <h2>{comparison.heading}</h2>
        <p>{comparison.paragraph}</p>
        <h3 style={{ marginTop: "18px" }}>{comparison.subheading}</h3>
        <ul className="ticks" style={{ marginTop: "10px" }}>
          {comparison.ticks.map((tick, index) => (
            <li key={index}>
              <b>{tick.bold}</b> {tick.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
