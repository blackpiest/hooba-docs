import { defineConfig } from "vitepress";

// Публичный репозиторий Hooba (то, что ставит install.sh).
const APP_REPO = "https://github.com/blackpiest/hooba-app";

// GitHub Pages без своего домена отдаёт сайт из подпапки (/<repo>/) — её передаёт deploy-workflow.
const base = process.env.DOCS_BASE || "/";

export default defineConfig({
  srcDir: "src",
  base,
  title: "Hooba",
  cleanUrls: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", type: "image/png", href: `${base}hooba-favicon.png?v=2` }]],

  // Русский — в корне (адреса страниц не меняются), английский — в src/en/ (адреса /en/…).
  // Переключатель языка VitePress показывает сам и ведёт на ту же страницу другого языка.
  locales: {
    root: {
      label: "Русский",
      lang: "ru-RU",
      titleTemplate: ":title — для владельцев сервера Hooba",
      description: "Документация для владельцев сервера Hooba: как поднять свой сервер и управлять сообществом",
      themeConfig: {
        siteTitle: "Hooba · сервер",

        nav: [
          { text: "Установка", link: "/start/install", activeMatch: "/start/" },
          { text: "Обслуживание", link: "/server/hooba-command", activeMatch: "/server/" },
          { text: "Сообщество", link: "/community/admin-panel", activeMatch: "/community/" },
          { text: "Код сервера", link: APP_REPO },
        ],

        sidebar: [
          {
            text: "Установка",
            items: [
              { text: "Установка", link: "/start/install" },
              { text: "Что нужно", link: "/start/requirements" },
              { text: "Подключение к серверу", link: "/start/ssh" },
              { text: "Первый вход и владелец", link: "/start/first-setup" },
            ],
          },
          {
            text: "Обслуживание сервера",
            items: [
              { text: "Команда hooba", link: "/server/hooba-command" },
              { text: "Обновление и откат", link: "/server/update" },
              { text: "Резервные копии", link: "/server/backups" },
              { text: "Переезд на другой сервер", link: "/server/migration" },
              { text: "Адрес и сертификат", link: "/server/certificates" },
              { text: "Порты и брандмауэр", link: "/server/ports" },
              { text: "Место под картинки", link: "/server/storage" },
              { text: "Если что-то сломалось", link: "/server/troubleshooting" },
            ],
          },
          {
            text: "Управление сообществом",
            items: [
              { text: "Панель управления", link: "/community/admin-panel" },
              { text: "Кто что может", link: "/community/permissions" },
              { text: "Приглашения", link: "/community/invites" },
              { text: "Каналы", link: "/community/channels" },
              { text: "Роли", link: "/community/roles" },
              { text: "Модерация", link: "/community/moderation" },
              { text: "Жалобы", link: "/community/reports" },
              { text: "Аватар сервера и реакции", link: "/community/appearance" },
              { text: "Фильтр слов", link: "/community/word-filter" },
              { text: "Объявления", link: "/community/announcements" },
              { text: "Значки, титулы, испытания", link: "/community/cosmetics" },
            ],
          },
          {
            text: "Участникам",
            items: [{ text: "Как подключиться", link: "/community/joining" }],
          },
        ],

        outline: { level: [2, 3], label: "На этой странице" },
        docFooter: { prev: "Назад", next: "Дальше" },
        lastUpdated: { text: "Обновлено" },
        darkModeSwitchLabel: "Тема",
        lightModeSwitchTitle: "Светлая тема",
        darkModeSwitchTitle: "Тёмная тема",
        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Наверх",
        langMenuLabel: "Язык",
        notFound: {
          title: "Страница не найдена",
          quote: "Возможно, её переименовали. Загляните в меню слева или воспользуйтесь поиском.",
          linkText: "На главную",
        },
      },
    },

    en: {
      label: "English",
      lang: "en-US",
      titleTemplate: ":title — for Hooba server owners",
      description: "Documentation for Hooba server owners: how to run your own server and manage your community",
      themeConfig: {
        siteTitle: "Hooba · server",

        nav: [
          { text: "Install", link: "/en/start/install", activeMatch: "/en/start/" },
          { text: "Maintenance", link: "/en/server/hooba-command", activeMatch: "/en/server/" },
          { text: "Community", link: "/en/community/admin-panel", activeMatch: "/en/community/" },
          { text: "Server code", link: APP_REPO },
        ],

        sidebar: [
          {
            text: "Installation",
            items: [
              { text: "Install", link: "/en/start/install" },
              { text: "Requirements", link: "/en/start/requirements" },
              { text: "Connecting to the server", link: "/en/start/ssh" },
              { text: "First login and owner", link: "/en/start/first-setup" },
            ],
          },
          {
            text: "Server maintenance",
            items: [
              { text: "The hooba command", link: "/en/server/hooba-command" },
              { text: "Update and rollback", link: "/en/server/update" },
              { text: "Backups", link: "/en/server/backups" },
              { text: "Moving to another server", link: "/en/server/migration" },
              { text: "Address and certificate", link: "/en/server/certificates" },
              { text: "Ports and firewall", link: "/en/server/ports" },
              { text: "Image storage", link: "/en/server/storage" },
              { text: "Troubleshooting", link: "/en/server/troubleshooting" },
            ],
          },
          {
            text: "Managing your community",
            items: [
              { text: "Control panel", link: "/en/community/admin-panel" },
              { text: "Who can do what", link: "/en/community/permissions" },
              { text: "Invites", link: "/en/community/invites" },
              { text: "Channels", link: "/en/community/channels" },
              { text: "Roles", link: "/en/community/roles" },
              { text: "Moderation", link: "/en/community/moderation" },
              { text: "Reports", link: "/en/community/reports" },
              { text: "Server avatar and reactions", link: "/en/community/appearance" },
              { text: "Word filter", link: "/en/community/word-filter" },
              { text: "Announcements", link: "/en/community/announcements" },
              { text: "Badges, titles, challenges", link: "/en/community/cosmetics" },
            ],
          },
          {
            text: "For members",
            items: [{ text: "How to join", link: "/en/community/joining" }],
          },
        ],

        outline: { level: [2, 3] },
        notFound: {
          title: "Page not found",
          quote: "It may have been renamed. Check the menu on the left or use the search.",
          linkText: "Back to home",
        },
      },
    },
  },

  themeConfig: {
    logo: "/hooba-favicon-transparent.png",

    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: "Поиск", buttonAriaLabel: "Поиск" },
              modal: {
                displayDetails: "Подробнее",
                resetButtonTitle: "Сбросить",
                backButtonTitle: "Закрыть",
                noResultsText: "Ничего не найдено по запросу",
                footer: { selectText: "открыть", navigateText: "выбрать", closeText: "закрыть" },
              },
            },
          },
        },
      },
    },

    socialLinks: [{ icon: "github", link: APP_REPO }],
  },
});
