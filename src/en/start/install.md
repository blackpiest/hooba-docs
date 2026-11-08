---
prev: false
next:
  text: First login and owner
  link: /en/start/first-setup
---

# Install

## One command

Connect to the server ([how](/en/start/ssh)) and run:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/blackpiest/hooba-app/main/install.sh)
```

The script downloads Hooba to `/opt/hooba`, installs everything it needs and starts the server.

::: tip curl: command not found
Run `apt update && apt install -y curl` first, then run the install command again.
:::

::: info Setting up a server for the first time?
Make sure your VPS is suitable and the ports are open — see [Requirements](/en/start/requirements). To get to the server's terminal, see [Connecting to the server](/en/start/ssh).
:::

## What the installer asks

The installer speaks Russian, but the questions come in this order and most answers are a number, `y`/`n` or Enter.

1. **How to open the server** — `1` by domain or `2` by IP address.
   - For a domain: enter it without `https://` (for example `chat.example.com`). The script checks that the domain's A record points to this server. If it doesn't, the script tells you what to fix; DNS changes take anywhere from a few minutes to a couple of hours.
   - For an IP: the script detects the public address and suggests it — pressing Enter is usually enough.
2. **Email for Let's Encrypt** — you'll get messages there if something is wrong with the certificate. You can leave it empty.
3. **How much space to give chat images** — 5 GiB by default. When the space is 80% full, the oldest images are deleted automatically. You can change this at any time ([more](/en/server/storage)).
4. **UFW firewall** — offers to turn it on and open only SSH and the Hooba ports. The script detects your current SSH port and won't close it.
5. **Nightly backups** — every night at 03:30, the latest 14 are kept. We recommend saying yes.

If your server already runs its own nginx, Apache or coturn on a port Hooba needs, the script offers to stop it: Hooba runs its own copies in containers.

The first build takes **5–15 minutes**.

## Done

At the end the script shows the server address and the **setup token**. Next — the [first login](/en/start/first-setup).

## If the installation stops with an error

The script tells you which step it stopped at and what to check. Fix the cause and **run the same command again** — what's already done won't be harmed. Common causes are listed in [Troubleshooting](/en/server/troubleshooting).

## Save your passwords

The file `/opt/hooba/infra/docker/.env.prod` holds the server's passwords. **Without it you can't restore a database backup on a new server.** Download it to your computer — enter this command **on your computer**, in a new PowerShell or Terminal window, not on the server:

```bash
scp root@<IP>:/opt/hooba/infra/docker/.env.prod .
```

The file appears in the folder where the terminal is open (on Windows, usually `C:\Users\<name>`). Don't show it to anyone.

## Manual install with git

If you'd rather not run a script from the internet in one line:

```bash
apt update && apt install -y git
git clone https://github.com/blackpiest/hooba-app.git /opt/hooba
cd /opt/hooba
chmod +x install.sh
./install.sh install
```

After installation the [`hooba`](/en/server/hooba-command) command is available on the server.
