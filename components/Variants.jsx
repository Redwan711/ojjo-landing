import Image from "next/image";
import { siteConfig } from "../data/content";

export default function Variants() {
  const { variants } = siteConfig;

  return (
    <section>
      <div className="wrap">
        <h2>{variants.heading}</h2>
        <p className="mu">{variants.microcopy}</p>

        {variants.image && (
          <div className="v-banner">
            <Image
              src={variants.image.src}
              width={variants.image.width}
              height={variants.image.height}
              alt={variants.image.alt}
              loading="lazy"
              sizes="(max-width: 1040px) 100vw, 1040px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        )}

        <div className="grid">
          {variants.items.map((item) => (
            <div key={item.id} className={`v ${item.id}`}>
              <b>{item.name}</b>
              <div>
                {item.desc}
                <span>বেস: {item.base}</span>
                <span>কনডম সামঞ্জস্য: {item.condom}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mu" style={{ marginTop: "12px" }}>
          {variants.note}
        </p>
      </div>
    </section>
  );
}
