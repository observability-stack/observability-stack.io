// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Observability Stack',
  tagline: 'A Central Hub for standards, best practices, and reference architectures',
  favicon: 'img/transparent_favicon.ico',
  url: 'https://observability-stack.io',
  baseUrl: '/',
  organizationName: 'observability-stack', // Usually your GitHub org/user name.
  projectName: 'observability-stack.io', // Usually your repo name.
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl: 'https://github.com/observability-stack/observability-stack.io/edit/main/docs/',
        },
        blog: false, // Disable blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Observability Stack',
      logo: {
        alt: 'Observability Stack Logo',
        src: 'img/observability-stack-logo.png',
      },
      items: [
        // Comment out or remove the blog link if not needed
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/observability-stack/observability-stack',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
        },        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/',
            },
            // Add or remove links as needed
          ],
        },
        // Add any other footer links or remove the section as needed
      ],
      // Update the copyright text as needed
      copyright: `Copyright © ${new Date().getFullYear()} Observability Stack. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
