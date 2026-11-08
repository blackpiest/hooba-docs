---
layout: home
title: Documentation for Hooba server owners
titleTemplate: false

hero:
  name: Your own Hooba server
  text: Voice, chat and screen sharing for your community
  tagline: Documentation for Hooba server owners — how to set up a server with one command, keep it healthy and manage your community.
  image:
    src: /hooba-favicon-transparent.png
    alt: Hooba
  actions:
    - theme: brand
      text: Install
      link: /en/start/install
    - theme: alt
      text: Something broke
      link: /en/server/troubleshooting
    - theme: alt
      text: Manage your community
      link: /en/community/admin-panel

features:
  - title: Installed in 15 minutes
    details: Rent a VPS and enter one command — the script installs everything it needs, issues a certificate and starts the server.
    link: /en/start/install
    linkText: How to install
  - title: Maintenance without DevOps
    details: The hooba command has a menu — updates, rollback, backups and repairs are one item away.
    link: /en/server/hooba-command
    linkText: The hooba command
  - title: Ports, certificates, voice
    details: What to open in your firewall, how the certificate renews and why voice might not work.
    link: /en/server/ports
    linkText: Ports and firewall
  - title: Moderation and roles
    details: Invites, channels, role permissions, bans, reports and the word filter.
    link: /en/community/moderation
    linkText: Moderation
---

## One-command install

Connect to your VPS ([how](/en/start/ssh)) and run:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/blackpiest/hooba-app/main/install.sh)
```

The script installs everything it needs, issues a certificate and starts the server. See [Install](/en/start/install) for details and [Requirements](/en/start/requirements) for server specs and ports.

::: info Hooba itself is in Russian
The app, the installer and the `hooba` menu are currently available in Russian only. This documentation quotes buttons and tabs exactly as they appear on screen, with an English translation in brackets: **«Инвайты»** (Invites).
:::
