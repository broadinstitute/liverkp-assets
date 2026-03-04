/**
 * Standardized menu configuration for all Liver Knowledge Portal projects.
 * Edit menu.json to update menu items across all consuming applications.
 */
import type { NavMenuItem, TopMenuItem } from "./types";
import menuData from "./menu.json";

function deepFreeze<T>(value: T): T {
    if (Array.isArray(value)) {
        value.forEach((item) => deepFreeze(item));
    } else if (value && typeof value === "object") {
        Object.values(value as Record<string, unknown>).forEach((item) =>
            deepFreeze(item),
        );
    }

    return Object.freeze(value);
}

export const menuItems = deepFreeze(menuData.menuItems) as ReadonlyArray<
    Readonly<NavMenuItem>
>;
export const topMenuItems = deepFreeze(menuData.topMenuItems) as ReadonlyArray<
    Readonly<TopMenuItem>
>;
