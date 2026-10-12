import Image from "next/image";
import { siteConfig } from "../data/content";

export default function Reviews() {
  const { reviews, affiliateUrl } = siteConfig;

  return (
    <section className="reviews-section" id="reviews">
      <div className="wrap" style={{ maxWidth: "700px" }}>
        <div className="reviews-header">
          <span className="badge">{reviews.badge}</span>
          <h2>{reviews.heading}</h2>
          <p className="sub">{reviews.subheading}</p>
        </div>

        {/* 1 Row per review, separated by border */}
        <div className="reviews-list">
          {reviews.items.map((item) => (
            <article key={item.id} className="review-row">
              <div className="review-row-header">
                <div className="review-stars" aria-label={`${item.rating} স্টার`}>
                  {"★".repeat(item.rating)}
                </div>
                <div className="review-date">{item.date}</div>
              </div>

              <div className="review-row-author">
                <span className="author-name">{item.author}</span>
                {item.isVerified && (
                  <span className="verified-badge">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Verified Purchase
                  </span>
                )}
                {item.highlight && (
                  <span className="review-tag">{item.highlight}</span>
                )}
              </div>

              <p className="review-comment">{item.comment}</p>

              {item.photos && item.photos.length > 0 && (
                <div className="review-photos-wrap">
                  <div className="review-photos">
                    {item.photos.map((src, photoIdx) => (
                      <div key={photoIdx} className="review-photo-item">
                        <Image
                          src={src}
                          alt={`${item.author} এর রিভিউ ছবি`}
                          width={80}
                          height={80}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="reviews-cta-box">
          <p className="reviews-cta-text">
            সকল রিভিউ Daraz-এর ভেরিফাইড ক্রেতাদের সরাসরি মতামত।
            বর্তমান দাম, ভ্যারিয়েন্ট ও স্টক দেখতে নিচের বাটনে ক্লিক করুন:
          </p>
          <p style={{ marginTop: "16px" }}>
            <a
              className="btn cta"
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
            >
              <span className="btn-text">{reviews.ctaText}</span>
              <span className="btn-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
