# Image storage

Members attach images to messages (PNG, JPEG, WebP, up to 4 at a time). They are stored on the server's disk.

## How the quota works

- You set the quota — how much space to give images — during installation; the default is **5 GiB**.
- When **80%** of the quota is used, the oldest images are deleted automatically until usage drops to 70%. Old messages show a note in their place saying the image was deleted.
- If less than 1 GiB of free disk space remains, new images aren't accepted, even if the quota isn't full — so a full disk doesn't bring the server down.

## Change the quota

```bash
hooba uploads-quota 10     # 10 GiB
hooba uploads-quota 0.5    # 512 MiB
hooba uploads-quota        # asks, and shows how much is free
```

The minimum is 0.1 GiB. The server restarts briefly. If you reduce the quota, the excess old images are deleted at the next check.

## How much disk space is left

```bash
hooba status
df -h /
```

If the disk is running out: reduce the quota, delete old backups from `/opt/hooba/backups` (after downloading the ones you need), or clear out old Docker images:

```bash
docker image prune -f
```
