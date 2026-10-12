import { siteConfig } from "../data/content";

export default function Footer() {
  const { footer } = siteConfig;

  return (
    <footer>
      <div className="wrap">
        <p>
          <strong>অ্যাফিলিয়েট ডিসক্লোজার:</strong> {footer.affiliateDisclosure.replace(/^অ্যাফিলিয়েট ডিসক্লোজার:\s*/, "")}
        </p>
        <p>{footer.medicalDisclaimer}</p>
        <p>
          {footer.links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.text}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
