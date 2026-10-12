"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "../data/content";

export default function StickyBar() {
  const { sticky, affiliateUrl } = siteConfig;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("top");
    const finalEl = document.querySelector(".final");

    if (!heroEl || !finalEl || !("IntersectionObserver" in window)) {
      return;
    }

    let heroOut = false;
    let finalIn = false;

    const updateVisibility = () => {
      setIsVisible(heroOut && !finalIn);
    };

    const heroObserver = new IntersectionObserver(([entry]) => {
      heroOut = !entry.isIntersecting;
      updateVisibility();
    });

    const finalObserver = new IntersectionObserver(([entry]) => {
      finalIn = entry.isIntersecting;
      updateVisibility();
    });

    heroObserver.observe(heroEl);
    finalObserver.observe(finalEl);

    return () => {
      heroObserver.disconnect();
      finalObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={`sticky ${isVisible ? "show" : ""}`}
      id="sticky"
      aria-hidden={!isVisible}
    >
      <span>{sticky.label}</span>
      <a
        className="btn cta"
        href={affiliateUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        tabIndex={isVisible ? 0 : -1}
      >
        <span className="btn-text">{sticky.ctaText}</span>
        <span className="btn-icon" aria-hidden="true">
          <svg
            width="16"
            height="16"
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
    </div>
  );
}
