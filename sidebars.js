/**
 * Bipin Pandey Portfolio Sidebar
 * Clean, minimal structure for Information Architecture & AI projects
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  portfolioSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Information Architecture',
      collapsible: true,
      collapsed: false,
      items: [
        'ia-strategy',
        'ia-frameworks',
        'metadata-taxonomy',
        'content-reuse-models',
        'site-architecture-design',
      ],
    },
    {
      type: 'category',
      label: 'AI in Documentation',
      collapsible: true,
      collapsed: false,
      items: [
        'ai-content-solutions',
        'intelligent-authoring',
        'content-classification',
        'search-optimization-ai',
        'knowledge-graphs',
      ],
    },
    {
      type: 'category',
      label: 'Content Strategy',
      collapsible: true,
      collapsed: false,
      items: [
        'content-strategy',
        'governance-models',
        'style-guides',
        'seo-optimization',
        'content-lifecycle',
      ],
    },
    {
      type: 'category',
      label: 'Analytics & Insights',
      collapsible: true,
      collapsed: false,
      items: [
        'analytics-and-metrics',
        'user-journey-analysis',
        'search-patterns',
        'content-performance-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Professional Highlights',
      collapsible: true,
      collapsed: true,
      items: [
        'career-timeline',
        'projects-showcase',
        'achievements',
      ],
    },
    {
      type: 'doc',
      id: 'contact',
      label: 'Contact & Connect',
    },
  ],
};

module.exports = sidebars;
