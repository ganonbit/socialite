# Migration `20201107004801-migration`

This migration has been generated by hyliancoder at 11/6/2020, 5:48:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('USER', 'MODERATOR', 'SUPER_MODERATOR', 'ADMIN')

CREATE TYPE "public"."Social" AS ENUM ('FACEBOOK', 'TWITTER', 'DEVTO', 'LINKEDIN', 'YOUTUBE', 'PERSONAL', 'OTHER')

CREATE TYPE "public"."UserState" AS ENUM ('UNVERIFIED', 'VERIFIED', 'SOFT_BAN', 'PERMA_BAN', 'DISABLED')

CREATE TYPE "public"."UserStatus" AS ENUM ('OFFLINE', 'ONLINE', 'HIDDEN', 'OTHER')

CREATE TYPE "public"."ContentState" AS ENUM ('UNPUBLISHED', 'PUBLISHED', 'DRAFT', 'FLAGGED', 'DISABLED', 'DELETED')

CREATE TABLE "public"."User" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"email" text   NOT NULL ,
"username" text   NOT NULL ,
"firstName" text   NOT NULL ,
"lastName" text   NOT NULL ,
"birthday" timestamp(3)   ,
"bio" text   ,
"image" text   ,
"status" "UserStatus"  NOT NULL DEFAULT E'OFFLINE',
"state" "UserState"  NOT NULL DEFAULT E'UNVERIFIED',
"role" "Role"  NOT NULL DEFAULT E'USER',
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"state" "ContentState"  NOT NULL DEFAULT E'UNPUBLISHED',
"title" text   NOT NULL ,
"content" text   NOT NULL ,
"image" text   ,
"url" text   NOT NULL ,
"authorId" text   ,
"metadata" jsonb   NOT NULL ,
"isFeatured" boolean   NOT NULL DEFAULT false,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Comment" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"state" "ContentState"  NOT NULL DEFAULT E'UNPUBLISHED',
"content" text   NOT NULL ,
"sentBy" text   ,
"post" integer   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Message" (
"id" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"state" "ContentState"  NOT NULL DEFAULT E'UNPUBLISHED',
"content" text   NOT NULL ,
"sentBy" text   ,
"channel" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Channel" (
"id" text   NOT NULL ,
"title" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."SocialHandle" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   NOT NULL ,
"username" text   NOT NULL ,
"provider" "Social"[]  ,
"userId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."_ChannelToUser" (
"A" text   NOT NULL ,
"B" text   NOT NULL 
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

CREATE UNIQUE INDEX "User.username_unique" ON "public"."User"("username")

CREATE UNIQUE INDEX "_ChannelToUser_AB_unique" ON "public"."_ChannelToUser"("A", "B")

CREATE INDEX "_ChannelToUser_B_index" ON "public"."_ChannelToUser"("B")

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY ("sentBy")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Comment" ADD FOREIGN KEY ("post")REFERENCES "public"."Post"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Message" ADD FOREIGN KEY ("sentBy")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Message" ADD FOREIGN KEY ("channel")REFERENCES "public"."Channel"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."SocialHandle" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."_ChannelToUser" ADD FOREIGN KEY ("A")REFERENCES "public"."Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."_ChannelToUser" ADD FOREIGN KEY ("B")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201104115325-added-title-to-channel-model..20201107004801-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -38,8 +38,15 @@
   PERMA_BAN
   DISABLED
 }
+enum UserStatus {
+  OFFLINE
+  ONLINE
+  HIDDEN
+  OTHER
+}
+
 enum ContentState {
   UNPUBLISHED
   PUBLISHED
   DRAFT
@@ -47,15 +54,8 @@
   DISABLED
   DELETED
 }
-enum UserStatus {
-  OFFLINE
-  ONLINE
-  HIDDEN
-  OTHER
-}
-
 //Models
 model User {
   id            String         @id @default(uuid())
   createdAt     DateTime       @default(now())
@@ -76,19 +76,21 @@
   comments      Comment[]
 }
 model Post {
-  id        Int          @id @default(autoincrement())
-  createdAt DateTime     @default(now())
-  updatedAt DateTime     @updatedAt
-  state     ContentState @default(UNPUBLISHED)
-  title     String
-  content   String
-  image     String?
-  url       String
-  author    User?        @relation(fields: [authorId], references: [id])
-  authorId  String?
-  comments  Comment[]
+  id         Int          @id @default(autoincrement())
+  createdAt  DateTime     @default(now())
+  updatedAt  DateTime     @updatedAt
+  state      ContentState @default(UNPUBLISHED)
+  title      String
+  content    String
+  image      String?
+  url        String
+  author     User?        @relation(fields: [authorId], references: [id])
+  authorId   String?
+  metadata   Json
+  isFeatured Boolean      @default(false)
+  comments   Comment[]
 }
 model Comment {
   id        String       @id @default(uuid())
```

