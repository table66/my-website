import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-website/__docusaurus/debug',
    component: ComponentCreator('/my-website/__docusaurus/debug', '323'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/config',
    component: ComponentCreator('/my-website/__docusaurus/debug/config', '4d6'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/content',
    component: ComponentCreator('/my-website/__docusaurus/debug/content', 'bc0'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/globalData',
    component: ComponentCreator('/my-website/__docusaurus/debug/globalData', '496'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/metadata',
    component: ComponentCreator('/my-website/__docusaurus/debug/metadata', 'b94'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/registry',
    component: ComponentCreator('/my-website/__docusaurus/debug/registry', '02d'),
    exact: true
  },
  {
    path: '/my-website/__docusaurus/debug/routes',
    component: ComponentCreator('/my-website/__docusaurus/debug/routes', '7c7'),
    exact: true
  },
  {
    path: '/my-website/blog',
    component: ComponentCreator('/my-website/blog', '20f'),
    exact: true
  },
  {
    path: '/my-website/blog/archive',
    component: ComponentCreator('/my-website/blog/archive', '32d'),
    exact: true
  },
  {
    path: '/my-website/blog/first-blog-post',
    component: ComponentCreator('/my-website/blog/first-blog-post', '23b'),
    exact: true
  },
  {
    path: '/my-website/blog/long-blog-post',
    component: ComponentCreator('/my-website/blog/long-blog-post', 'e25'),
    exact: true
  },
  {
    path: '/my-website/blog/mdx-blog-post',
    component: ComponentCreator('/my-website/blog/mdx-blog-post', 'ab6'),
    exact: true
  },
  {
    path: '/my-website/blog/tags',
    component: ComponentCreator('/my-website/blog/tags', '4b2'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/docusaurus',
    component: ComponentCreator('/my-website/blog/tags/docusaurus', 'b22'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/facebook',
    component: ComponentCreator('/my-website/blog/tags/facebook', 'ed7'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/hello',
    component: ComponentCreator('/my-website/blog/tags/hello', '288'),
    exact: true
  },
  {
    path: '/my-website/blog/tags/hola',
    component: ComponentCreator('/my-website/blog/tags/hola', 'd53'),
    exact: true
  },
  {
    path: '/my-website/blog/welcome',
    component: ComponentCreator('/my-website/blog/welcome', '717'),
    exact: true
  },
  {
    path: '/my-website/markdown-page',
    component: ComponentCreator('/my-website/markdown-page', '7f3'),
    exact: true
  },
  {
    path: '/my-website/search',
    component: ComponentCreator('/my-website/search', '634'),
    exact: true
  },
  {
    path: '/my-website/docs',
    component: ComponentCreator('/my-website/docs', '114'),
    routes: [
      {
        path: '/my-website/docs/category/求解器',
        component: ComponentCreator('/my-website/docs/category/求解器', '983'),
        exact: true,
        sidebar: "tutorialSidebar"
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
    component: ComponentCreator('/my-website/', '8fd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
