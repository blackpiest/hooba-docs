---
next:
  text: Install
  link: /en/start/install
---

# Connecting to the server

After you buy a VPS, the hosting provider sends you an **IP address**, a **login** (usually `root`) and a **password**. Unless stated otherwise, all commands in this documentation are entered in the **server's** terminal.

## Open a terminal on your computer

- **Windows** — Start → type "PowerShell" → open it.
- **macOS** — Applications → Utilities → Terminal.
- **Linux** — Terminal from the applications menu.

## Connect

Replace `<IP>` with the server address from your provider's email:

```bash
ssh root@<IP>
```

1. On the first connection you'll see `Are you sure you want to continue connecting?` — type `yes` and press Enter.
2. Enter the password from the email. **The characters aren't shown as you type** — that's normal, just type it and press Enter.
3. When the prompt changes to something like `root@server:~#`, you're on the server.

To leave the server, use the `exit` command or close the window.

## If you can't get in

| Message | What to do |
|---|---|
| `Permission denied` | Wrong password. Copy it from the email again; some providers let you reset it in the control panel. |
| `Connection timed out` | Wrong IP, or the server is still being created. Wait a couple of minutes and check the IP in the panel. |
| `Connection refused` | SSH on the server listens on a non-standard port. Look it up in the panel and connect like this: `ssh -p <port> root@<IP>`. |

## Pasting text into the terminal

- **PowerShell** — right-click or Ctrl+V.
- **macOS Terminal** — Cmd+V.
- **Linux** — Ctrl+Shift+V.

[Install →](/en/start/install)
