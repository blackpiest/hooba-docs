# Документация для владельцев сервера Hooba

Сайт на [VitePress](https://vitepress.dev): установка своего сервера Hooba, обслуживание и управление сообществом.

## Локально

Нужны Node 22 и pnpm.

```bash
pnpm install
pnpm dev       # http://localhost:5173, правки подхватываются на лету
pnpm build     # статический сайт в .vitepress/dist
pnpm preview   # посмотреть собранный сайт
```

## Структура

| Путь | Что |
|---|---|
| `src/index.md` | Главная |
| `src/start/` | Установка |
| `src/server/` | Обслуживание сервера |
| `src/community/` | Управление сообществом |
| `src/en/` | Английская версия: те же страницы по тем же путям |
| `src/public/` | Картинки, favicon |
| `.vitepress/config.mts` | Языки, меню, боковая панель, поиск |
| `.vitepress/theme/` | Цвета бренда |

Новая страница = файл `.md` в `src/` и его перевод в `src/en/` + пункт в `sidebar` обоих языков в `.vitepress/config.mts`.
