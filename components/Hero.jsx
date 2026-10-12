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
          <p style={{ marginTop: "20px" }}>
            <a
              className="btn cta"
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              {hero.ctaText}
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
