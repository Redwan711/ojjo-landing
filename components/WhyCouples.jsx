import { siteConfig } from "../data/content";

export default function WhyCouples() {
  const { whyCouples } = siteConfig;

  return (
    <section className="alt">
      <div className="wrap">
        <h2>{whyCouples.heading}</h2>
        <p>{whyCouples.paragraph}</p>
        <ul className="ticks" style={{ marginTop: "14px" }}>
          {whyCouples.ticks.map((tick, index) => (
            <li key={index}>
              <b>{tick.bold}</b> {tick.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
