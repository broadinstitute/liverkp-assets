import React from "react";
import type { HeaderConfig, FooterConfig, NavMenuItem } from "@liverkp/core";
import { LkpHeader } from "./LkpHeader";
import { LkpNavMenu } from "./LkpNavMenu";
import { LkpFooter } from "./LkpFooter";

export interface LkpLayoutProps {
    headerConfig: HeaderConfig;
    footerConfig: FooterConfig;
    menuItems: NavMenuItem[];
    children: React.ReactNode;
}

export const LkpLayout: React.FC<LkpLayoutProps> = ({
    headerConfig,
    footerConfig,
    menuItems,
    children,
}) => {
    return (
        <div className="lkp-app">
            {/* Skip to main content link for accessibility */}
            <a href="#lkp-main-content" className="lkp-skip-link lkp-sr-only">
                Skip to main content
            </a>

            <LkpHeader config={headerConfig}>
                <LkpNavMenu
                    items={menuItems}
                    topMenuItems={headerConfig.topMenuItems}
                />
            </LkpHeader>

            <main id="lkp-main-content" className="lkp-body" role="main">
                {children}
            </main>

            <LkpFooter config={footerConfig} />
        </div>
    );
};
