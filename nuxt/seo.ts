// composables/useSeo.ts
export const useSeo = () => {
  useHead({
    // title
    title: "SEO",

    // Basic SEO Meta Tags
    meta: [
      // Basic SEO Meta Tags
      // These tags contain basic information about the website for SEO
      { charset: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },

      // Basic SEO Meta Tags
      // These tags contain basic information about the website for SEO
      {
        name: "description",
        content: "This is an example tag to optimize your website's SEO.",
      },
      { name: "category", content: "technology" },
      { name: "keywords", content: "HTML,SEO,website,optimization" },
      { name: "referrer", content: "origin-when-cross-origin" },
      { name: "color-scheme", content: "dark" },

      // Authorship and Ownership Meta Tags
      // These tags determine information about the owner and creator of the content
      { name: "application-name", content: "SEO" },
      { name: "author", content: "other name" },
      { name: "author", content: "your name" },
      { name: "generator", content: "SEO" },
      { name: "creator", content: "other name more" },
      { name: "publisher", content: "other name" },

      // Contact Information Settings
      // Setting how the browser detects contact information
      {
        name: "format-detection",
        content: "telephone=no, address=no, email=no",
      },

      // Open Graph Meta Tags for Social Media
      // These tags control how content is displayed when shared on social media
      { property: "og:title", content: "SEO" },
      {
        property: "og:description",
        content: "This is an example tag to optimize your website's SEO.",
      },
      { property: "og:url", content: "https://example.com/" },
      { property: "og:site_name", content: "SEO" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },

      // Open Graph Media Tags
      // Organizing pictures, videos, and audio for sharing on social media
      { property: "og:image", content: "https://example.com/og.png" },
      { property: "og:image:width", content: "800" },
      { property: "og:image:height", content: "600" },
      { property: "og:image", content: "https://example.com/og-alt.png" },
      { property: "og:image:width", content: "1800" },
      { property: "og:image:height", content: "1600" },
      { property: "og:image:alt", content: "My custom alt" },
      { property: "og:video", content: "https://example.com/video.mp4" },
      { property: "og:video:width", content: "800" },
      { property: "og:video:height", content: "600" },
      { property: "og:audio", content: "https://example.com/audio.mp3" },

      // Search Engine Crawler Instructions
      // Giving instructions to search engines on how to index pages
      { name: "robots", content: "noindex, follow, nocache" },
      {
        name: "googlebot",
        content:
          "index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
      },

      // Article-specific Open Graph Tags
      { property: "og:type", content: "article" },
      {
        property: "article:published_time",
        content: "2024-11-23T00:00:00.000Z",
      },
      { property: "article:author", content: "other name" },
      { property: "article:author", content: "your name" },

      // Twitter Card Meta Tags
      // Organizing content when shared on Twitter
      { name: "twitter:site:id", content: "1234567890" },
      { name: "twitter:creator", content: "@nextjs" },
      { name: "twitter:creator:id", content: "1234567890" },
      { name: "twitter:title", content: "SEO" },
      {
        name: "twitter:description",
        content: "This is an example tag to optimize your website's SEO.",
      },
      { name: "twitter:card", content: "app" },
      { name: "twitter:image", content: "https://example.com/og.png" },
      { name: "twitter:image:alt", content: "Logo" },

      // Mobile App Integration Tags
      { name: "twitter:app:name:iphone", content: "twitter_app" },
      { name: "twitter:app:id:iphone", content: "twitter_app://iphone" },
      { name: "twitter:app:id:ipad", content: "twitter_app://ipad" },
      {
        name: "twitter:app:id:googleplay",
        content: "twitter_app://googleplay",
      },
      { name: "twitter:app:url:iphone", content: "https://iphone_url" },
      { name: "twitter:app:url:ipad", content: "https://ipad_url" },
      { name: "twitter:app:name:ipad", content: "twitter_app" },
      { name: "twitter:app:name:googleplay", content: "twitter_app" },

      // Site Verification Tags
      // Tags for verifying site ownership on various platforms
      { name: "google-site-verification", content: "google" },
      { name: "y_key", content: "yahoo" },
      { name: "yandex-verification", content: "yandex" },
      { name: "me", content: "your-email" },
      { name: "me", content: "your-link" },

      // Mobile Web App Configuration
      // Setting how the website behaves as a web app on mobile devices
      {
        name: "apple-itunes-app",
        content: "app-id=myAppStoreID, app-argument=myAppArgument",
      },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-title", content: "Apple Web App" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },

      // Facebook Integration
      // Special tags for integration with Facebook
      { property: "fb:app_id", content: "1234567890" },
      { property: "fb:admins", content: "1234567890" },

      // App Deep Linking
      // Setting up deep linking to the mobile app
      { property: "al:ios:url", content: "https://example.com/ios" },
      { property: "al:ios:app_store_id", content: "app_store_id" },
      {
        property: "al:android:package",
        content: "com.example.android/package",
      },
      { property: "al:android:app_name", content: "app_name_android" },
      { property: "al:web:url", content: "https://example.com/web" },
      { property: "al:web:should_fallback", content: "true" },
    ],

    // Link Tags
    link: [
      // Link Tags for Document Relations
      // Determining the relationship between documents and other resources
      { rel: "author", href: "https://example.com" },
      { rel: "canonical", href: "https://example.com" },

      // Alternate Language and Device Versions
      // Determining alternative versions of the page
      {
        rel: "alternate",
        hrefLang: "en-US",
        href: "https://example.com/en-US",
      },
      {
        rel: "alternate",
        hrefLang: "de-DE",
        href: "https://example.com/de-DE",
      },
      {
        rel: "alternate",
        media: "only screen and (max-width: 640px)",
        href: "https://example.com/mobile",
      },
      {
        rel: "alternate",
        type: "application/rss+xml",
        href: "https://example.com/rss",
      },

      // Document Archives and Bookmarks
      // Archive links and bookmarks
      { rel: "archives", href: "https://example.com/1" },
      { rel: "bookmarks", href: "https://example.com/1" },

      // Favicon and Icon Configuration
      // Setting icons for various contexts and devices
      { rel: "shortcut icon", href: "favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "icon", href: "https://example.com/favicon.ico" },
      {
        rel: "icon",
        href: "/icon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
      {
        rel: "apple-touch-icon-precomposed",
        href: "/apple-touch-icon-precomposed.png",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-icon-x3.png",
        sizes: "180x180",
        type: "image/png",
      },

      // Apple Startup Images
      // Set up the startup image for Apple devices
      {
        rel: "apple-touch-startup-image",
        href: "/assets/startup/apple-touch-startup-image-768x1004.png",
      },
      {
        rel: "apple-touch-startup-image",
        href: "/assets/startup/apple-touch-startup-image-1536x2008.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  });
};
