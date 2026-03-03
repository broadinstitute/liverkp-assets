/**
 * @liverkp/react - React components for Liver Knowledge Portal
 */

// Export all components
export { LkpHeader } from "./components/LkpHeader";
export { LkpNavMenu } from "./components/LkpNavMenu";
export { LkpFooter } from "./components/LkpFooter";
export { LkpLayout } from "./components/LkpLayout";

// Export component prop types
export type { LkpHeaderProps } from "./components/LkpHeader";
export type { LkpNavMenuProps } from "./components/LkpNavMenu";
export type { LkpFooterProps } from "./components/LkpFooter";
export type { LkpLayoutProps } from "./components/LkpLayout";

// Re-export types from core
export type {
    NavMenuItem,
    HeaderConfig,
    FooterConfig,
    Logo,
    TopMenuItem,
    FooterColumn,
    Institution,
} from "@liverkp/core";
