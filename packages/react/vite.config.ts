import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            outDir: "dist",
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "LiverkpReact",
            formats: ["es", "cjs"],
            fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "react/jsx-runtime",
                "@liverkp/core",
                /^@liverkp\/core\/.*/,
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
});
