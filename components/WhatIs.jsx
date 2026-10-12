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
            sizes="(max-width: 760px) 100vw, 520px"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
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
