<template>
    <footer class="lkp-footer" role="contentinfo">
        <div class="lkp-footer-container">
            <div v-if="config.description" class="lkp-footer-description">
                {{ config.description }}
            </div>

            <nav
                v-if="config.columns && config.columns.length"
                class="lkp-footer-nav"
                aria-label="Footer navigation"
            >
                <div
                    v-for="(column, index) in config.columns"
                    :key="index"
                    class="lkp-footer-column"
                >
                    <h3>{{ column.title }}</h3>
                    <ul>
                        <li
                            v-for="(link, linkIndex) in column.links"
                            :key="linkIndex"
                        >
                            <a
                                :href="link.href"
                                class="lkp-link"
                                :target="link.external ? '_blank' : undefined"
                                :rel="
                                    link.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                "
                            >
                                {{ link.label }}
                                <span v-if="link.external" class="lkp-sr-only"
                                    >(opens in new tab)</span
                                >
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div
                v-if="config.institutions && config.institutions.length"
                class="lkp-footer-institutions"
            >
                <div
                    v-for="(institution, index) in config.institutions"
                    :key="index"
                    class="lkp-institution"
                >
                    <a
                        v-if="institution.href"
                        :href="institution.href"
                        :target="institution.external ? '_blank' : undefined"
                        :rel="
                            institution.external
                                ? 'noopener noreferrer'
                                : undefined
                        "
                    >
                        <img
                            v-if="institution.logo"
                            :src="institution.logo"
                            :alt="institution.name"
                        />
                        <span v-else>{{ institution.name }}</span>
                        <span v-if="institution.external" class="lkp-sr-only"
                            >(opens in new tab)</span
                        >
                    </a>
                    <span v-else>
                        <img
                            v-if="institution.logo"
                            :src="institution.logo"
                            :alt="institution.name"
                        />
                        <span v-else>{{ institution.name }}</span>
                    </span>
                </div>
            </div>

            <div v-if="config.copyright" class="lkp-footer-copyright">
                {{ config.copyright }}
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import type { FooterConfig } from "@liverkp/core";

defineProps<{
    config: FooterConfig;
}>();
</script>
