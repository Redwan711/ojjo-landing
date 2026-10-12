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
              <span className="btn-text">{finalCta.ctaText}</span>
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
          <p style={{ opacity: 0.85, fontSize: "0.92rem" }}>
            {finalCta.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
