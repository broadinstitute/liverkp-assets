import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
            include: ["src/**/*.ts"],
            exclude: ["src/**/*.spec.ts", "src/**/*.test.ts"],
        }),
    ],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts"),
                assets: resolve(__dirname, "src/assets.ts"),
                types: resolve(__dirname, "src/types.ts"),
                "css-entry": resolve(__dirname, "src/css-entry.ts"),
            },
            formats: ["es", "cjs"],
            fileName: (format, entryName) => {
                const ext = format === "es" ? "js" : "cjs";
                return `${entryName}.${ext}`;
            },
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    // CSS files go to css/ directory
                    if (assetInfo.name?.endsWith(".css")) {
                        return "css/index.css";
                    }
                    // Images keep their original names in assets/
                    return "assets/[name][extname]";
                },
            },
        },
        // Force all assets to files (not base64) for consistent behavior
        assetsInlineLimit: 0,
        // Empty outDir before build
        emptyOutDir: true,
    },
});
