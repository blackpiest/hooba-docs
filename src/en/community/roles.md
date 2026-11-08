# Roles

Custom roles help you split members into groups: "Game moderators", "Newcomers", "Streamers". Roles can restrict permissions, open private channels, and highlight a nickname with a color and badge. Only the **owner** can create and grant roles.

## Create a role

Control panel → **«Роли»** (Roles) → enter the new role's name → create.

## Role settings {#settings}

| Setting | What it does |
|---|---|
| Название (Name) | How the role is labeled everywhere |
| Цвет (Color) | Nickname color in chat and in the member list |
| Показывать отдельно (Show separately) | Members with the role form a separate group in the "online" list. If someone has several such roles, they appear in the group of the one that's higher in the list |
| Значок роли (Role badge) | A badge next to the nickname of everyone with the role |
| Права роли (Role permissions) | See below |
| Участники с ролью (Members with the role) | Who has been given the role |

Drag roles to reorder them — the order decides which color and group win for someone with several roles.

## Role permissions

| Permission | What it allows |
|---|---|
| Отправлять сообщения (Send messages) | Write and edit your own messages in text channels |
| Говорить (Speak) | Turn on the microphone in voice channels. Without it, the member can only listen |
| Проводить трансляцию (Stream) | Share the screen |
| Отправлять картинки (Send images) | Attach images. Works together with the permission to write |

**A permission that's turned off is a restriction.** It applies even if the member's other roles allow the action. The restrictions don't affect the owner and admins.

::: tip Example: "Newcomers"
Create a "Newcomers" role with «Отправлять картинки» (Send images) turned off and give it to new members. Once they've settled in, remove the role.
:::

## Grant or remove a role

- Right-click a member → **«Роли…»** (Roles…) — tick the ones you need. Changes apply immediately.
- Or in the «Роли» (Roles) section → «Участники с ролью» (Members with the role).

## Built-in roles

Owner, Admin and Member («Нормис», Normie) are built in. They can't be deleted, but they can be renamed. Everyone has the Member role — its permissions apply to all regular members.

## Delete a role

The role is removed from all members, and channel restrictions based on it stop applying.
