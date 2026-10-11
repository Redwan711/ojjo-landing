import { siteConfig } from "../data/content";

export default function Benefits() {
  const { benefits } = siteConfig;

  return (
    <section className="alt" aria-labelledby="h-ben">
      <div className="wrap">
        <h2 id="h-ben">{benefits.heading}</h2>
        <p className="mu">{benefits.microcopy}</p>
        <ul className="ticks">
          {benefits.items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
