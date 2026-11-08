# The hooba command

The whole server is managed by one command — `hooba`. You can run it on the server from any folder.

## Menu

The easiest way is to simply type:

```bash
hooba
```

A menu opens, and you choose an action by number. On screen it's in Russian; the numbers and their meaning are:

```text
======================================================================
  Hooba — managing server https://chat.example.com
======================================================================

  Server operation
    1) Status: is everything OK
    2) Start the server
    3) Stop the server
    4) Repair: restart everything from scratch (data is not touched)

  Updates
    5) Update Hooba to a new version
    6) Roll back the last update

  Logs and checks
    7) Server log (Ctrl+C to exit)
    8) Check that the server responds
    9) Check voice: why members can't hear each other

  Backups
   10) Make a backup
   11) Restore from a backup

  Settings
   12) Space for chat images
   13) Change the server address or reinstall
   14) Set up certificate renewal again

    0) Exit
```

## All commands

| Command | What it does |
|---|---|
| `hooba status` | Is everything OK: containers, server response, certificate expiry, disk space, latest backup |
| `hooba start` | Start the server |
| `hooba stop` | Stop the server |
| `hooba repair` | Recreate all containers. Data (database, images, settings) is not touched |
| `hooba update` | Download a new version and restart. A database backup is made automatically — [more](/en/server/update) |
| `hooba rollback` | Return to the version before the last update |
| `hooba logs [service]` | Log: `backend` — server, `web` — website, `postgres` — database, `coturn` — voice. Ctrl+C to exit |
| `hooba validate` | Check that the server responds |
| `hooba voice-check` | Find out why voice doesn't work: containers, addresses, whether packets reach the server. Saves a password-free report to `/opt/hooba/logs/voice-check-report.txt` |
| `hooba backup` | Back up the database, settings and images — [more](/en/server/backups) |
| `hooba restore [file]` | Restore from a backup |
| `hooba uploads-quota [GiB]` | Space for chat images — [more](/en/server/storage) |
| `hooba install` | Run again to change the server address or quota; passwords and data are kept |
| `hooba cert-hooks` | Set up automatic certificate renewal again |
| `hooba help` | List of commands |

## Command logs

Each command writes a full log to `/opt/hooba/logs/<command>.log`. If something goes wrong, the script shows which step failed and what to check — fix the cause and run the command again: re-running is safe.

## If `hooba` isn't found

If you get `hooba: command not found`, the same thing works like this:

```bash
/opt/hooba/install.sh status
```

The first such run as `root` turns the `hooba` command back on.

## Where things are

| Path | What's there |
|---|---|
| `/opt/hooba` | All of Hooba |
| `/opt/hooba/infra/docker/.env.prod` | Server passwords and settings. **Don't publish or delete it** |
| `/opt/hooba/logs/` | Command logs, `owner-summary.txt` — the installation summary with the setup token |
| `/opt/hooba/backups/` | Backups |
| `/etc/letsencrypt/live/<address>/` | Certificate |
