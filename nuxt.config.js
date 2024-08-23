// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:[
    'bootstrap/dist/css/bootstrap.rtl.css',
    '~/assets/main.css',
    '~/assets/shop.css',
    '~/assets/widgets.css',
  ],
  runtimeConfig :{
    public : {
        serverUrl : "http://127.0.0.1:8000",
        api : "http://127.0.0.1:8000/api",
    }
  },
  modules: ['nuxt-swiper'],
  ssr:false
})
