import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import {svelte, vitePreprocess} from "@sveltejs/vite-plugin-svelte";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    preprocess: [vitePreprocess()],
    plugins: [
        svelte({}),
        laravel({
            input: ['resources/css/app.css'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    }
});
