<template>
    <div class="lkp-nav-hamburger">
        <input
            type="checkbox"
            id="lkp-hamburger-toggle"
            class="lkp-hamburger-toggle"
            v-model="menuOpen"
            @keydown.escape="menuOpen = false"
        />
        <label
            for="lkp-hamburger-toggle"
            class="lkp-hamburger"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="menuOpen"
            role="button"
            tabindex="0"
            @keydown.enter.prevent="menuOpen = !menuOpen"
            @keydown.space.prevent="menuOpen = !menuOpen"
        >
            <span class="lkp-slice"></span>
            <span class="lkp-slice"></span>
            <span class="lkp-slice"></span>
        </label>
    </div>

    <div class="lkp-menu-wrapper">
        <nav class="lkp-main-menu" aria-label="Main navigation">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="lkp-menu-item-wrapper"
            >
                <a
                    v-if="item.href"
                    :href="item.href"
                    class="lkp-menu-item"
                    :target="item.external ? '_blank' : undefined"
                    :rel="item.external ? 'noopener noreferrer' : undefined"
                    :aria-haspopup="item.children ? 'true' : undefined"
                    :aria-expanded="item.children ? 'false' : undefined"
                >
                    {{ item.label }}
                    <span v-if="item.external" class="lkp-sr-only"
                        >(opens in new tab)</span
                    >
                </a>
                <div
                    v-else
                    class="lkp-menu-item"
                    :aria-haspopup="item.children ? 'true' : undefined"
                >
                    {{ item.label }}
                </div>

                <div v-if="item.children" class="lkp-submenu" role="menu">
                    <a
                        v-for="(child, childIndex) in item.children"
                        :key="childIndex"
                        :href="child.href || '#'"
                        class="lkp-submenu-item"
                        role="menuitem"
                        :target="child.external ? '_blank' : undefined"
                        :rel="
                            child.external ? 'noopener noreferrer' : undefined
                        "
                    >
                        {{ child.label }}
                        <span v-if="child.external" class="lkp-sr-only"
                            >(opens in new tab)</span
                        >
                    </a>
                </div>
            </div>
        </nav>

        <div v-if="topMenuItems && topMenuItems.length" class="lkp-top-menu">
            <a
                v-for="(item, index) in topMenuItems"
                :key="index"
                :href="item.href || '#'"
                class="lkp-menu-item"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
            >
                {{ item.label }}
                <span v-if="item.external" class="lkp-sr-only"
                    >(opens in new tab)</span
                >
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { NavMenuItem, TopMenuItem } from "@liverkp/core";

defineProps<{
    items: NavMenuItem[];
    topMenuItems?: TopMenuItem[];
}>();

const menuOpen = ref(false);
</script>
