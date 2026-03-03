/**
 * Shared TypeScript types for Liver Knowledge Portal components
 * These types define the contracts consumed by Vue and React wrappers
 */

export interface NavMenuItem {
    label: string;
    href?: string;
    children?: NavMenuItem[];
    icon?: string;
    external?: boolean;
}

export interface Logo {
    src: string;
    alt: string;
    href?: string;
}

export interface TopMenuItem {
    label: string;
    href?: string;
    icon?: string;
    external?: boolean;
}

export interface HeaderConfig {
    logo: Logo;
    secondaryLogo?: Logo;
    title?: {
        primary: string;
        secondary?: string;
    };
    topMenuItems?: TopMenuItem[];
}

export interface FooterColumn {
    title: string;
    links: Array<{
        label: string;
        href: string;
        external?: boolean;
    }>;
}

export interface Institution {
    name: string;
    logo?: string;
    href?: string;
    external?: boolean;
}

export interface FooterConfig {
    columns: FooterColumn[];
    description?: string;
    institutions?: Institution[];
    copyright?: string;
}
