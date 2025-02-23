module.exports = {
  title: "Need help?",
  tagline: "Learn how to consume, build, and deploy with A11yWatch.",
  url: "https://docs.a11ywatch.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "a11ywatch",
  projectName: "docs",
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: "A11yWatch",
      logo: {
        alt: "A11yWatch Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "documentation/",
          activeBasePath: "documentation",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/a11ywatch/a11ywatch",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "documentation",
            },
            {
              label: "Contact",
              to: "documentation/contact/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/a11ywatch",
            },
            {
              label: "Discord",
              href: "https://discord.gg/tmCzndrmMm",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/a11ywatcher",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://a11ywatch.blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/a11ywatch/a11ywatch",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} A11yWatch, LLC.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "documentation",
          sidebarPath: require.resolve("./src/sidebars.js"),
          editUrl: "https://github.com/a11ywatch/docs/edit/main",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/a11ywatch/docs/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
