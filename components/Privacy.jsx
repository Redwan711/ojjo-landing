import { siteConfig } from "../data/content";

export default function Privacy() {
  const { privacy } = siteConfig;

  return (
    <section>
      <div className="wrap">
        <div className="priv">
          <h2>{privacy.heading}</h2>
          <p>{privacy.p1}</p>
          <p>{privacy.p2}</p>
        </div>
      </div>
    </section>
  );
}
