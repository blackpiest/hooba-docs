# Backups

## What is saved

| File in `/opt/hooba/backups/` | What's inside |
|---|---|
| `north_star-<date>.sql.gz` | Database: members, messages, channels, roles, community settings |
| `uploads-<date>.tar.gz` | Chat images, server avatar, custom reactions |
| `env-<date>.copy` | A copy of the `.env.prod` password file |

## Nightly backups

The script offers to turn these on during installation: every night at **03:30** a backup of the **database** (without images) is saved, and the **latest 14** are kept. Backups you make manually are never deleted.

To check whether nightly backups are on and when the last one ran, use `hooba status`. To turn them on if you declined during installation, use `hooba install` (it asks again). To turn them off:

```bash
rm /etc/cron.d/hooba-backup
```

## Make a backup manually

```bash
hooba backup               # database, settings and images
hooba backup --no-uploads  # no images — faster and smaller
```

## Don't keep backups only on the server

Backups are stored on the same server. If the server breaks or the provider deletes it, they go too. Download the folder to your computer from time to time. Enter this command **on your computer**:

```bash
scp -r root@<IP>:/opt/hooba/backups .
```

## Restore

```bash
hooba restore
```

With no arguments, the **most recent** database backup is used. If there's an image archive with the same date next to it, the script offers to restore that too. You can also name the files explicitly:

```bash
hooba restore /opt/hooba/backups/north_star-20261101-033000.sql.gz /opt/hooba/backups/uploads-20261101-033000.tar.gz
```

::: warning Current data will be replaced
Everything that happened after the backup was made is lost. Before restoring, the script saves the current database to `backups/…-before-restore.sql.gz` — if you picked the wrong backup, you can go back.
:::

To see the list of backups:

```bash
ls -lh /opt/hooba/backups
```
