# Troubleshooting

## Where to start

```bash
hooba status
```

This shows which containers are running, whether the server responds, and how much certificate time and disk space remain. In many cases this is enough:

```bash
hooba repair
```

It recreates all containers. **Data is not touched** — the database, images and settings stay.

If that doesn't help, look at the log:

```bash
hooba logs backend    # server
hooba logs web        # website (nginx)
hooba logs coturn     # voice (TURN)
hooba logs postgres   # database
```

Press Ctrl+C to exit the log.

## The site won't open

| What you see | What to check |
|---|---|
| The browser loads for a long time and reports a timeout | Port 443 is closed in your hosting firewall or the server is off. Check your hosting panel and the [ports](/en/server/ports) |
| "Your connection is not private", certificate expired | [Certificate renewal](/en/server/certificates#certificate-expired-or-about-to-expire) |
| 502 Bad Gateway | The website is up, but the server behind it isn't. `hooba status`, then `hooba repair`. If it happens again — `hooba logs backend` |
| Someone else's site or a hosting placeholder opens | The domain's A record points to the wrong IP |

## No voice or screen sharing

Chat works, but in a voice channel people can't hear each other or the connection hangs.

First run `hooba voice-check`: the command asks you to join a voice channel, checks whether voice reaches the server and suggests what to do. It saves a report you can attach to a question for the developers to `/opt/hooba/logs/voice-check-report.txt`. If the cause isn't found, go through this list:

1. **Ports.** The cause is almost always closed UDP ports in the hosting firewall: 3478, 40000–40100, 50000–50100. See [Ports and firewall](/en/server/ports).
2. **Voice container.** `coturn` should be running in `hooba status`. If it isn't — `hooba repair`, then `hooba logs coturn`.
3. **The server was installed with a domain before November 2026.** Browsers may have been given the domain instead of the IP, resulting in no sound and no errors at all. Run `hooba update` and then `hooba repair`: the update alone isn't enough, only the second command replaces the address.
4. **The server's IP changed** (for example, after a move). Run `hooba install` — it rewrites the voice address.
5. **It doesn't work for only one member** — most likely their network or browser: they should allow the site to use the microphone and try another browser or mobile data.

::: tip Screen sharing on a phone
Mobile browsers generally don't let websites share the screen: you can watch someone else's screen share from a phone, but your own has to be from a computer.
:::

## "Port in use"

During installation: `Порт 80 занят программой …` ("Port 80 is used by program …").

- If it's `nginx`, `apache2`, `caddy` or `turnserver` installed on the system, the script offers to stop it.
- If it's `docker-proxy`, the port is held by another Docker container. Look at `docker ps` and stop the extra one: `docker stop <name>`.
- Otherwise, stop the program the script named and run the installation again.

## Out of memory or disk space

- **The build fails** with `Killed`, `exit code 137` or `JavaScript heap out of memory` — there wasn't enough memory. Turn on swap: run `hooba install` again — on a server with less than 2 GB it offers to create a swap file. Or get a plan with 2 GB or more.
- **`no space left on device`** — the disk is full. See [Image storage](/en/server/storage#how-much-disk-space-is-left).

## The server won't start: "placeholder value from an example file"

This line in `hooba logs backend` means `.env.prod` still contains placeholder passwords from an example file (`замените-на-…`, `change-me` and similar). Those examples are public, so the server refuses to start with them: anyone could use them to sign in as the owner. The installer always writes real passwords — this only happens when the file was put together by hand.

The error lists which values to replace. Running `hooba install` again won't help: it keeps the passwords already in the file.

1. On the server, generate a new random value — a separate one for each line:

   ```bash
   openssl rand -hex 32
   ```

2. Open the file and replace the placeholders after `=` in the `JWT_SECRET`, `SETUP_TOKEN`, `TURN_AUTH_SECRET` lines (only those named in the error). Save with Ctrl+O, Enter; exit with Ctrl+X:

   ```bash
   nano /opt/hooba/infra/docker/.env.prod
   ```

3. Recreate the containers:

   ```bash
   hooba repair
   ```

After replacing `JWT_SECRET`, all members will have to sign in again.

If the error names `DATABASE_URL`, the placeholder is in `POSTGRES_PASSWORD`. The database password has to change inside the database too — otherwise the server can't connect to it. Put a new value from `openssl rand -hex 32` in place of `<new-password>`:

```bash
cd /opt/hooba && docker compose --env-file infra/docker/.env.prod -f infra/docker/docker-compose.prod.yml \
  exec postgres psql -U postgres -c "ALTER USER postgres PASSWORD '<new-password>';"
```

The reply `ALTER ROLE` means it worked. Then put the same password into the `POSTGRES_PASSWORD` line in `.env.prod` and run `hooba repair`.

## The server doesn't come up after a VPS reboot

Hooba starts by itself when the system boots. If the site didn't open after a reboot:

```bash
hooba start
```

## Nothing helped

1. Make a backup just in case: `hooba backup`.
2. Try [rolling back the last update](/en/server/update#if-the-new-version-fails) if the problem started after it.
3. Collect logs for your question: the `/opt/hooba/logs/<command>.log` file of the command that failed, and the output of `hooba logs backend` from the time of the error.

::: danger Don't publish `.env.prod`
When sending logs, make sure they don't contain the contents of `.env.prod` — it holds the server's passwords.
:::
