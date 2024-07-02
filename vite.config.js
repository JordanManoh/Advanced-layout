import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import injectHTML from 'vite-plugin-html-inject';
import { ViteMinifyPlugin } from 'vite-plugin-minify';

export default defineConfig({
    root: './src',
    server: {
        port: 3000,
    },
    build: {
        outDir: '../build',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: './src/index.html',
            },
        },
    },
    base: '/Advanced-layout/',
    plugins: [
        ViteMinifyPlugin(),
        injectHTML(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 80,
            },
            jpg: {
                quality: 80,
            },
        }),
    ],
});
