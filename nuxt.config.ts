// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    },
  },
})