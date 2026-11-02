---
layout: home
title: Документация для владельцев сервера Hooba
titleTemplate: false

hero:
  name: Свой сервер Hooba
  text: Голос, чат и демонстрация экрана для вашего сообщества
  tagline: Документация для владельцев сервера Hooba — как поднять сервер одной командой, держать его в порядке и управлять сообществом.
  image:
    src: /hooba-favicon-transparent.png
    alt: Hooba
  actions:
    - theme: brand
      text: Установить
      link: /start/install
    - theme: alt
      text: Что-то сломалось
      link: /server/troubleshooting
    - theme: alt
      text: Управление сообществом
      link: /community/admin-panel

features:
  - title: Установка за 15 минут
    details: Арендуете VPS, вводите одну команду — скрипт сам поставит всё нужное, выпустит сертификат и запустит сервер.
    link: /start/install
    linkText: Как установить
  - title: Обслуживание без DevOps
    details: Команда hooba с меню — обновление, откат, резервные копии и починка в один пункт.
    link: /server/hooba-command
    linkText: Команда hooba
  - title: Порты, сертификаты, голос
    details: Что открыть в брандмауэре, как продлевается сертификат и почему может не работать голос.
    link: /server/ports
    linkText: Порты и брандмауэр
  - title: Модерация и роли
    details: Приглашения, каналы, права ролей, блокировки, жалобы и фильтр слов.
    link: /community/moderation
    linkText: Модерация
---

## Установка одной командой

Подключитесь к своему VPS ([как](/start/ssh)) и выполните:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/blackpiest/hooba-app/main/install.sh)
```

Скрипт сам поставит всё нужное, выпустит сертификат и запустит сервер. Подробно — в разделе [Установка](/start/install), требования к серверу и порты — в [Что нужно](/start/requirements).

