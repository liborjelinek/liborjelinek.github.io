// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/scripts"],
  css: ["./app/assets/styles/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  scripts: {
    registry: {
      rybbitAnalytics: {
        siteId: "32e36f020360",
      },
    },
  },
});
