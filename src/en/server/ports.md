# Ports and firewall

## Which ports are needed

| Port | Protocol | Used by | If closed |
|---|---|---|---|
| 80 | TCP | certificate issuance and renewal, redirect to https | the certificate won't be issued or renewed |
| 443 | TCP | website, API, chat | the site won't open |
| 3478 | UDP + TCP | voice: TURN/STUN | voice won't work for some members |
| 5349 | TCP | voice over TLS — fallback for strict networks (offices, some ISPs and mobile carriers) | no voice on strict networks |
| 40000–40100 | UDP + TCP | voice and screen sharing directly to the server | voice connects more slowly or doesn't work |
| 50000–50100 | UDP | voice via relay (TURN) | voice won't work for members behind strict NAT |

SSH (usually 22) must stay open too — otherwise you won't be able to get to the server yourself.

## Two firewalls

A server can have **two** firewalls, and the ports must be open in both:

1. **In your hosting panel** — called Firewall, Security groups or Access rules. Not every provider has one. Open the **inbound** ports from the table above. Hooba can't manage it — only you can.
2. **On the server itself** — UFW. The installer offers to turn it on and open everything needed.

## If the public IP isn't on the server itself

Some providers (AWS, Oracle Cloud, Yandex Cloud and others) give the server only an internal address and forward the public IP to it from outside. To check: `ip -4 addr` doesn't show your public IP.

You don't need to do anything. `hooba install`, `hooba update` and `hooba repair` detect this on their own and print a message starting with «Сервер за NAT хостинга…» ("server behind the provider's NAT"). The voice fallback (TURN) then runs on the internal address, while members are still given the public one. To check voice settings: `hooba voice-check`.

## UFW by hand

If you declined during installation or something got out of sync:

```bash
ufw allow 22/tcp          # SSH — change this if your port is different
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 3478
ufw allow 5349/tcp
ufw allow 40000:40100/udp
ufw allow 40000:40100/tcp
ufw allow 50000:50100/udp
ufw enable
```

::: danger Don't lock yourself out of SSH
If SSH is on a non-standard port, open that port on the first line. Otherwise, after `ufw enable` you won't be able to connect to the server, and only the console in your hosting panel will be left.
:::

To check what's open:

```bash
ufw status
```

## Check the ports from outside

From **another** computer (not the server):

```bash
curl -I https://<address>
```

A `HTTP/2 200` response means the site is reachable. The easiest way to test voice is to use it: join a voice channel from two devices on different networks, for example a computer and a phone on mobile data.
