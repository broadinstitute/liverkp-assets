# @liverkp/core

Foundation package providing CSS, TypeScript types, and image assets for Liver Knowledge Portal components.

## 📦 Installation

Using **pnpm**:

```bash
pnpm add @liverkp/core
```

Using **npm**:

```bash
npm install @liverkp/core
```

## 📖 Usage

### CSS Import

Import the complete CSS bundle in your app entry point:

```typescript
import "@liverkp/core/css";
```

This includes:

- CSS custom properties (brand colors, shadows, sizes)
- Layout utilities (flexbox classes)
- Component styles (header, footer, navigation)

### TypeScript Types

```typescript
import type {
    HeaderConfig,
    FooterConfig,
    NavMenuItem,
    TopMenuItem,
    Logo,
    Institution,
    FooterColumn,
} from "@liverkp/core";

// Or use the /types entry point
import type { HeaderConfig, FooterConfig } from "@liverkp/core/types";
```

### Asset Imports

Import image URLs and SVG icons:

```typescript
import {
  cfdeLogo,
  cfdeKcLogo,
  liverLogo,
  nihLogo,
  drcLogo,
  titleLogo,
  cfdeUnifiedIcon,
  externalLinkIcon,  // SVG string
  searchIcon,        // SVG string
  loginIcon          // SVG string
} from '@liverkp/core/assets';

// Use in components
<img src={cfdeLogo} alt="CFDE Logo" />
```

### Standard Menu Config

Import shared menu data so all consortium apps stay consistent:

```typescript
import { menuItems, topMenuItems } from "@liverkp/core/menu";

// Or from the main entry
import { menuItems, topMenuItems } from "@liverkp/core";
```

`menuItems` and `topMenuItems` are exported as read-only values.
Update [`src/menu.json`](./src/menu.json) in this package when navigation changes.

## 📦 Exports

This package provides 5 export paths:

```json
{
    ".": "Types + type definitions",
    "./css": "Complete CSS bundle",
    "./assets": "Image URLs and SVG icons",
    "./menu": "Standardized menu configuration",
    "./types": "Type definitions only"
}
```

## 🎨 CSS Variables

Available CSS custom properties:

```css
/* Colors */
--lkp-blue: #2c5d8b;
--lkp-lite-blue: #4681b9;

/* Shadows */
--lkp-nav-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

/* Sizes */
--lkp-hamburger-size: clamp(14px, 10vmin, 26px);
```

All component classes use the `lkp-` prefix to avoid naming collisions.

## 🔧 CSS Utilities

Flexbox layout classes:

```html
<div class="lkp-f-col">Flex column</div>
<div class="lkp-f-row">Flex row</div>
<div class="lkp-f-col lkp-gap-20">Column with 20px gap</div>
<div class="lkp-f-row lkp-align-center">Row centered vertically</div>
```

## 📘 TypeScript Interfaces

### HeaderConfig

```typescript
interface HeaderConfig {
    logo?: Logo;
    secondaryLogo?: Logo;
    title?: {
        primary: string;
        secondary?: string;
    };
    topMenuItems?: TopMenuItem[];
}
```

### FooterConfig

```typescript
interface FooterConfig {
    description?: string;
    columns?: FooterColumn[];
    institutions?: Institution[];
    copyright?: string;
}
```

### NavMenuItem

```typescript
interface NavMenuItem {
    label: string;
    href?: string;
    external?: boolean;
    children?: NavMenuItem[];
}
```

See [src/types.ts](./src/types.ts) for complete type definitions.

## 🖼️ Available Assets

| Export            | File                  | Description       |
| ----------------- | --------------------- | ----------------- |
| `cfdeLogo`        | cfde.png              | CFDE primary logo |
| `cfdeKcLogo`      | cfde_kc_logo.png      | CFDE KC logo      |
| `liverLogo`       | liver.png             | Liver Portal logo |
| `nihLogo`         | NIH_logo.png          | NIH logo          |
| `drcLogo`         | DRC_logo.png          | DRC logo          |
| `titleLogo`       | title.png             | Title logo        |
| `cfdeUnifiedIcon` | cfde_unified_icon.png | Unified icon      |

SVG icons (exported as strings):

- `externalLinkIcon` - External link indicator
- `searchIcon` - Search icon
- `loginIcon` - Login icon

## 🏗️ Build Output

Vite builds this package to:

- **ESM**: `dist/index.js`
- **CJS**: `dist/index.cjs`
- **Types**: `dist/index.d.ts`
- **CSS**: `dist/style.css`
- **Assets**: Inlined or copied based on size

## 🔗 Used By

- [@liverkp/vue](../vue) - Vue 3 components
- [@liverkp/vue2](../vue2) - Vue 2.7 components (deprecated)
- [@liverkp/react](../react) - React components

## 📄 License

BSD 3-Clause License. See [LICENSE](../../LICENSE) for details.
