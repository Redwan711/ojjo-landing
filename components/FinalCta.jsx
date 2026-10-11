import { siteConfig } from "../data/content";

export default function FinalCta() {
  const { finalCta, affiliateUrl } = siteConfig;

  return (
    <section aria-labelledby="h-final">
      <div className="wrap">
        <div className="final">
          <h2 id="h-final">{finalCta.heading}</h2>
          <p>{finalCta.description}</p>
          <p>
            <a
              className="btn cta"
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              {finalCta.ctaText}
            </a>
          </p>
          <p className="mu">{finalCta.microcopy}</p>
        </div>
      </div>
    </section>
  );
}
