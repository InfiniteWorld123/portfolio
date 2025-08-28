// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/i18n',
    'pinia-plugin-persistedstate',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@primevue/nuxt-module'
  ],
  ssr: false,
  colorMode: {
    preference: 'system', // User's system preference
    fallback: 'dark', // when the preference is not available
    classSuffix: '', // So you get `.dark` instead of `.dark-mode`
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode' // Key for storing the color mode
  },
  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ar', name: 'العربية', file: 'ar.json', dir: 'rtl' },
      { code: 'de', name: 'Deutsch', file: 'de.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      fallbackLocale: 'en',
      redirectOn: 'root'
    }
  },
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura
      }
    }
  },
  // icon: {
  //   mode: 'css',
  //   cssLayer: 'base'
  // }
})