// docusaurus.config.js

const config = {
  title: 'Manual de usuario - Sistema BackOffice de Tower Travel',
  tagline: '',
  favicon: 'img/logo.svg',

  // SE DEFINE POR VARIABLE DE ENTORNO
  url: process.env.SITE_URL || 'http://localhost:3000',

 
  baseUrl: '/',

  trailingSlash: false,

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // los docs son la home
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },

    navbar: {
      title: 'Manual de usuario - Sistema BackOffice de Tower Travel',
      logo: {
        alt: 'Tower Travel',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'doc', docId: 'intro', label: 'Manual', position: 'left' },
      ],
    },

    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Tower Travel`,
    },
  },
};

module.exports = config;
