// docusaurus.config.js
// @ts-check

const config = {
  title: 'Tower Travel',
  tagline: '',
  favicon: 'img/logo.svg',

  url: 'https://joaquingorositoa.github.io',
  baseUrl: '/tower-travel-docs/',
  organizationName: 'JoaquinGorositoA',
  projectName: 'tower-travel-docs',
  deploymentBranch: 'gh-pages',
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
          routeBasePath: '/',                 // los docs son la home
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
    // ✅ Auto-colapsar categorías del sidebar
    docs: {
      sidebar: {
        autoCollapseCategories: true,  // solo queda abierta la categoría activa
        hideable: true,                // botón para ocultar/mostrar el sidebar
      },
    },

    navbar: {
      title: 'Manual de uso Tower Travel',
      logo: {
        alt: 'Tower Travel',
        src: 'img/logo.svg',
      },
      items: [
        // ✅ Linkea directamente al doc "intro"
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
