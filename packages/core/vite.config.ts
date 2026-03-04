import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

function fromHere(relativePath: string): string {
    const filePath = new URL(relativePath, import.meta.url).pathname;
    // URL pathname on Windows starts with /C:/..., convert to C:/... for Rollup.
    return filePath.replace(/^\/([A-Za-z]:\/)/, "$1");
}

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
                index: fromHere("./src/index.ts"),
                assets: fromHere("./src/assets.ts"),
                menu: fromHere("./src/menu.ts"),
                types: fromHere("./src/types.ts"),
                "css-entry": fromHere("./src/css-entry.ts"),
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
