# Update and rollback

## Update

```bash
hooba update
```

What happens:

1. A database backup is made: `backups/north_star-<date>-before-update.sql.gz`.
2. The new version is downloaded.
3. The server is rebuilt (5–15 minutes) and restarted. The website and voice are unavailable for about a minute during this.
4. The script checks that the new version responds.

If there's no new version, the script simply rebuilds the current one — this is safe.

::: tip When to update
Preferably at a quiet time — the rebuild loads the server, and members in voice are disconnected during the restart.
:::

## If the new version fails

```bash
hooba rollback
```

Returns the version from before the last `hooba update`, **together with the database as it was at the time of the update**.

::: warning What is lost in a rollback
Everything that happened after the update — new messages, registrations, settings changes. Before rolling back, the script still saves the current database to `backups/…-before-rollback.sql.gz`, so nothing is lost for good.
:::

Once a fix is released, update as usual: `hooba update`.

## "Failed to download the update"

This usually means files in `/opt/hooba` were edited by hand. The script lists those files. Put them back as they were and run the update again:

```bash
git -C /opt/hooba checkout -- .
hooba update
```

The `.env.prod` file, backups and logs aren't touched — they aren't part of the code.

## Desktop app

The Hooba desktop app updates itself, separately from the server.
