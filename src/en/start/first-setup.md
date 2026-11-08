---
prev:
  text: Install
  link: /en/start/install
---

# First login and owner

## Create the owner

1. Open `https://<domain-or-IP>/setup` in your browser.
2. Enter the **setup token** the installer showed you.
3. Set the community name (3–50 characters) and choose a login and password for the owner (at least 8 characters). You can upload a server avatar now or later.

The owner (the **OWNER** role) is the main account of the community: it has access to everything, including roles, staff invites and server settings. A server has exactly one owner.

::: warning The owner's password can't be recovered
Hooba has no email recovery. Keep the password in a password manager.
:::

::: tip Lost the setup token?
The installer saved it along with the passwords in `/opt/hooba/logs/owner-summary.txt`. To view it: `cat /opt/hooba/logs/owner-summary.txt`. Once the owner has been created, the `/setup` page stops working.
:::

## What to do right after

1. **Create channels** — text and voice ([how](/en/community/channels)).
2. **Invite people** — registration is by invite code only ([how](/en/community/invites)).
3. **Appoint admins** if you won't be moderating alone ([who can do what](/en/community/permissions)).
4. **Test voice**: join a voice channel from two devices on different networks (for example, a computer and a phone on mobile data). If you can't hear anything, [check the ports](/en/server/ports).
5. **Download the password file** `.env.prod` to your computer ([how](/en/start/install#save-your-passwords)).
