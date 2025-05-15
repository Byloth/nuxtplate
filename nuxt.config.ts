// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/nuxtplate/",
    pageTransition: { name: "page", mode: "out-in" }
  },
  compatibilityDate: "2024-11-01",
  components: [
    { path: "@/components" },
    {
      global: true,
      path: "@/components/globals",
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },
  modules: [
    "@byloth/nuxt-vuert-module",
    "@pinia/nuxt"
  ],
  typescript: { typeCheck: true }
});
