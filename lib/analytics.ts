export function trackPageView() {
  if (typeof window === "undefined") return;
  // Placeholder: wire to your analytics provider here.
  // Keep it extremely lightweight; no-op by default.
  // Example: window.gtag?.("event", "page_view");
}

export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  // Placeholder custom event hook
  void eventName;
  void data;
}


