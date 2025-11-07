import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about', 'cc7'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '725'),
    exact: true
  },
  {
    path: '/blog/ai-in-documentation',
    component: ComponentCreator('/blog/ai-in-documentation', '970'),
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
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '21d'),
    exact: true
  },
  {
    path: '/blog/tags/content-strategy',
    component: ComponentCreator('/blog/tags/content-strategy', '46b'),
    exact: true
  },
  {
    path: '/blog/tags/documentation',
    component: ComponentCreator('/blog/tags/documentation', '69e'),
    exact: true
  },
  {
    path: '/blog/tags/information-architecture',
    component: ComponentCreator('/blog/tags/information-architecture', 'b9e'),
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
    component: ComponentCreator('/portfolio', '57f'),
    routes: [
      {
        path: '/portfolio',
        component: ComponentCreator('/portfolio', '230'),
        routes: [
          {
            path: '/portfolio',
            component: ComponentCreator('/portfolio', 'eef'),
            routes: [
              {
                path: '/portfolio/about',
                component: ComponentCreator('/portfolio/about', 'a6d'),
                exact: true
              },
              {
                path: '/portfolio/achievements',
                component: ComponentCreator('/portfolio/achievements', '113'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/ai-content-solutions',
                component: ComponentCreator('/portfolio/ai-content-solutions', '650'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/analytics-and-metrics',
                component: ComponentCreator('/portfolio/analytics-and-metrics', '45f'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/career-timeline',
                component: ComponentCreator('/portfolio/career-timeline', 'dc1'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/contact',
                component: ComponentCreator('/portfolio/contact', 'fbf'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-classification',
                component: ComponentCreator('/portfolio/content-classification', '081'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-lifecycle',
                component: ComponentCreator('/portfolio/content-lifecycle', '058'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-performance-dashboard',
                component: ComponentCreator('/portfolio/content-performance-dashboard', 'ce1'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-reuse-models',
                component: ComponentCreator('/portfolio/content-reuse-models', '91c'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/content-strategy',
                component: ComponentCreator('/portfolio/content-strategy', '4aa'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/governance-models',
                component: ComponentCreator('/portfolio/governance-models', '658'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/ia-frameworks',
                component: ComponentCreator('/portfolio/ia-frameworks', '7ae'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/ia-strategy',
                component: ComponentCreator('/portfolio/ia-strategy', 'd70'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/intelligent-authoring',
                component: ComponentCreator('/portfolio/intelligent-authoring', '498'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/intro',
                component: ComponentCreator('/portfolio/intro', '102'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/knowledge-graphs',
                component: ComponentCreator('/portfolio/knowledge-graphs', '799'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/metadata-taxonomy',
                component: ComponentCreator('/portfolio/metadata-taxonomy', '9da'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/projects-showcase',
                component: ComponentCreator('/portfolio/projects-showcase', '813'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/resume',
                component: ComponentCreator('/portfolio/resume', 'e22'),
                exact: true
              },
              {
                path: '/portfolio/search-optimization-ai',
                component: ComponentCreator('/portfolio/search-optimization-ai', 'ed1'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/search-patterns',
                component: ComponentCreator('/portfolio/search-patterns', '458'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/seo-optimization',
                component: ComponentCreator('/portfolio/seo-optimization', '70d'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/site-architecture-design',
                component: ComponentCreator('/portfolio/site-architecture-design', 'd9d'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/style-guides',
                component: ComponentCreator('/portfolio/style-guides', 'a90'),
                exact: true,
                sidebar: "portfolioSidebar"
              },
              {
                path: '/portfolio/user-journey-analysis',
                component: ComponentCreator('/portfolio/user-journey-analysis', 'bce'),
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
