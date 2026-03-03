/**
 * Asset exports for @liverkp/core
 * Images are exported as URLs that bundlers can resolve
 */

// Logo images - exported from assets folder
export { default as cfdeLogo } from "../assets/images/cfde.png";
export { default as cfdeKcLogo } from "../assets/images/cfde_kc_logo_c.png";
export { default as cfdeUnifiedIcon } from "../assets/images/cfde_unified_icon.png";
export { default as drcLogo } from "../assets/images/DRC_logo.png";
export { default as liverLogo } from "../assets/images/liver.png";
export { default as nihLogo } from "../assets/images/NIH_logo.png";
export { default as titleLogo } from "../assets/images/title.png";

// SVG icons - inlined as string constants for maximum compatibility
export const externalLinkIcon = `<svg fill="currentColor" width="1em" height="1em" viewBox="-5.5 0 32 32" xmlns="http://www.w3.org/2000/svg">
<path d="M15.656 8.5l-10.438 10.5 2.188 2.219 10.469-10.469 1.938 1.906c0.531 0.531 1 0.375 1-0.438v-5.656c0-0.5-0.438-0.969-0.969-0.969h-5.656c-0.813 0-1 0.469-0.469 1zM16.813 23.031v-7.094h2.375v7.906c0 1.406-1.156 2.563-2.563 2.563h-14.063c-1.406 0-2.563-1.156-2.563-2.563v-14.094c0-1.406 1.156-2.563 2.563-2.531h8.656v2.375h-7.844c-0.5 0-0.969 0.469-0.969 0.969v12.469c0 0.5 0.469 0.969 0.969 0.969h12.469c0.5 0 0.969-0.469 0.969-0.969z"></path>
</svg>`;

export const searchIcon = `<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
</svg>`;

export const loginIcon = `<svg fill="currentColor" width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
</svg>`;
