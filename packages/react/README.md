# @liverkp/react

React 18+ components for Liver Knowledge Portal using functional components with hooks.

## 📦 Installation

Using **pnpm**:
```bash
pnpm add @liverkp/react @liverkp/core
```

Using **npm**:
```bash
npm install @liverkp/react @liverkp/core
```

**Peer Dependencies:**
- React 18+ or 19+
- React DOM 18+ or 19+
- @liverkp/core

## 🚀 Quick Start

```tsx
import React from 'react';
import { LkpLayout } from '@liverkp/react';
import { cfdeLogo, liverLogo, nihLogo } from '@liverkp/core/assets';
import type { HeaderConfig, FooterConfig, NavMenuItem } from '@liverkp/react';

const App: React.FC = () => {
  const headerConfig: HeaderConfig = {
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

  const menuItems: NavMenuItem[] = [
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

  const footerConfig: FooterConfig = {
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

  return (
    <LkpLayout
      headerConfig={headerConfig}
      footerConfig={footerConfig}
      menuItems={menuItems}
    >
      <h1>Welcome</h1>
      <p>Your app content goes here...</p>
    </LkpLayout>
  );
};

export default App;
```

## 📚 Components

### LkpLayout

Complete layout shell with header, navigation, footer, and content area.

**Props:**
```typescript
interface LkpLayoutProps {
  headerConfig: HeaderConfig;
  footerConfig: FooterConfig;
  menuItems: NavMenuItem[];
  children: React.ReactNode;
}
```

**Features:**
- Skip-to-content link for accessibility
- `<main>` with `role="main"` and `id="lkp-main-content"`
- Combines Header, NavMenu, and Footer components

### LkpHeader

Header with logo(s), title, and navigation menu area.

**Props:**
```typescript
interface LkpHeaderProps {
  config: HeaderConfig;
  children?: React.ReactNode;
}
```

**Features:**
- `role="banner"` for accessibility
- Supports dual logos (primary + secondary)
- HTML in title.primary via `dangerouslySetInnerHTML` (e.g., `<br>` for line breaks)
- Children prop typically used for `<LkpNavMenu>`

### LkpNavMenu

Navigation menu with hamburger toggle, main menu, and top menu.

**Props:**
```typescript
interface LkpNavMenuProps {
  items: NavMenuItem[];
  topMenuItems?: TopMenuItem[];
}
```

**Features:**
- Hamburger menu for mobile responsiveness
- Nested submenus support
- ARIA attributes (`aria-expanded`, `aria-haspopup`)
- Keyboard navigation (Tab, Enter, Escape, Space)
- External link indicators with screen reader text
- useState hook for menu toggle state

### LkpFooter

Footer with columns, institutions, and copyright.

**Props:**
```typescript
interface LkpFooterProps {
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

To customize, override CSS variables in your global stylesheet:

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
- Keyboard navigation support (Tab, Enter, Escape, Space)
- Focus management
- Skip-to-content link
- Screen reader text for external links
- Minimum 4.5:1 contrast ratios

## 🔧 Integration

### Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});
```

### Create React App

```tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Next.js

```tsx
// app/layout.tsx (Next.js 13+ App Router)
import { LkpLayout } from '@liverkp/react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liver Knowledge Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LkpLayout
          headerConfig={headerConfig}
          footerConfig={footerConfig}
          menuItems={menuItems}
        >
          {children}
        </LkpLayout>
      </body>
    </html>
  );
}
```

## 📖 API Reference

### Component Props Types

```typescript
import type {
  LkpLayoutProps,
  LkpHeaderProps,
  LkpNavMenuProps,
  LkpFooterProps
} from '@liverkp/react';
```

### Config Types (Re-exported from @liverkp/core)

```typescript
import type {
  HeaderConfig,
  FooterConfig,
  NavMenuItem,
  TopMenuItem,
  Logo,
  FooterColumn,
  Institution
} from '@liverkp/react';
```

## 🧪 Example: Custom Layout

```tsx
import React from 'react';
import { LkpHeader, LkpNavMenu, LkpFooter } from '@liverkp/react';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showBanner, setShowBanner] = React.useState(true);

  return (
    <div className="app-wrapper">
      {showBanner && (
        <div className="custom-banner">
          Important announcement
          <button onClick={() => setShowBanner(false)}>Dismiss</button>
        </div>
      )}

      <LkpHeader config={headerConfig}>
        <LkpNavMenu items={menuItems} topMenuItems={topMenuItems} />
      </LkpHeader>

      <main>{children}</main>

      <LkpFooter config={footerConfig} />
    </div>
  );
};
```

## 🧩 TypeScript Support

All components and types are fully typed with TypeScript. Enable strict mode in your `tsconfig.json` for best results:

```json
{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx"
  }
}
```

## 🔗 Related Packages

- [@liverkp/core](../core) - Foundation CSS and types
- [@liverkp/vue](../vue) - Vue 3 components
- [@liverkp/vue2](../vue2) - Vue 2.7 components (deprecated)

## 📄 License

MIT
