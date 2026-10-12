import { siteConfig } from "../data/content";

export default function DarazOrder() {
  const { daraz, affiliateUrl } = siteConfig;

  return (
    <section className="alt">
      <div className="wrap" style={{ maxWidth: "780px" }}>
        <h2>{daraz.heading}</h2>
        <p>{daraz.paragraph}</p>
        <ul className="ticks" style={{ marginTop: "12px" }}>
          {daraz.ticks.map((tick, index) => (
            <li key={index}>{tick}</li>
          ))}
        </ul>
        <p style={{ marginTop: "18px" }}>
          <a
            className="btn cta"
            href={affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            {daraz.ctaText}
          </a>
        </p>
      </div>
    </section>
  );
}
