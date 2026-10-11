import React from "react";
import { siteConfig } from "../data/content";
import ProductImage from "./ProductImage";

export default function Product() {
  const { product, affiliateUrl } = siteConfig;

  return (
    <section aria-labelledby="h-prod">
      <div className="wrap prod">
        <ProductImage
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
        />
        <div>
          <p className="eyebrow">{product.eyebrow}</p>
          <h2 id="h-prod">{product.name}</h2>
          <p>{product.description}</p>
          <dl>
            {product.specs.map((spec, idx) => (
              <React.Fragment key={idx}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </React.Fragment>
            ))}
          </dl>
          <a
            className="btn cta"
            href={affiliateUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
          >
            {product.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
