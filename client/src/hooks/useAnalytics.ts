import { useEffect } from "react";

export function useAnalytics() {
  useEffect(() => {
    // Track page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: window.location.pathname,
        page_title: document.title,
      });
    }
  }, []);

  const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventData);
    }
  };

  const trackConversion = (value: number, currency: string = "EUR") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "purchase", {
        value: value,
        currency: currency,
      });
    }
  };

  return { trackEvent, trackConversion };
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    hj?: (...args: any[]) => void;
    _hjSettings?: { hjid: number; hjsv: number };
  }
}
