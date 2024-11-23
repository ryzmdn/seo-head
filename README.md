# SEO Head

SEO (Search Engine Optimization) is the practice of optimizing the quality of content from various sides so that a website appears in search results when potential visitors search for certain terms in search engines.
In addition, SEO is also a powerful and cost-effective marketing strategy to help you get more traffic to your content and increase transaction numbers.

## Installation

If you want to use this repository, follow these steps:

```bash
# Clone repository
git clone https://github.com/ryzmdn/seo-head.git

# Change directory
cd seo-head
```

## Javascript Usage

You can use [NextJs](https://nextjs.org/) with TypeScript metadata in the `.tsx` format from the example below.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // metadata
};

export default function RootLayout() {}
```

You can also use React components with fragments to use SEO tags just like HTML and call them on the main page.

```jsx
export function SeoComponent() {
  return (
    <>
        {/* Same as SEO HTML. */}
    </>;
  )
}

// Call the components on the main page.
export default function App() {
    return (
        <SeoComponent />
    )
}
```

Or you can create props within a component and call them as usual.

```jsx
import React from "react";

export function SeoComponent({ title, description, category, keywords }) {
  // Combine keywords into a comma-separated string.
  const keywordsString = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="category" content={category} />
      <meta name="keywords" content={keywordsString} />
      {/* other SEO tags */}
    </>
  );
}

// Call the components on the main page.
export default function App() {
  return (
    <SeoComponent
      title="Page title"
      description="Page description"
      category="Website category"
      keywords={["html", "css", "js"]}
    />
  );
}
```

If you use TypeScript:

```tsx
// Define the type for props
interface SeoComponentProps {
  title: string;
  description: string;
  category: string;
  keywords: string | string[]; // Keywords can be either a string or an array of strings
}

export const SeoComponent: React.FC<SeoComponentProps> = ({
  title,
  description,
  category,
  keywords,
}) => {
  const keywordsString = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="category" content={category} />
      <meta name="keywords" content={keywordsString} />
      {/* other tags */}
    </>
  );
};

// Call the components on the main page.
export default function App() {
  return (
    <SeoComponent
      title="Page title"
      description="Page description"
      category="Website category"
      keywords={["html", "css", "js"]}
    />
  );
}
```

You can also create it using the [React Helmet](https://www.npmjs.com/package/react-helmet) package so that it can be used on every page. Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

```jsx
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>My Page Title</title>
    </Helmet>
  );
}
```

## Vue Usage

he [Unhead Vue package](https://unhead.unjs.io/setup/vue/installation) exports a `<Head>` component that can be used to manage your head tags.

While it's recommended to use the `useHead` composable as it offers a more flexible API with full TypeScript support, the `<Head>` component may make more sense for your project.

The component will takes any child elements that you would normally put in your actual `<head>` and renders them with Unhead.

```vue
<script setup>
import { Head } from "@unhead/vue/components"
</script>

<template>
  <Head>
    <title>My awesome site</title>
    <meta name="description" content="My awesome site description">
  </Head>
</template>
```

You can use the `useHead` composable to manage your head.

```vue
<script setup>
import { useHead } from "@unhead/vue"

useHead({
  title: "My awesome site",
  // other
})
</script>
```

## License

No license.
