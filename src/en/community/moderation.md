# Moderation

The owner and admins can moderate. Actions on **admins** are available only to the owner. The owner can't be moderated.

All actions below are recorded in the **«Журнал»** (Log) of the control panel: who did what to whom, when, and for what reason.

## Member menu

Right-click a member in the member list on the right, or use the **"…"** button next to them. Each item opens a confirmation window where you can give a reason.

| Item | What happens | Reversible |
|---|---|---|
| «Скрыть имя» (Hide name) | The display name is erased and the login is shown instead. The member can't set a new name | «Разрешить имя» (Allow name) — the member can set a name again (the old one doesn't come back) |
| «Исключить» (Kick) | The member is removed from the server and loses all roles. The account and messages stay | They can return with a new [invite code](/en/community/invites) |
| «Заблокировать» (Ban) | The account is closed: no more logging in. Messages stay | See [Unban](#unban) |

Also in this menu for the owner: «Сделать админом» (Make admin) / «Снять админа» (Remove admin), «Роли…» (Roles…), «Значки и титулы…» (Badges and titles…).

## In a voice channel

Right-click a member in a voice channel:

| Item | What happens |
|---|---|
| «Заглушить микрофон» (Mute microphone) | The member stays in the channel but can't speak until unmuted |
| «Переместить» (Move) | Move the member to another voice channel |
| «Выгнать» (Remove) | Disconnect the member from the voice channel. They stay on the server |

The volume of an individual member in the same menu is a personal setting; others aren't affected.

## Messages

- **Delete someone else's message** — message menu → «Удалить» (Delete).
- **Word filter** — automatically replaces banned words with asterisks ([more](/en/community/word-filter)).

## Unban

::: warning There's no unban button yet
In the current version a ban can't be lifted from the interface. If needed, it's done with a command on the server.
:::

Connect to the server and run this, putting the member's **login** in place of `nickname`:

```bash
cd /opt/hooba && docker compose --env-file infra/docker/.env.prod -f infra/docker/docker-compose.prod.yml \
  exec postgres psql -U postgres north_star \
  -c "UPDATE \"User\" SET \"isActive\" = true WHERE username = 'nickname';"
```

The answer `UPDATE 1` means it's done and the member can log in. `UPDATE 0` means the login is misspelled.

The member's roles are kept, but personal channel rules (for example, access to a private channel as one of the «Люди» (People)) were removed by the ban and have to be granted again.
