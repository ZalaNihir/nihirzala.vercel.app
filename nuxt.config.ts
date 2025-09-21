const config = require('./developer.json')
const siteTitle = `${config.name} | ${config.role}`
const siteDescription = 'Portfolio of Nihir Zala, Full Stack Laravel Developer from India, specializing in PHP, MySQL, JavaScript, and modern web applications.'
const siteUrl = 'https://nihirzala.vercel.app/'
const siteImage = `${siteUrl}demo-share.jpg`

/*
 * Nuxt 3 Config File
 */
export default defineNuxtConfig({
  compatibilityDate: '2025-02-28',
  devtools: { enabled: true },

  /**
   * * App Config
   */
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: siteTitle,
      titleTemplate: (titleChunk?: string) => {
        return titleChunk ? `${titleChunk} | Nihir Zala` : siteTitle
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // SEO Basics
        { hid: 'description', name: 'description', content: siteDescription },
        { name: 'keywords', content: 'Nihir Zala, Laravel Developer, Full Stack Developer, PHP, MySQL, JavaScript, Portfolio' },
        { name: 'author', content: 'Nihir Zala' },

        // Google verification
        { name: 'google-site-verification', content: 'RXlKEbTDQb7rHXzYE1Fh-3vv5-g4in2MFkfYH6jZ9pk' },

        // Open Graph (Facebook, LinkedIn)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:image', content: siteImage },
        { property: 'og:url', content: siteUrl },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: siteImage },

        // Theme
        { name: 'theme-color', content: '#010C15' },
      ],
      link: [
        { rel: 'manifest', href: '/pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: '/pwa/icons/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Nihir Zala',
            jobTitle: 'Full Stack Laravel Developer',
            url: siteUrl,
            image: siteImage,
            sameAs: [
              'https://github.com/ZalaNihir',
              'https://www.linkedin.com/in/nihirzala'
            ]
          }),
        },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   */
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap'
  ],

  /**
   * * Sitemap Config
   */
  sitemap: {
    hostname: siteUrl,
    gzip: true,
  },

  components: {
    dirs: [
      '~/components',
    ],
  },

  /**
   * * Tailwind CSS Config
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    injectPosition: 0,
    viewer: false,
  },

  /**
   * * Runtime Config
   */
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
    }
  }
})
