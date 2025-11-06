import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'cc7'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/legal',
    component: ComponentCreator('/legal', 'd80'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/portfolio',
    component: ComponentCreator('/portfolio', '7c0'),
    routes: [
      {
        path: '/portfolio',
        component: ComponentCreator('/portfolio', '17b'),
        routes: [
          {
            path: '/portfolio',
            component: ComponentCreator('/portfolio', '54c'),
            routes: [
              {
                path: '/portfolio/about',
                component: ComponentCreator('/portfolio/about', 'f06'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/achievements',
                component: ComponentCreator('/portfolio/achievements', '359'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/ai-content-solutions',
                component: ComponentCreator('/portfolio/ai-content-solutions', '473'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/analytics-and-metrics',
                component: ComponentCreator('/portfolio/analytics-and-metrics', 'f46'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/career-timeline',
                component: ComponentCreator('/portfolio/career-timeline', 'b02'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/contact',
                component: ComponentCreator('/portfolio/contact', 'e0a'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-classification',
                component: ComponentCreator('/portfolio/content-classification', 'f52'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-lifecycle',
                component: ComponentCreator('/portfolio/content-lifecycle', '8db'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-performance-dashboard',
                component: ComponentCreator('/portfolio/content-performance-dashboard', 'be4'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-reuse-models',
                component: ComponentCreator('/portfolio/content-reuse-models', 'e37'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-strategy',
                component: ComponentCreator('/portfolio/content-strategy', 'b8f'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/governance-models',
                component: ComponentCreator('/portfolio/governance-models', '41c'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/ia-frameworks',
                component: ComponentCreator('/portfolio/ia-frameworks', 'f80'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/ia-strategy',
                component: ComponentCreator('/portfolio/ia-strategy', '539'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/intelligent-authoring',
                component: ComponentCreator('/portfolio/intelligent-authoring', '18b'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/intro',
                component: ComponentCreator('/portfolio/intro', '746'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/knowledge-graphs',
                component: ComponentCreator('/portfolio/knowledge-graphs', 'da7'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/metadata-taxonomy',
                component: ComponentCreator('/portfolio/metadata-taxonomy', '7cf'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/projects-showcase',
                component: ComponentCreator('/portfolio/projects-showcase', '4d3'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/resume',
                component: ComponentCreator('/portfolio/resume', 'fba'),
                exact: true
              },
              {
                path: '/portfolio/search-optimization-ai',
                component: ComponentCreator('/portfolio/search-optimization-ai', '9b0'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/search-patterns',
                component: ComponentCreator('/portfolio/search-patterns', '4d7'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/seo-optimization',
                component: ComponentCreator('/portfolio/seo-optimization', 'c5c'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/site-architecture-design',
                component: ComponentCreator('/portfolio/site-architecture-design', '09c'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/style-guides',
                component: ComponentCreator('/portfolio/style-guides', '1c7'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/user-journey-analysis',
                component: ComponentCreator('/portfolio/user-journey-analysis', '8a0'),
                exact: true,
                sidebar: "portfolioSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
