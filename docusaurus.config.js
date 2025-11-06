// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bipin Pandey',
  tagline: 'Information Architect | AI in Documentation | Strategic Content Manager',
  favicon: 'img/favicon.ico',

  url: 'https://bipin-24.github.io',
  baseUrl: '/',

  organizationName: 'Bipin-24',
  projectName: 'portfolio',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'portfolio',
          editUrl: 'https://github.com/Bipin-24/portfolio-site/edit/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Insights & AI in Information Architecture',
          blogDescription:
            'Exploring the intersection of Information Architecture, AI, and Content Experience.',
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            title: 'Bipin Pandey Blog Feed',
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  // 👇 Add this section
  plugins: [
  [
    '@docusaurus/plugin-content-pages',
    {
      id: 'about-page',     // 👈 unique plugin ID to avoid conflict
      path: 'about',        // folder containing index.md
      routeBasePath: 'about', // route will be /about
    },
  ],
],

  themeConfig: {
    image: 'img/social-preview.png',
    metadata: [
      { name: 'keywords', content: 'Information Architecture, AI, Content Strategy, Portfolio' },
      { name: 'author', content: 'Bipin Pandey' },
    ],
    navbar: {
      title: 'Bipin Pandey',
      logo: {
        alt: 'Bipin Pandey Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/about', label: 'About', position: 'left' },
        { to: '/portfolio/intro', label: 'Portfolio', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Bipin-24',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/bipin-pandey-3594961a/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explore',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Portfolio', to: '/portfolio/intro' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/bipin-pandey-3594961a/',
            },
            { label: 'GitHub', href: 'https://github.com/Bipin-24' },
            {
              label: 'Twitter (X)',
              href: 'https://twitter.com/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Bipin Pandey. Crafted with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
  },
};

export default config;
