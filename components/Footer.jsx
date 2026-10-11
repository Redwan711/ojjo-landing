import { siteConfig } from "../data/content";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer>
      <div className="wrap">
        <p>
          <strong>Affiliate disclosure:</strong> {footer.affiliateDisclosure.replace("Affiliate disclosure: ", "")}
        </p>
        <p>{footer.disclaimer}</p>
        <p>
          {footer.links.map((link, idx) => (
            <a key={idx} href={link.url}>
              {link.label}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
