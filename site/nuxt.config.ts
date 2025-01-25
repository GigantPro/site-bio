import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	runtimeConfig: {
		strapi: {
		  url: 'http://127.0.0.1:3000'
		},
		public: {
		  strapi: {
			url: 'http://127.0.0.1:3000'
		  }
		}
	  },css: ["~/assets/css/main.css"],
	vite: { plugins: [tailwindcss()] },
});
