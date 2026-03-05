# Liver Knowledge Portal - Shared Assets

A monorepo of shared layout components and styles for Liver Knowledge Portal projects.

## 📦 Packages

This monorepo contains framework-specific packages for React, Vue 3, and Vue 2.7:

- **[@liverkp/core](./packages/core)** - Foundation package with CSS, TypeScript types, and image assets
- **[@liverkp/vue](./packages/vue)** - Vue 3 components (Composition API with `<script setup>`)
- **[@liverkp/vue2](./packages/vue2)** - Vue 2.7 components (Options API + `defineComponent`) **[DEPRECATED]**
- **[@liverkp/react](./packages/react)** - React 18+ functional components with hooks

## 🚀 Quick Start

### Installation

Using **pnpm** (recommended):

```bash
pnpm add @liverkp/vue @liverkp/core
```

Using **npm**:

```bash
npm install @liverkp/vue @liverkp/core
```

### Usage Example (Vue 3)

```vue
<script setup>
import { LkpLayout } from "@liverkp/vue";
import { cfdeLogo, liverLogo } from "@liverkp/core/assets";

const headerConfig = {
    logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
    secondaryLogo: { src: liverLogo, alt: "Liver Portal" },
    title: { primary: "Liver Knowledge Portal", secondary: "CFDE" },
    topMenuItems: [
        { label: "Login", href: "/login" },
        { label: "Search", href: "/search" },
    ],
};

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Resources",
        children: [
            { label: "Documentation", href: "/docs" },
            { label: "API", href: "/api" },
        ],
    },
];

const footerConfig = {
    description: "The Liver Knowledge Portal provides...",
    columns: [
        {
            title: "Quick Links",
            links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
            ],
        },
    ],
    copyright: "© 2026 NIH Common Fund Data Ecosystem",
};
</script>

<template>
    <LkpLayout
        :header-config="headerConfig"
        :footer-config="footerConfig"
        :menu-items="menuItems"
    >
        <h1>Welcome to the Liver Portal</h1>
        <p>Your app content goes here...</p>
    </LkpLayout>
</template>
```

See package-specific README files for React and Vue 2.7 examples.

## 🏗️ Development

### Prerequisites

- Node.js 18+ (or Node 16+ for Vue 2 package only)
- pnpm 8+ (recommended) or npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/broadinstitute/liverkp-assets.git
cd liverkp-assets

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Type check all packages
pnpm typecheck

# Clean all build outputs
pnpm clean
```

### Storybook

The React package includes a [Storybook](https://storybook.js.org/) (v10) for interactive component development and documentation.

```bash
# Start Storybook dev server on http://localhost:6006
pnpm storybook

# Build static Storybook site
pnpm build-storybook
```

Stories are located in `packages/react/src/stories/`.

### Build Order

Packages are built in dependency order:

1. `@liverkp/core` (no dependencies)
2. `@liverkp/vue`, `@liverkp/vue2`, `@liverkp/react` (all depend on core)

### Package Structure

```
liverkp-assets/
├── packages/
│   ├── core/          # CSS, types, and assets
│   ├── vue/           # Vue 3 components
│   ├── vue2/          # Vue 2.7 components (deprecated)
│   └── react/         # React 18+ components
├── demo/       # Original static assets (reference only)
├── package.json       # Root workspace config
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## 📝 Publishing

```bash
# Bump version (from root)
cd packages/core
npm version patch  # or minor, major

# Publish to npm
npm publish --access public

# Repeat for other packages
```

## 🔗 Package Dependencies

All framework packages depend on `@liverkp/core`:

```
@liverkp/core (foundation)
    ├── @liverkp/vue
    ├── @liverkp/vue2
    └── @liverkp/react
```

## ⚠️ Vue 2 Deprecation Notice

`@liverkp/vue2` is deprecated and will be maintained only until projects migrate to Vue 3 (estimated 6 months). New projects should use `@liverkp/vue`.

## 📚 Documentation

- [Core Package](./packages/core/README.md) - CSS variables, types, and asset exports
- [Vue 3 Package](./packages/vue/README.md) - Vue 3 component API
- [Vue 2 Package](./packages/vue2/README.md) - Vue 2.7 component API (deprecated)
- [React Package](./packages/react/README.md) - React component API

## 🤝 Contributing

1. Make changes in the appropriate package
2. Run `pnpm build` to verify builds succeed
3. Run `pnpm typecheck` to verify type correctness
4. Test in a consuming application using `pnpm link`

## 📄 License

BSD 3-Clause License. See [LICENSE](./LICENSE) for details.
