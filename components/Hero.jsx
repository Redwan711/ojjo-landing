import { siteConfig } from "../data/content";
import ProductImage from "./ProductImage";

export default function Hero() {
  const { hero, affiliateUrl } = siteConfig;

  return (
    <section className="hero" aria-labelledby="h1">
      <div className="wrap">
        <div>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="h1">{hero.heading}</h1>
          {hero.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <p>
            <a
              className="btn cta"
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              {hero.ctaText}
            </a>
          </p>
          <p className="mu">{hero.microcopy}</p>
        </div>
        <ProductImage
          src={hero.image.src}
          alt={hero.image.alt}
          width={hero.image.width}
          height={hero.image.height}
          priority={true}
        />
      </div>
    </section>
  );
}
