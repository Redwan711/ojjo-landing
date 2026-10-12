import Image from "next/image";
import { siteConfig } from "../data/content";

export default function WhatIs() {
  const { whatIs } = siteConfig;

  return (
    <section>
      <div className="wrap two">
        <div className="fig">
          <Image
            src={whatIs.image.src}
            width={whatIs.image.width}
            height={whatIs.image.height}
            alt={whatIs.image.alt}
            loading="lazy"
          />
        </div>
        <div>
          <h2>{whatIs.heading}</h2>
          <p>{whatIs.paragraph}</p>
        </div>
      </div>
    </section>
  );
}
