import React from "react";
import type { FooterConfig } from "@liverkp/core";

export interface LkpFooterProps {
    config: FooterConfig;
}

export const LkpFooter: React.FC<LkpFooterProps> = ({ config }) => {
    return (
        <footer className="lkp-footer" role="contentinfo">
            <div className="lkp-footer-container">
                {config.description && (
                    <div className="lkp-footer-description">
                        {config.description}
                    </div>
                )}

                {config.columns && config.columns.length > 0 && (
                    <nav
                        className="lkp-footer-nav"
                        aria-label="Footer navigation"
                    >
                        {config.columns.map((column, index) => (
                            <div key={index} className="lkp-footer-column">
                                <h3>{column.title}</h3>
                                <ul>
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href={link.href}
                                                className="lkp-link"
                                                target={
                                                    link.external
                                                        ? "_blank"
                                                        : undefined
                                                }
                                                rel={
                                                    link.external
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                            >
                                                {link.label}
                                                {link.external && (
                                                    <span className="lkp-sr-only">
                                                        (opens in new tab)
                                                    </span>
                                                )}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                )}

                {config.institutions && config.institutions.length > 0 && (
                    <div className="lkp-footer-institutions">
                        {config.institutions.map((institution, index) => (
                            <div key={index} className="lkp-institution">
                                {institution.href ? (
                                    <a
                                        href={institution.href}
                                        target={
                                            institution.external
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            institution.external
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                    >
                                        {institution.logo ? (
                                            <img
                                                src={institution.logo}
                                                alt={institution.name}
                                            />
                                        ) : (
                                            <span>{institution.name}</span>
                                        )}
                                        {institution.external && (
                                            <span className="lkp-sr-only">
                                                (opens in new tab)
                                            </span>
                                        )}
                                    </a>
                                ) : (
                                    <span>
                                        {institution.logo ? (
                                            <img
                                                src={institution.logo}
                                                alt={institution.name}
                                            />
                                        ) : (
                                            <span>{institution.name}</span>
                                        )}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {config.copyright && (
                    <div className="lkp-footer-copyright">
                        {config.copyright}
                    </div>
                )}
            </div>
        </footer>
    );
};
