import React from "react";
import type { HeaderConfig } from "@liverkp/core";
import "@liverkp/core/css";

export interface LkpHeaderProps {
    config: HeaderConfig;
    children?: React.ReactNode;
}

export const LkpHeader: React.FC<LkpHeaderProps> = ({ config, children }) => {
    return (
        <header className="lkp-header" role="banner">
            <nav
                className="lkp-nav"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="lkp-nav-left">
                    {config.logo && (
                        <img src={config.logo.src} alt={config.logo.alt} />
                    )}
                    {config.secondaryLogo && (
                        <img
                            src={config.secondaryLogo.src}
                            alt={config.secondaryLogo.alt}
                        />
                    )}
                </div>

                {config.title && (
                    <a
                        href={config.logo?.href || "#"}
                        className="lkp-nav-title"
                    >
                        <div className="lkp-title-group">
                            {config.title.secondary && (
                                <div className="lkp-title-cfde">
                                    {config.title.secondary}
                                </div>
                            )}
                            <div
                                className="lkp-title-name"
                                dangerouslySetInnerHTML={{
                                    __html: config.title.primary,
                                }}
                            />
                        </div>
                    </a>
                )}

                <div className="lkp-nav-menu">{children}</div>
            </nav>
        </header>
    );
};
