// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '티그리스 관리자 가이드',
  tagline: '티그리스 관리자 가이드',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tigris', // Usually your GitHub org/user name.
  projectName: 'guide-admin', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          breadcrumbs: false,
          // sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '티그리스 가이드',
        logo: {
          alt: 'TIGRIS',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'defaultSidebar',
          //   position: 'left',
          //   label: '관리자용',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `<div class="footer">
                      <div class="inner">
                          <div class="left">
                              <h2 class="logo logo--dark"></h2>
                              <div class="category">
                                  <div class="category-list">
                                      <a href="/guide-admin/admin/overview">관리자 메뉴 안내</a>
                                      <a href="/guide-admin/dashboard">대시보드</a>
                                      <a href="/guide-admin/site/configuration">사이트 관리</a>
                                      <a href="/guide-admin/auth/role">권한 관리</a>
                                      <a href="/guide-admin/organization/overview">조직/사용자 관리</a>
                                      <a href="/guide-admin/sns/community">SNS 관리</a>
                                      <a href="/guide-admin/annual-leave/management">연차관리</a>
                                  </div>
                                  <div class="category-list">
                                      <a href="/guide-admin/exception/access-contro">예외 관리</a>
                                      <a href="/guide-admin/menu/change-order">메뉴 순서 관리</a>
                                      <a href="/guide-admin/statistics/history">통계</a>
                                      <a href="/guide-admin/popup/add">팝업 관리</a>
                                      <a href="/guide-admin/payment/management">이용료 자동 결제</a>
                                      <a href="/guide-admin/log/login">로그</a>
                                  </div>
                              </div>
                          </div>
                          <div>
                              <p class="footer-desc">
                                  더 궁금한 내용이 있으신가요? <br/>
                                  티그리스 고객센터로 문의해 주세요. <br/>
                                  (운영시간 9:00-16:00 *공휴일 제외) <br/> <br/>

                                  유선문의 : 1668-3708 <br/>
                                  채팅문의 : 티그리스 홈페이지 오른쪽 하단 [문의하기] 
                              </p>
                              <p class="copyright">Copyright ${new Date().getFullYear()}. TigerCompany</p>
                          </div>
                      </div>
                  </div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
