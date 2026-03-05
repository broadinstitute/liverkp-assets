import type { Meta, StoryObj } from "@storybook/react-vite";
import { LkpNavMenu } from "../components/LkpNavMenu";
import { getMenuItems, getTopMenuItems } from "./storyData";

const meta: Meta<typeof LkpNavMenu> = {
    title: "Components/LkpNavMenu",
    component: LkpNavMenu,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LkpNavMenu>;

export const Default: Story = {
    args: {
        items: getMenuItems(),
        topMenuItems: getTopMenuItems(),
    },
};

export const SimpleMenu: Story = {
    args: {
        items: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
        topMenuItems: [{ label: "Login", href: "/login" }],
    },
};

export const WithSubmenu: Story = {
    args: {
        items: [
            { label: "Home", href: "/" },
            {
                label: "Resources",
                children: [
                    { label: "Documentation", href: "/docs" },
                    { label: "API Reference", href: "/api" },
                    { label: "Tutorials", href: "/tutorials" },
                    { label: "FAQs", href: "/faqs" },
                ],
            },
            {
                label: "Data",
                children: [
                    { label: "Browse", href: "/data/browse" },
                    { label: "Download", href: "/data/download" },
                    { label: "Upload", href: "/data/upload" },
                ],
            },
        ],
        topMenuItems: [
            { label: "Search", href: "/search" },
            { label: "Login", href: "/login" },
        ],
    },
};

export const NoTopMenu: Story = {
    args: {
        items: getMenuItems(),
    },
};
