import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            include: ["src/**/*.ts", "src/**/*.vue"],
            exclude: ["src/**/*.spec.ts", "src/**/*.test.ts"],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            formats: ["es", "cjs"],
            fileName: (format) => {
                const ext = format === "es" ? "js" : "cjs";
                return `index.${ext}`;
            },
        },
        rollupOptions: {
            external: ["vue", "@liverkp/core", /^@liverkp\/core\/.*/],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
        emptyOutDir: true,
    },
});
