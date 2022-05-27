# Prisma + citext + findUnique issue

## Install dependencies

```sh
pnpm i
```

## Run local temporary database

> It will create a Postgres Database in port 54321

```sh
docker-compose up -d
```

## Start the script

```sh
pnpm start
```

```sh
 ~/prisma-citext-find-unique-batch-issue   main  pnpm start

> prisma-citext-find-unique-batch-issue@1.0.0 start
> pnpm reset && bob-tsm src/index.ts


> prisma-citext-find-unique-batch-issue@1.0.0 reset
> prisma migrate reset --force

Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "public" at "localhost:54321"

Applying migration `20220527190109_migration`

Database reset successful

The following migration(s) have been applied:

migrations/
  └─ 20220527190109_migration/
    └─ migration.sql

✔ Generated Prisma Client (3.14.0 | library) to ./node_modules/.pnpm/@prisma+client@3.14.0_prisma@3.14.0/node_modules/@prisma/client in 31ms

Running seed command `bob-tsm prisma/seed.ts` ...
$ node --require=bob-tsm --loader=bob-tsm --enable-source-maps prisma/seed.ts
prisma:info Starting a postgresql pool with 21 connections.
prisma:query BEGIN
prisma:query INSERT INTO "public"."Test" ("caseInsensitiveField","id") VALUES ($1,$2)
prisma:query COMMIT

🌱  The seed command has been executed.

$ node --require=bob-tsm --loader=bob-tsm --enable-source-maps src/index.ts
prisma:info Starting a postgresql pool with 21 connections.
prisma:query SELECT "public"."Test"."id", "public"."Test"."caseInsensitiveField" FROM "public"."Test" WHERE "public"."Test"."caseInsensitiveField" = $1 LIMIT $2 OFFSET $3
prisma:query SELECT "public"."Test"."id", "public"."Test"."caseInsensitiveField" FROM "public"."Test" WHERE "public"."Test"."caseInsensitiveField" = $1 LIMIT $2 OFFSET $3
prisma:query SELECT "public"."Test"."id", "public"."Test"."caseInsensitiveField" FROM "public"."Test" WHERE "public"."Test"."caseInsensitiveField" IN ($1,$2) OFFSET $3
Case insensitive field {
  findFirst: [
    {
      id: '9df0f936-51d6-4c55-8e01-5144e588a8a1',
      caseInsensitiveField: 'hello world'
    },
    {
      id: '9df0f936-51d6-4c55-8e01-5144e588a8a1',
      caseInsensitiveField: 'hello world'
    }
  ],
  findUnique: [ null, null ]
}
prisma:query SELECT "public"."Test"."id", "public"."Test"."caseInsensitiveField" FROM "public"."Test" WHERE "public"."Test"."id" = $1 LIMIT $2 OFFSET $3
prisma:query SELECT "public"."Test"."id", "public"."Test"."caseInsensitiveField" FROM "public"."Test" WHERE "public"."Test"."id" = $1 LIMIT $2 OFFSET $3
prisma:query SELECT "public"."Test"."id", "public"."Test"."caseInsensitiveField" FROM "public"."Test" WHERE "public"."Test"."id" IN ($1,$2) OFFSET $3
Normal field {
  findFirst: [
    {
      id: '9df0f936-51d6-4c55-8e01-5144e588a8a1',
      caseInsensitiveField: 'hello world'
    },
    {
      id: '9df0f936-51d6-4c55-8e01-5144e588a8a1',
      caseInsensitiveField: 'hello world'
    }
  ],
  findUnique: [
    {
      id: '9df0f936-51d6-4c55-8e01-5144e588a8a1',
      caseInsensitiveField: 'hello world'
    },
    {
      id: '9df0f936-51d6-4c55-8e01-5144e588a8a1',
      caseInsensitiveField: 'hello world'
    }
  ]
}
```
