"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

export function PostHogProvider({ children }) {
  useEffect(() => {
    const posthogKey =
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN ||
      process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const posthogHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (posthogKey && posthogKey !== "YOUR_POSTHOG_KEY") {
      posthog.init(posthogKey, {
        api_host: posthogHost,
        person_profiles: "identified_only",
        capture_pageview: false,
        capture_pageleave: true,
        defaults: "2026-05-30",
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
