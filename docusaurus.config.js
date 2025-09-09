// docusaurus.config.js
// @ts-check

const config = {
  title: 'Tower Travel',   // 👈 cambia "My Site" por tu título
  tagline: '',                // podés dejarlo vacío o poner un subtítulo
  favicon: 'img/logo.svg', // poné el logo de tu empresa

  url: 'http://localhost:3000', // tu dominio (luego lo cambiamos cuando publiques)
  baseUrl: '/',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',              // 👈 hace que los docs sean la home
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,                       // 👈 desactiva el blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Manual de uso Tower Travel',            // 👈 aparece arriba a la izquierda
      logo: {
        alt: 'Tower Travel',
        src: 'img/logo.svg',               // opcional si cargás un logo
      },
      items: [
        { to: '/', label: 'Manual', position: 'left' }, // 👈 link al manual
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Tower Travel`,
    },
  },
};

module.exports = config;
