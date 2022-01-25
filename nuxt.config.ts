import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
 srcDir: 'src/',
 build: {
  // analyze: {
  //  analyzerMode: 'static'
  // }
 },
 generate: {
   dir: 'public'
 },
 nitro: {
  preset: "vercel",
 },
})
