import {
    menuItems as sharedMenuItems,
    topMenuItems as sharedTopMenuItems,
} from "@liverkp/core/menu";
import type { NavMenuItem, TopMenuItem } from "@liverkp/core";

function cloneNavItem(item: Readonly<NavMenuItem>): NavMenuItem {
    return {
        ...item,
        children: item.children?.map((child) => cloneNavItem(child)),
    };
}

export function getMenuItems(): NavMenuItem[] {
    return sharedMenuItems.map((item) => cloneNavItem(item));
}

export function getTopMenuItems(): TopMenuItem[] {
    return sharedTopMenuItems.map((item) => ({ ...item }));
}
