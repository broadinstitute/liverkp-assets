# @liverkp/vue

Vue 3 components for Liver Knowledge Portal using Composition API with `<script setup>`.

## 📦 Installation

Using **pnpm**:
```bash
pnpm add @liverkp/vue @liverkp/core
```

Using **npm**:
```bash
npm install @liverkp/vue @liverkp/core
```

**Peer Dependencies:**
- Vue 3.3+
- @liverkp/core

## 🚀 Quick Start

```vue
<script setup>
import { LkpLayout } from '@liverkp/vue';
import { cfdeLogo, liverLogo } from '@liverkp/core/assets';

const headerConfig = {
  logo: { src: cfdeLogo, alt: 'CFDE Logo', href: '/' },
  secondaryLogo: { src: liverLogo, alt: 'Liver Portal' },
  title: {
    primary: 'Liver<br>Knowledge Portal',
    secondary: 'CFDE'
  },
  topMenuItems: [
    { label: 'Login', href: '/login' },
    { label: 'Search', href: '/search' }
  ]
};

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Resources',
    children: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API', href: '/api', external: true }
    ]
  }
];

const footerConfig = {
  description: 'The Liver Knowledge Portal provides access to liver disease data...',
  columns: [
    {
      title: 'About',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Use', href: '/terms' }
      ]
    }
  ],
  institutions: [
    { name: 'NIH', logo: nihLogo, href: 'https://nih.gov', external: true }
  ],
  copyright: '© 2024 NIH Common Fund Data Ecosystem'
};
</script>

<template>
  <LkpLayout
    :header-config="headerConfig"
    :footer-config="footerConfig"
    :menu-items="menuItems"
  >
    <h1>Welcome</h1>
    <p>Your app content goes here...</p>
  </LkpLayout>
</template>
```

## 📚 Components

### LkpLayout

Complete layout shell with header, navigation, footer, and content slot.

**Props:**
```typescript
{
  headerConfig: HeaderConfig;
  footerConfig: FooterConfig;
  menuItems: NavMenuItem[];
}
```

**Slots:**
- Default slot: Main content area

**Features:**
- Skip-to-content link for accessibility
- `<main>` with `role="main"` and `id="lkp-main-content"`

### LkpHeader

Header with logo(s), title, and navigation menu slot.

**Props:**
```typescript
{
  config: HeaderConfig;
}
```

**Slots:**
- Default slot: Typically for `<LkpNavMenu>`

**Features:**
- `role="banner"` for accessibility
- Supports dual logos (primary + secondary)
- HTML in title.primary (e.g., `<br>` for line breaks)

### LkpNavMenu

Navigation menu with hamburger toggle, main menu, and top menu.

**Props:**
```typescript
{
  items: NavMenuItem[];
  topMenuItems?: TopMenuItem[];
}
```

**Features:**
- Hamburger menu for mobile responsiveness
- Nested submenus support
- ARIA attributes (`aria-expanded`, `aria-haspopup`)
- Keyboard navigation (Tab, Enter, Escape)
- External link indicators with screen reader text
- Focus management

### LkpFooter

Footer with columns, institutions, and copyright.

**Props:**
```typescript
{
  config: FooterConfig;
}
```

**Features:**
- `role="contentinfo"` for accessibility
- Flexible column layout
- Institution logos with links
- External link handling

## 🎨 Styling

Components automatically import CSS from `@liverkp/core/css`. All classes use the `lkp-` prefix.

To customize, override CSS variables:

```css
:root {
  --lkp-blue: #1a4d6b;  /* Darker blue */
  --lkp-lite-blue: #3a8dc9;
}
```

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA roles and labels
- Keyboard navigation support
- Focus management
- Skip-to-content link
- Screen reader text for external links
- Minimum 4.5:1 contrast ratios

## 🔧 Integration

### Vite

```javascript
// vite.config.js
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()]
};
```

### Nuxt 3

```vue
<!-- app.vue or layout -->
<script setup>
import { LkpLayout } from '@liverkp/vue';
</script>
```

### Vue CLI / Webpack

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

## 📖 API Reference

### Types (Re-exported from @liverkp/core)

```typescript
import type {
  HeaderConfig,
  FooterConfig,
  NavMenuItem,
  TopMenuItem,
  Logo,
  FooterColumn,
  Institution
} from '@liverkp/vue';
```

## 🧪 Example: Custom Navigation

```vue
<script setup>
import { LkpHeader, LkpNavMenu, LkpFooter } from '@liverkp/vue';
import { ref } from 'vue';

const showBanner = ref(true);
</script>

<template>
  <div>
    <div v-if="showBanner" class="custom-banner">
      Important announcement here
    </div>

    <LkpHeader :config="headerConfig">
      <LkpNavMenu :items="menuItems" :top-menu-items="topMenuItems" />
    </LkpHeader>

    <main>
      <slot />
    </main>

    <LkpFooter :config="footerConfig" />
  </div>
</template>
```

## 🔗 Related Packages

- [@liverkp/core](../core) - Foundation CSS and types
- [@liverkp/react](../react) - React components
- [@liverkp/vue2](../vue2) - Vue 2.7 components (deprecated)

## 📄 License

MIT
