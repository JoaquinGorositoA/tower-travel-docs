// docusaurus.config.js
// @ts-check

const config = {
  title: 'Manual de usuario - Sistema BackOffice de Tower Travel', // ✅ actualizado
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
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },

    navbar: {
      title: 'Manual de usuario - Sistema BackOffice de Tower Travel', // ✅ ya estaba
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
