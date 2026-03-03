import React, { useState } from "react";
import type { NavMenuItem, TopMenuItem } from "@liverkp/core";

export interface LkpNavMenuProps {
    items: NavMenuItem[];
    topMenuItems?: TopMenuItem[];
}

export const LkpNavMenu: React.FC<LkpNavMenuProps> = ({
    items,
    topMenuItems = [],
}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleMenu();
        }
    };

    return (
        <div>
            <div className="lkp-nav-hamburger">
                <input
                    type="checkbox"
                    id="lkp-hamburger-toggle"
                    className="lkp-hamburger-toggle"
                    checked={menuOpen}
                    onChange={(e) => setMenuOpen(e.target.checked)}
                    onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
                />
                <label
                    htmlFor="lkp-hamburger-toggle"
                    className="lkp-hamburger"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                >
                    <span className="lkp-slice"></span>
                    <span className="lkp-slice"></span>
                    <span className="lkp-slice"></span>
                </label>
            </div>

            <div className="lkp-menu-wrapper">
                <nav className="lkp-main-menu" aria-label="Main navigation">
                    {items.map((item, index) => (
                        <div key={index} className="lkp-menu-item-wrapper">
                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="lkp-menu-item"
                                    target={
                                        item.external ? "_blank" : undefined
                                    }
                                    rel={
                                        item.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    aria-haspopup={
                                        item.children ? "true" : undefined
                                    }
                                    aria-expanded={
                                        item.children ? "false" : undefined
                                    }
                                >
                                    {item.label}
                                    {item.external && (
                                        <span className="lkp-sr-only">
                                            (opens in new tab)
                                        </span>
                                    )}
                                </a>
                            ) : (
                                <div
                                    className="lkp-menu-item"
                                    aria-haspopup={
                                        item.children ? "true" : undefined
                                    }
                                >
                                    {item.label}
                                </div>
                            )}

                            {item.children && (
                                <div className="lkp-submenu" role="menu">
                                    {item.children.map((child, childIndex) => (
                                        <a
                                            key={childIndex}
                                            href={child.href || "#"}
                                            className="lkp-submenu-item"
                                            role="menuitem"
                                            target={
                                                child.external
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                child.external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                        >
                                            {child.label}
                                            {child.external && (
                                                <span className="lkp-sr-only">
                                                    (opens in new tab)
                                                </span>
                                            )}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {topMenuItems.length > 0 && (
                    <div className="lkp-top-menu">
                        {topMenuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href || "#"}
                                className="lkp-menu-item"
                                target={item.external ? "_blank" : undefined}
                                rel={
                                    item.external
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                            >
                                {item.label}
                                {item.external && (
                                    <span className="lkp-sr-only">
                                        (opens in new tab)
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
