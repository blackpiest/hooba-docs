# Address and certificate

The Hooba site only works over `https://` — without it, browsers don't allow access to the microphone and screen sharing. Let's Encrypt issues the certificate for free, and the installer takes care of it.

## Domain or IP

| | Domain | IP address |
|---|---|---|
| Address | `https://chat.example.com` | `https://203.0.113.10` |
| What to buy | a domain | nothing |
| Certificate lifetime | 90 days, renewed about 30 days before expiry | 6 days, renewed roughly every 3 days |
| During renewal | the site is unavailable for a few seconds | the site is unavailable for a few seconds, but more often |

A certificate for an IP needs a recent certbot (5.3+) — the installer gets it from snap by itself.

## How renewal works

Renewal is handled by the system certbot timer (it checks twice a day whether it's time). During renewal certbot needs port 80, so Hooba briefly stops its website, then starts it again and hands the new certificate to the voice server. All of this is set up automatically.

To check how long the certificate has left and whether the timer is on:

```bash
hooba status
```

## Certificate expired or about to expire

`hooba status` warns you that renewal doesn't seem to be working. Check that renewal goes through:

```bash
certbot renew --dry-run
```

- **An error about port 80 / connection** — port 80 is closed in your hosting firewall. Open it ([ports](/en/server/ports)).
- **A DNS error** — the domain's A record no longer points to this server.
- **No error** — set up renewal again and restart the server:

```bash
hooba cert-hooks
hooba repair
```

If the certbot timer isn't found at all, `hooba status` suggests a line for cron: `0 */12 * * * certbot renew -q`.

## Change the address

For example, you started with an IP and have now bought a domain.

1. Create an A record for the domain pointing to the server's IP and wait until it works.
2. Run `hooba install` (or menu item 13, "Change the server address or reinstall").
3. Answer `y` when asked whether to reinstall, then choose the new address.

Passwords, the database and images are kept. Tell your members the new address: in the desktop app it has to be entered again.

## Let's Encrypt won't issue a certificate

| Cause | What to do |
|---|---|
| Port 80 is closed | Open 80/TCP to the whole internet, including in your hosting panel's firewall |
| The domain doesn't point to the server | Check: `getent hosts chat.example.com` should show the server's IP |
| Too many attempts | After 5 failures in a row, Let's Encrypt blocks issuance for an hour — wait |
| Something else | The certbot error text is in the installer's output, in the `Detail` and `Hint` lines |
