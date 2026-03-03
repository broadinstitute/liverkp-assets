/**
 * @liverkp/vue - Vue 3 components for Liver Knowledge Portal
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
