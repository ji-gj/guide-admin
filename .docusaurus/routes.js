import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/guide-admin/__docusaurus/debug',
    component: ComponentCreator('/guide-admin/__docusaurus/debug', 'e0e'),
    exact: true
  },
  {
    path: '/guide-admin/__docusaurus/debug/config',
    component: ComponentCreator('/guide-admin/__docusaurus/debug/config', '431'),
    exact: true
  },
  {
    path: '/guide-admin/__docusaurus/debug/content',
    component: ComponentCreator('/guide-admin/__docusaurus/debug/content', '410'),
    exact: true
  },
  {
    path: '/guide-admin/__docusaurus/debug/globalData',
    component: ComponentCreator('/guide-admin/__docusaurus/debug/globalData', '84d'),
    exact: true
  },
  {
    path: '/guide-admin/__docusaurus/debug/metadata',
    component: ComponentCreator('/guide-admin/__docusaurus/debug/metadata', '20d'),
    exact: true
  },
  {
    path: '/guide-admin/__docusaurus/debug/registry',
    component: ComponentCreator('/guide-admin/__docusaurus/debug/registry', '2e8'),
    exact: true
  },
  {
    path: '/guide-admin/__docusaurus/debug/routes',
    component: ComponentCreator('/guide-admin/__docusaurus/debug/routes', '991'),
    exact: true
  },
  {
    path: '/guide-admin/markdown-page',
    component: ComponentCreator('/guide-admin/markdown-page', '6d4'),
    exact: true
  },
  {
    path: '/guide-admin/',
    component: ComponentCreator('/guide-admin/', '732'),
    routes: [
      {
        path: '/guide-admin/',
        component: ComponentCreator('/guide-admin/', 'e55'),
        routes: [
          {
            path: '/guide-admin/',
            component: ComponentCreator('/guide-admin/', '523'),
            routes: [
              {
                path: '/guide-admin/admin/overview',
                component: ComponentCreator('/guide-admin/admin/overview', '9bd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/annual-leave/history',
                component: ComponentCreator('/guide-admin/annual-leave/history', 'acb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/annual-leave/link-community',
                component: ComponentCreator('/guide-admin/annual-leave/link-community', 'edb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/annual-leave/link-e-approval',
                component: ComponentCreator('/guide-admin/annual-leave/link-e-approval', 'c05'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/annual-leave/management',
                component: ComponentCreator('/guide-admin/annual-leave/management', '4b3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/auth/role',
                component: ComponentCreator('/guide-admin/auth/role', '01e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/dashboard/',
                component: ComponentCreator('/guide-admin/dashboard/', 'f3d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/exception/access-control',
                component: ComponentCreator('/guide-admin/exception/access-control', 'c42'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/exception/external-user',
                component: ComponentCreator('/guide-admin/exception/external-user', '95a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/account',
                component: ComponentCreator('/guide-admin/faq/account', 'd1f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/community',
                component: ComponentCreator('/guide-admin/faq/community', '26b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/e-approval',
                component: ComponentCreator('/guide-admin/faq/e-approval', 'd2c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/email',
                component: ComponentCreator('/guide-admin/faq/email', 'e94'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/messenger',
                component: ComponentCreator('/guide-admin/faq/messenger', '712'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/organization',
                component: ComponentCreator('/guide-admin/faq/organization', '374'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/faq/payment',
                component: ComponentCreator('/guide-admin/faq/payment', '204'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/link/email',
                component: ComponentCreator('/guide-admin/link/email', '975'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/link/hrm',
                component: ComponentCreator('/guide-admin/link/hrm', 'ef1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/log/login',
                component: ComponentCreator('/guide-admin/log/login', '4d0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/menu/change-order',
                component: ComponentCreator('/guide-admin/menu/change-order', 'f7c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/add-members',
                component: ComponentCreator('/guide-admin/organization/add-members', 'c3f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/bulk-add-member',
                component: ComponentCreator('/guide-admin/organization/bulk-add-member', '96c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/concurrent-position',
                component: ComponentCreator('/guide-admin/organization/concurrent-position', '758'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/overview',
                component: ComponentCreator('/guide-admin/organization/overview', '462'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/set-manager',
                component: ComponentCreator('/guide-admin/organization/set-manager', 'd02'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/set-members',
                component: ComponentCreator('/guide-admin/organization/set-members', '694'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/set-organization',
                component: ComponentCreator('/guide-admin/organization/set-organization', 'a5e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/organization/sort-position',
                component: ComponentCreator('/guide-admin/organization/sort-position', 'dde'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/payment/history',
                component: ComponentCreator('/guide-admin/payment/history', '7dc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/payment/management',
                component: ComponentCreator('/guide-admin/payment/management', '2f0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/popup/add',
                component: ComponentCreator('/guide-admin/popup/add', 'a18'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/site/configuration',
                component: ComponentCreator('/guide-admin/site/configuration', '17d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/sns/accusation',
                component: ComponentCreator('/guide-admin/sns/accusation', '0ad'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/sns/community',
                component: ComponentCreator('/guide-admin/sns/community', 'c50'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/sns/posts',
                component: ComponentCreator('/guide-admin/sns/posts', '469'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/sns/widget',
                component: ComponentCreator('/guide-admin/sns/widget', '426'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/statistics/history',
                component: ComponentCreator('/guide-admin/statistics/history', '5c6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/statistics/user',
                component: ComponentCreator('/guide-admin/statistics/user', 'ff2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/guide-admin/',
                component: ComponentCreator('/guide-admin/', '9b5'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
