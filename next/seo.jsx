// app/layout.jsx
export const metadata = {
  // Basic SEO Meta Tags
  // These tags contain basic information about the website for SEO
  title: "SEO",
  description: "This is an example tag to optimize your website's SEO.",
  category: "technology",
  keywords: ["HTML", "SEO", "website", "optimization"],
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",

  // Authorship and Ownership Meta Tags
  // These tags determine information about the owner and creator of the content
  applicationName: "SEO",
  authors: [{ name: "other name" }, { name: "your name" }],
  generator: "SEO",
  creator: "other name more",
  publisher: "other name",

  // Contact Information Settings
  // Setting how the browser detects contact information
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },

  // Open Graph Meta Tags for Social Media
  // These tags control how content is displayed when shared on social media
  openGraph: {
    title: "SEO",
    description: "This is an example tag to optimize your website's SEO.",
    url: "https://example.com/",
    siteName: "SEO",
    locale: "en_US",
    type: "website",

    // Open Graph Media Tags
    // Organizing pictures, videos, and audio for sharing on social media
    images: [
      {
        url: "https://example.com/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://example.com/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "https://example.com/video.mp4",
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: "https://example.com/audio.mp3",
      },
    ],

    // Article-specific Open Graph Tags
    // Special tags for article/blog pages
    type: "article",
    publishedTime: "2024-11-23T00:00:00.000Z",
    authors: ["other name", "your name"],
  },

  // Search Engine Crawler Instructions
  // Giving instructions to search engines on how to index pages
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Twitter Card Meta Tags
  // Organizing content when shared on Twitter
  twitter: {
    site: "@1234567890",
    creator: "@nextjs",
    creatorId: "1234567890",
    title: "SEO",
    description: "This is an example tag to optimize your website's SEO.",
    card: "app",
    images: [
      {
        url: "https://example.com/og.png",
        alt: "Logo",
      },
    ],
    app: {
      name: {
        iPhone: "twitter_app",
        iPad: "twitter_app",
        googlePlay: "twitter_app",
      },
      id: {
        iPhone: "twitter_app://iphone",
        iPad: "twitter_app://ipad",
        googlePlay: "twitter_app://googleplay",
      },
      url: {
        iPhone: "https://iphone_url",
        iPad: "https://ipad_url",
      },
    },
  },

  // Site Verification Tags
  // Tags for verifying site ownership on various platforms
  verification: {
    google: "google",
    yahoo: "yahoo",
    yandex: "yandex",
    me: ["your-email", "your-link"],
  },

  // Mobile Web App Configuration
  // Setting how the website behaves as a web app on mobile devices
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    capable: true,
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
  },

  // Facebook Integration
  // Special tags for integration with Facebook
  facebook: {
    appId: "1234567890",
    admins: "1234567890",
  },

  // App Deep Linking
  // Setting up deep linking to the mobile app
  alternates: {
    ios: {
      url: "https://example.com/ios",
      appStoreId: "app_store_id",
    },
    android: {
      package: "com.example.android/package",
      appName: "app_name_android",
    },
    web: {
      url: "https://example.com/web",
      shouldFallback: true,
    },
  },

  // Link Tags for Document Relations
  // Determining the relationship between documents and other resources
  other: {
    canonical: "https://example.com",
    author: "https://example.com",
  },

  // Alternate Language and Device Versions
  // Determining alternative versions of the page
  alternates: {
    languages: {
      "en-US": "https://example.com/en-US",
      "de-DE": "https://example.com/de-DE",
    },
    media: {
      "only screen and (max-width: 640px)": "https://example.com/mobile",
    },
    types: {
      "application/rss+xml": "https://example.com/rss",
    },
  },

  // Document Archives and Bookmarks
  // Archive links and bookmarks
  archives: ["https://example.com/1"],
  bookmarks: ["https://example.com/1"],

  // Favicon and Icon Configuration
  // Setting icons for various contexts and devices
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "https://example.com/favicon.ico" },
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "favicon.ico", type: "image/x-icon" }],
  },

  // Apple Startup Images
  // Set up the startup image for Apple devices
  appleStartupImages: [
    {
      url: "/assets/startup/apple-touch-startup-image-768x1004.png",
    },
    {
      url: "/assets/startup/apple-touch-startup-image-1536x2008.png",
      media: "(device-width: 768px) and (device-height: 1024px)",
    },
  ],
};
