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
        {sticky.ctaText}
      </a>
    </div>
  );
}
