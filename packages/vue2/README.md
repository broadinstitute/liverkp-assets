# @liverkp/vue2 [DEPRECATED]

Vue 2.7 components for Liver Knowledge Portal using Options API with `defineComponent`.

> ⚠️ **DEPRECATION NOTICE**: This package is deprecated and will be maintained only until projects migrate to Vue 3 (estimated 6 months). New projects should use [@liverkp/vue](../vue) instead.

## 📦 Installation

Using **pnpm**:
```bash
pnpm add @liverkp/vue2 @liverkp/core
```

Using **npm**:
```bash
npm install @liverkp/vue2 @liverkp/core
```

**Peer Dependencies:**
- Vue 2.7+
- @liverkp/core

## 🚀 Quick Start

```vue
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

<script>
import { LkpLayout } from '@liverkp/vue2';
import { cfdeLogo, liverLogo, nihLogo } from '@liverkp/core/assets';

export default {
  components: { LkpLayout },
  data() {
    return {
      headerConfig: {
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
      },
      menuItems: [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        {
          label: 'Resources',
          children: [
            { label: 'Documentation', href: '/docs' },
            { label: 'API', href: '/api', external: true }
          ]
        }
      ],
      footerConfig: {
        description: 'The Liver Knowledge Portal provides access to liver disease data...',
        columns: [
          {
            title: 'About',
            links: [
              { label: 'About Us', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ]
          }
        ],
        institutions: [
          { name: 'NIH', logo: nihLogo, href: 'https://nih.gov', external: true }
        ],
        copyright: '© 2024 NIH Common Fund Data Ecosystem'
      }
    };
  }
};
</script>
```

## 📚 Components

API is identical to [@liverkp/vue](../vue) but uses Vue 2.7 Options API instead of `<script setup>`.

### LkpLayout

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

### LkpHeader

**Props:**
```typescript
{
  config: HeaderConfig;
}
```

**Slots:**
- Default slot: Typically for `<LkpNavMenu>`

### LkpNavMenu

**Props:**
```typescript
{
  items: NavMenuItem[];
  topMenuItems?: TopMenuItem[];
}
```

### LkpFooter

**Props:**
```typescript
{
  config: FooterConfig;
}
```

## 🔄 Migration to Vue 3

Replace `@liverkp/vue2` with `@liverkp/vue` in your package.json:

```diff
- "dependencies": {
-   "@liverkp/vue2": "^0.1.0"
- }
+ "dependencies": {
+   "@liverkp/vue": "^0.1.0"
+ }
```

Update imports:

```diff
- import { LkpLayout } from '@liverkp/vue2';
+ import { LkpLayout } from '@liverkp/vue';
```

If using Options API in your app, you can continue using it with Vue 3. Otherwise, migrate to `<script setup>`:

```diff
- <script>
- export default {
-   components: { LkpLayout },
-   data() { return { config: {...} }; }
- };
- </script>
+ <script setup>
+ import { LkpLayout } from '@liverkp/vue';
+ const config = {...};
+ </script>
```

## 🎨 Styling

Same as [@liverkp/vue](../vue#-styling).

## ♿ Accessibility

Same WCAG 2.1 AA standards as [@liverkp/vue](../vue#-accessibility).

## 🔧 Integration

### Vue CLI (Vue 2.7)

```javascript
// main.js
import Vue from 'vue';
import App from './App.vue';

new Vue({ render: h => h(App) }).$mount('#app');
```

### Nuxt 2

```vue
<!-- layouts/default.vue -->
<template>
  <LkpLayout :header-config="headerConfig" ...>
    <Nuxt />
  </LkpLayout>
</template>

<script>
import { LkpLayout } from '@liverkp/vue2';
export default { components: { LkpLayout }, ... };
</script>
```

## ⚠️ Limitations

Vue 2.7 backports some Vue 3 features but does NOT support:
- `<script setup>` syntax (use Options API)
- `<Teleport>` component
- `<Suspense>` component
- `defineAsyncComponent` with `<script setup>`
- CSS `v-bind()` directive
- `v-memo` directive

This package is built with these constraints in mind.

## 📖 API Reference

Types are identical to [@liverkp/vue](../vue#api-reference).

## 🔗 Related Packages

- [@liverkp/vue](../vue) - Vue 3 components (migrate to this)
- [@liverkp/core](../core) - Foundation CSS and types
- [@liverkp/react](../react) - React components

## 📄 License

MIT
