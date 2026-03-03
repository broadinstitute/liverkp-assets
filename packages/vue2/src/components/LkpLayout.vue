<template>
    <div class="lkp-app">
        <!-- Skip to main content link for accessibility -->
        <a href="#lkp-main-content" class="lkp-skip-link lkp-sr-only"
            >Skip to main content</a
        >

        <LkpHeader :config="headerConfig">
            <LkpNavMenu
                :items="menuItems"
                :top-menu-items="headerConfig.topMenuItems"
            />
        </LkpHeader>

        <main id="lkp-main-content" class="lkp-body" role="main">
            <slot></slot>
        </main>

        <LkpFooter :config="footerConfig" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { HeaderConfig, FooterConfig, NavMenuItem } from "@liverkp/core";
import LkpHeader from "./LkpHeader.vue";
import LkpNavMenu from "./LkpNavMenu.vue";
import LkpFooter from "./LkpFooter.vue";

export default defineComponent({
    name: "LkpLayout",
    components: {
        LkpHeader,
        LkpNavMenu,
        LkpFooter,
    },
    props: {
        headerConfig: {
            type: Object as () => HeaderConfig,
            required: true,
        },
        footerConfig: {
            type: Object as () => FooterConfig,
            required: true,
        },
        menuItems: {
            type: Array as () => NavMenuItem[],
            required: true,
        },
    },
});
</script>
