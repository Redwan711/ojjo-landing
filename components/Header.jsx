import { siteConfig } from "../data/content";

export default function Header() {
  return (
    <header className="wrap" style={{ paddingTop: "18px" }}>
      <span className="eyebrow">{siteConfig.header.badge}</span>
    </header>
  );
}
