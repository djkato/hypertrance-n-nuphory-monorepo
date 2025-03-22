// @ts-check
import { defineConfig } from "astro/config"

import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"
import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), svelte()],

    adapter: node({
        mode: "standalone"
    }),
    server: {
        host: true
    },
    vite: {
        resolve: {
            conditions: ["browser"]
        }
    }
})
