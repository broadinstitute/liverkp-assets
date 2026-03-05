import type { Meta, StoryObj } from "@storybook/react-vite";
import { LkpLayout } from "../components/LkpLayout";
import { cfdeLogo, liverLogo } from "@liverkp/core/assets";
import { getMenuItems, getTopMenuItems } from "./storyData";

const meta: Meta<typeof LkpLayout> = {
    title: "Components/LkpLayout",
    component: LkpLayout,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LkpLayout>;

export const Default: Story = {
    args: {
        headerConfig: {
            logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
            secondaryLogo: { src: liverLogo, alt: "Liver Portal" },
            title: {
                primary: "Liver Knowledge Portal",
                secondary: "CFDE",
            },
            topMenuItems: getTopMenuItems(),
        },
        menuItems: getMenuItems(),
        footerConfig: {
            description:
                "The Liver Knowledge Portal provides comprehensive resources for liver research, including anatomical maps, cellular atlases, disease databases, and integrated data analysis tools.",
            columns: [
                {
                    title: "About",
                    links: [
                        { label: "About Us", href: "/about" },
                        { label: "Contact", href: "/contact" },
                    ],
                },
                {
                    title: "Resources",
                    links: [
                        { label: "Documentation", href: "/docs" },
                        { label: "API", href: "/api" },
                        { label: "Data", href: "/data" },
                    ],
                },
                {
                    title: "Legal",
                    links: [
                        { label: "Privacy Policy", href: "/privacy" },
                        { label: "Terms of Use", href: "/terms" },
                    ],
                },
            ],
            copyright: "© 2026 NIH Common Fund Data Ecosystem",
        },
        children: (
            <div
                style={{
                    padding: "40px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <h1>Welcome to the Liver Knowledge Portal</h1>
                <p>
                    This is your main content area. The LkpLayout component
                    provides a complete page structure with header, navigation,
                    and footer.
                </p>
                <div
                    style={{ marginTop: "40px", display: "flex", gap: "20px" }}
                >
                    <div
                        style={{
                            flex: 1,
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                        }}
                    >
                        <h3>Section 1</h3>
                        <p>Content goes here...</p>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                        }}
                    >
                        <h3>Section 2</h3>
                        <p>Content goes here...</p>
                    </div>
                </div>
            </div>
        ),
    },
};

export const MinimalConfig: Story = {
    args: {
        headerConfig: {
            logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
            title: {
                primary: "Minimal Portal",
            },
        },
        menuItems: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
        ],
        footerConfig: {
            columns: [],
            copyright: "© 2026 Example Organization",
        },
        children: (
            <div style={{ padding: "40px" }}>
                <h1>Minimal Layout</h1>
                <p>Only required fields configured.</p>
            </div>
        ),
    },
};
