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
            <span className="btn-text">{daraz.ctaText}</span>
            <span className="btn-icon" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
