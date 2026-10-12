import Image from "next/image";
import { siteConfig } from "../data/content";

export default function Hero() {
  const { hero, affiliateUrl } = siteConfig;

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="badge">{hero.badge}</span>
          <h1>{hero.heading}</h1>
          <p>{hero.paragraph}</p>
          <p className="tag">{hero.tag}</p>
          <p className="ptitle">{hero.productTitle}</p>
          <p>
            <span className="badge">{hero.authBadge}</span>
          </p>
          <p className="hero-cta">
            <a
              className="btn cta"
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              <span className="btn-text">{hero.ctaText}</span>
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
          <ul className="pills">
            {hero.pills.map((pill, index) => (
              <li key={index}>{pill}</li>
            ))}
          </ul>
          <p className="mu">{hero.microcopy}</p>
        </div>
        <div className="himg">
          <Image
            src={hero.image.src}
            width={hero.image.width}
            height={hero.image.height}
            alt={hero.image.alt}
            priority
            sizes="(max-width: 768px) 300px, 380px"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
}
