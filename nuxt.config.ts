import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/css/main.css"],
    build: {
      postcss: {
        postcssOptions: require("./postcss.config.js"),
      },
    },
    // plugins: [{ src: "@/plugins/chartjs.js", ssr: false }],
    publicRuntimeConfig: {
      supabaseURL: process.env.SUPABASE_URL,
      supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY
    },
    
})