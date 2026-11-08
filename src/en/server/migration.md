# Moving to another server

You can change hosting providers or plans without losing data: members, messages and images move along with the server's passwords.

## 1. On the old server — make a backup

```bash
hooba backup
```

## 2. On your computer — download it

```bash
scp -r root@<OLD-IP>:/opt/hooba/backups .
```

The `backups` folder will contain the database backup, the image archive and the file `env-<date>.copy` — that's your `.env.prod`.

## 3. Point the address to the new server

- **Domain**: in the panel where you bought the domain, change the A record to the new server's IP. Wait for the change to spread (from a few minutes to a couple of hours).
- **IP**: the address changes with the server. Desktop app users will have to enter the new address.

## 4. On the new server — prepare Hooba with the old passwords

[Connect](/en/start/ssh) to the new server and download Hooba **without running the installation**:

```bash
apt update && apt install -y git
git clone https://github.com/blackpiest/hooba-app.git /opt/hooba
mkdir -p /opt/hooba/backups
```

From your computer, upload the backups to the new server:

```bash
scp backups/* root@<NEW-IP>:/opt/hooba/backups/
```

Back on the new server, put the password file in place (use your own date):

```bash
cp /opt/hooba/backups/env-<date>.copy /opt/hooba/infra/docker/.env.prod
chmod 600 /opt/hooba/infra/docker/.env.prod
```

## 5. Install and restore

```bash
cd /opt/hooba && ./install.sh install
```

The script says Hooba is already installed and asks whether to reinstall — answer `y`. It takes the passwords from the file and asks for the address and certificate again.

When the installation finishes:

```bash
hooba restore
```

Agree to restore the images too. Done — open the site and check that everything is in place.

## 6. The old server

Make sure everything works, and only then delete the old server.
