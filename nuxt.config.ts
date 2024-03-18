// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
  head: {
    htmlAttrs: {
      lang: 'pt-BR' // Define o idioma como Português Brasileiro
    },
  },
  css: ['~/assets/css/globals.css'],
})
