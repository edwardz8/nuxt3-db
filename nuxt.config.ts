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
      },
      /* flex: {
        connector: 'postgresql',
        url: 'postgresql://doadmin:AVNS_gGspBsPeQI1gAa0yxHf@db-postgresql-nyc1-38734-do-user-8895326-0.d.db.ondigitalocean.com:25060/defaultdb?sslmode=require'
      } */
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