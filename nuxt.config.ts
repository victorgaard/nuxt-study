// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "radix-vue/nuxt"],
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
});
