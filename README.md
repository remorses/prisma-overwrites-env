## Repro for

Prisma is loading `DATABASE_URL` from .env file even if `DATABASE_URL` is already in the shell environment

Steps to reproduce

```sh
npm i
prisma generate
npm run repro
```
