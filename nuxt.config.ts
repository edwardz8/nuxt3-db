// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    experimental: {
      database: true
    },
    database: {
      myDB: {
        connector: 'sqlite',
        options: { name: 'mydbfile' }
      },
      fantasyDB: {
        connector: 'sqlite',
        options: { name: 'flexdbfile' }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})