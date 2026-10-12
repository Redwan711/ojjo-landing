import { siteConfig } from "../data/content";

export default function FinalCta() {
  const { finalCta, affiliateUrl } = siteConfig;

  return (
    <section>
      <div className="wrap">
        <div className="final">
          <h2>{finalCta.heading}</h2>
          <p>{finalCta.paragraph}</p>
          <p style={{ marginTop: "20px" }}>
            <a
              className="btn cta"
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              {finalCta.ctaText}
            </a>
          </p>
          <p style={{ opacity: 0.85, fontSize: "0.92rem" }}>
            {finalCta.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
