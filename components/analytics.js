/**
 * Analytics Component - Google Analytics 4 (GA4) integration
 *
 * SETUP INSTRUCTIONS:
 * 1. Get your GA4 Measurement ID from Google Analytics (format: G-QTBRTN8026)
 * 2. Add this script before </head> in your HTML pages:
 *    <script>window.GA4_MEASUREMENT_ID = 'G-QTBRTN8026';</script>
 *
 * FEATURES:
 * - GDPR compliant: Only loads if user accepts cookies
 * - IP anonymization enabled
 * - Automatically initializes when user accepts cookies
 *
 * Analytics will only load if:
 * - User has accepted cookies (cookieConsent === 'accepted')
 * - GA4_MEASUREMENT_ID is set and valid
 */
function renderAnalytics() {
  // Get GA4 Measurement ID from window object or set it here
  const GA4_MEASUREMENT_ID = window.GA4_MEASUREMENT_ID || "";

  // If no ID is set, return empty (analytics disabled)
  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === "G-QTBRTN8026") {
    return "";
  }

  // Check cookie consent before loading analytics
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (cookieConsent !== "accepted") {
    return "";
  }

  return `
    <!-- Google Analytics 4 (GA4) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_MEASUREMENT_ID}', {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    </script>
  `;
}

/**
 * Initialize analytics - Call this function when user accepts cookies
 * This allows analytics to be loaded dynamically after consent
 */
function initAnalytics() {
  const GA4_MEASUREMENT_ID = window.GA4_MEASUREMENT_ID || "";

  if (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === "G-QTBRTN8026") {
    return;
  }

  // Check if already loaded
  if (window.dataLayer && window.gtag) {
    return;
  }

  // Load GA4 script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });
}
