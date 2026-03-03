<template>
    <header class="lkp-header" role="banner">
        <nav class="lkp-nav" role="navigation" aria-label="Main navigation">
            <div class="lkp-nav-left">
                <img
                    v-if="config.logo"
                    :src="config.logo.src"
                    :alt="config.logo.alt"
                />
                <img
                    v-if="config.secondaryLogo"
                    :src="config.secondaryLogo.src"
                    :alt="config.secondaryLogo.alt"
                />
            </div>

            <a
                v-if="config.title"
                :href="(config.logo && config.logo.href) || '#'"
                class="lkp-nav-title"
            >
                <div class="lkp-title-group">
                    <div v-if="config.title.secondary" class="lkp-title-cfde">
                        {{ config.title.secondary }}
                    </div>
                    <div
                        class="lkp-title-name"
                        v-html="config.title.primary"
                    ></div>
                </div>
            </a>

            <div class="lkp-nav-menu">
                <slot></slot>
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { HeaderConfig } from "@liverkp/core";
import "@liverkp/core/css";

export default defineComponent({
    name: "LkpHeader",
    props: {
        config: {
            type: Object as () => HeaderConfig,
            required: true,
        },
    },
});
</script>
