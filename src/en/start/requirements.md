# Requirements

Hooba is a server for a single community: text channels, voice rooms for up to 8 people, screen sharing, roles, reactions and profile customization. You install it on a server you rent (a VPS), and everything — messages, images, passwords — is stored only on your side.

## Server (VPS)

| | Minimum | Comfortable |
|---|---|---|
| OS | Ubuntu 22.04+ or Debian 12+ | Ubuntu 24.04 |
| Memory | 2 GB | 4 GB |
| Disk | 10 GB | 20 GB or more — chat images take up space |
| Network | public IPv4 | |

::: tip Server with 1 GB of memory
It will run, but the build may not fit in memory. The installer notices this and offers to turn on a 2 GB swap file — say yes.
:::

You don't need to install Docker, certbot, git or anything else beforehand — the script does it.

## Address: domain or IP

Members will open the server at an `https://…` address. There are two options:

- **By domain**, for example `chat.example.com`. You buy the domain separately and create an A record pointing to the server's IP in the panel where you bought it. The address looks nice and is easy to remember.
- **By IP address**, for example `https://203.0.113.10`. Nothing to buy, and the certificate for the IP is issued automatically. It's the easier way to start, and you can move to a domain later (see [Address and certificate](/en/server/certificates)).

## Ports

If your hosting provider has a firewall in its control panel (Firewall, Security groups), open the inbound ports **before installing** — otherwise the certificate won't be issued and voice won't work.

| Port | Protocol | Purpose |
|---|---|---|
| 80, 443 | TCP | website and certificate issuance |
| 3478 | UDP + TCP | voice (TURN/STUN) |
| 5349 | TCP | voice over TLS |
| 40000–40100 | UDP + TCP | voice |
| 50000–50100 | UDP | voice (relay) |

More in [Ports and firewall](/en/server/ports).

## Next

[Connect to the server →](/en/start/ssh)
