import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-website/__docusaurus/debug',
    component: ComponentCreator('/my-website/__docusaurus/debug', 'd3e'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/config',
    component: ComponentCreator('/my-website/__docusaurus/debug/config', '0e3'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/content',
    component: ComponentCreator('/my-website/__docusaurus/debug/content', 'e54'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-website/__docusaurus/debug/globalData', 'e5e'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-website/__docusaurus/debug/metadata', '2c6'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/registry',
    component: ComponentCreator('/my-website/__docusaurus/debug/registry', 'dcd'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/routes',
    component: ComponentCreator('/my-website/__docusaurus/debug/routes', '474'),
    exact: true
  },
  {
    path: '/my-website/blog',
    component: ComponentCreator('/my-website/blog', '121'),
    exact: true
  },
  {
    path: '/my-website/blog/archive',
    component: ComponentCreator('/my-website/blog/archive', 'bb1'),
    exact: true
  },
  {
    path: '/my-website/blog/first-blog-post',
    component: ComponentCreator('/my-website/blog/first-blog-post', 'b7a'),
    exact: true
  },
  {
    path: '/my-website/blog/long-blog-post',
    component: ComponentCreator('/my-website/blog/long-blog-post', '378'),
    exact: true
  },
  {
    path: '/my-website/blog/mdx-blog-post',
    component: ComponentCreator('/my-website/blog/mdx-blog-post', '6e5'),
    exact: true
  },
  {
    path: '/my-website/blog/tags',
    component: ComponentCreator('/my-website/blog/tags', '817'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/docusaurus',
    component: ComponentCreator('/my-website/blog/tags/docusaurus', 'e3e'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/facebook',
    component: ComponentCreator('/my-website/blog/tags/facebook', '19f'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/hello',
    component: ComponentCreator('/my-website/blog/tags/hello', '085'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/hola',
    component: ComponentCreator('/my-website/blog/tags/hola', '8b0'),
    exact: true
  },
  {
    path: '/my-website/blog/welcome',
    component: ComponentCreator('/my-website/blog/welcome', '76f'),
    exact: true
  },
  {
    path: '/my-website/markdown-page',
    component: ComponentCreator('/my-website/markdown-page', '1e9'),
    exact: true
  },
  {
    path: '/my-website/search',
    component: ComponentCreator('/my-website/search', '1e3'),
    exact: true
  },
  {
    path: '/my-website/docs',
    component: ComponentCreator('/my-website/docs', '1f4'),
    routes: [
      {
        path: '/my-website/docs/category/求解器',
        component: ComponentCreator('/my-website/docs/category/求解器', '983'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-website/docs/examples/ring resonator/ring resomator',
        component: ComponentCreator('/my-website/docs/examples/ring resonator/ring resomator', '70b'),
        exact: true,
        sidebar: "examplesSidebar"
      },
      {
        path: '/my-website/docs/examples/ybranch/',
        component: ComponentCreator('/my-website/docs/examples/ybranch/', '9b5'),
        exact: true,
        sidebar: "examplesSidebar"
      },
      {
        path: '/my-website/docs/faq/',
        component: ComponentCreator('/my-website/docs/faq/', 'd9c'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/my-website/docs/faq/faq1',
        component: ComponentCreator('/my-website/docs/faq/faq1', 'cdf'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/my-website/docs/faq/faq2',
        component: ComponentCreator('/my-website/docs/faq/faq2', 'b8d'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/my-website/docs/faq/faq3',
        component: ComponentCreator('/my-website/docs/faq/faq3', 'd3b'),
        exact: true,
        sidebar: "faqSidebar"
      },
      {
        path: '/my-website/docs/intro',
        component: ComponentCreator('/my-website/docs/intro', '563'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/my-website/docs/tutorial-basics/congratulations', 'ed5'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-blog-post', '1b0'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-document', 'f1e'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/my-website/docs/tutorial-basics/create-a-page', '20f'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/my-website/docs/tutorial-basics/deploy-your-site', 'e18'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/my-website/docs/tutorial-basics/markdown-features', 'bce'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/my-website/docs/tutorial-extras/manage-docs-versions', 'aed'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/my-website/docs/tutorial-extras/translate-your-site', '4d8'),
        exact: true
      },
      {
        path: '/my-website/docs/tutorial/material',
        component: ComponentCreator('/my-website/docs/tutorial/material', '197'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-website/docs/tutorial/mode/eme',
        component: ComponentCreator('/my-website/docs/tutorial/mode/eme', '59b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-website/docs/tutorial/mode/fde',
        component: ComponentCreator('/my-website/docs/tutorial/mode/fde', '2ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-website/docs/tutorial/mode/fdtd',
        component: ComponentCreator('/my-website/docs/tutorial/mode/fdtd', '85f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-website/docs/tutorial/t1',
        component: ComponentCreator('/my-website/docs/tutorial/t1', '20e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/my-website/',
    component: ComponentCreator('/my-website/', '560'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
