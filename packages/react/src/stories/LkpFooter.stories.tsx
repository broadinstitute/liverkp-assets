import type { Meta, StoryObj } from "@storybook/react-vite";
import { LkpFooter } from "../components/LkpFooter";
import { nihLogo, drcLogo } from "@liverkp/core/assets";

const meta: Meta<typeof LkpFooter> = {
    title: "Components/LkpFooter",
    component: LkpFooter,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LkpFooter>;

export const Default: Story = {
    args: {
        config: {
            description:
                "The Liver Knowledge Portal provides comprehensive resources for liver research, including anatomical maps, cellular atlases, disease databases, and integrated data analysis tools.",
            columns: [
                {
                    title: "About",
                    links: [
                        { label: "About Us", href: "/about" },
                        { label: "Team", href: "/team" },
                        { label: "Contact", href: "/contact" },
                    ],
                },
                {
                    title: "Resources",
                    links: [
                        { label: "Documentation", href: "/docs" },
                        { label: "API", href: "/api" },
                        { label: "Data", href: "/data" },
                        { label: "Publications", href: "/publications" },
                    ],
                },
                {
                    title: "Legal",
                    links: [
                        { label: "Privacy Policy", href: "/privacy" },
                        { label: "Terms of Use", href: "/terms" },
                        { label: "Data Use Agreement", href: "/dua" },
                    ],
                },
            ],
            institutions: [
                {
                    name: "NIH",
                    logo: nihLogo,
                    href: "https://nih.gov",
                    external: true,
                },
                {
                    name: "DRC",
                    logo: drcLogo,
                    href: "https://example.org",
                    external: true,
                },
            ],
            copyright: "© 2026 NIH Common Fund Data Ecosystem",
        },
    },
};

export const Minimal: Story = {
    args: {
        config: {
            columns: [],
            copyright: "© 2026 Example Organization",
        },
    },
};

export const WithDescription: Story = {
    args: {
        config: {
            columns: [],
            description: "A comprehensive data portal for biomedical research.",
            copyright: "© 2026 Example Organization",
        },
    },
};

export const WithColumns: Story = {
    args: {
        config: {
            columns: [
                {
                    title: "Quick Links",
                    links: [
                        { label: "Home", href: "/" },
                        { label: "About", href: "/about" },
                    ],
                },
                {
                    title: "Legal",
                    links: [
                        { label: "Privacy", href: "/privacy" },
                        { label: "Terms", href: "/terms" },
                    ],
                },
            ],
            copyright: "© 2026 Example Organization",
        },
    },
};
