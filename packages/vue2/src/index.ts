/**
 * @liverkp/vue2 - Vue 2.7 components for Liver Knowledge Portal
 * DEPRECATED: Migrate to @liverkp/vue (Vue 3) when possible
 */

// Export all components
export { default as LkpHeader } from "./components/LkpHeader.vue";
export { default as LkpNavMenu } from "./components/LkpNavMenu.vue";
export { default as LkpFooter } from "./components/LkpFooter.vue";
export { default as LkpLayout } from "./components/LkpLayout.vue";

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
