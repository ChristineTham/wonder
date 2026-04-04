import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [
        alpine({
            entrypoint: '/src/scripts/alpine.js'
        }),
        icon()
    ]
});
