import type { Meta, StoryObj } from "@storybook/react-vite";
import { LkpHeader } from "../components/LkpHeader";
import { LkpNavMenu } from "../components/LkpNavMenu";
import { cfdeLogo, liverLogo } from "@liverkp/core/assets";
import { getMenuItems, getTopMenuItems } from "./storyData";

const meta: Meta<typeof LkpHeader> = {
    title: "Components/LkpHeader",
    component: LkpHeader,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LkpHeader>;

export const WithNavigation: Story = {
    args: {
        config: {
            logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
            secondaryLogo: { src: liverLogo, alt: "Liver Portal" },
            title: {
                primary: "Liver Knowledge Portal",
                secondary: "CFDE",
            },
            topMenuItems: getTopMenuItems(),
        },
        children: (
            <LkpNavMenu
                items={getMenuItems()}
                topMenuItems={getTopMenuItems()}
            />
        ),
    },
};

export const LogoOnly: Story = {
    args: {
        config: {
            logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
        },
    },
};

export const WithTitle: Story = {
    args: {
        config: {
            logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
            title: {
                primary: "Liver Knowledge Portal",
                secondary: "CFDE",
            },
        },
    },
};

export const FullConfiguration: Story = {
    args: {
        config: {
            logo: { src: cfdeLogo, alt: "CFDE Logo", href: "/" },
            secondaryLogo: { src: liverLogo, alt: "Liver Portal" },
            title: {
                primary: "Liver Knowledge Portal",
                secondary: "CFDE",
            },
            topMenuItems: getTopMenuItems(),
        },
        children: (
            <LkpNavMenu
                items={getMenuItems()}
                topMenuItems={getTopMenuItems()}
            />
        ),
    },
};
