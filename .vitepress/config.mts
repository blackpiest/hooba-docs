import { defineConfig } from "vitepress";

// Публичный репозиторий Hooba (то, что ставит install.sh).
const APP_REPO = "https://github.com/blackpiest/hooba-app";

// GitHub Pages без своего домена отдаёт сайт из подпапки (/<repo>/) — её передаёт deploy-workflow.
const base = process.env.DOCS_BASE || "/";

export default defineConfig({
  srcDir: "src",
  base,
  lang: "ru-RU",
  title: "Hooba",
  titleTemplate: ":title — для владельцев сервера Hooba",
  description: "Документация для владельцев сервера Hooba: как поднять свой сервер и управлять сообществом",
  cleanUrls: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", type: "image/png", href: `${base}hooba-favicon.png?v=2` }]],

  themeConfig: {
    logo: "/hooba-favicon-transparent.png",
    siteTitle: "Hooba · сервер",

    nav: [
      { text: "Установка", link: "/start/requirements", activeMatch: "/start/" },
      { text: "Обслуживание", link: "/server/hooba-command", activeMatch: "/server/" },
      { text: "Сообщество", link: "/community/admin-panel", activeMatch: "/community/" },
      { text: "Код сервера", link: APP_REPO },
    ],

    sidebar: [
      {
        text: "Установка",
        items: [
          { text: "Что нужно", link: "/start/requirements" },
          { text: "Подключение к серверу", link: "/start/ssh" },
          { text: "Установка", link: "/start/install" },
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

    search: {
      provider: "local",
      options: {
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

    socialLinks: [{ icon: "github", link: APP_REPO }],
  },
});
