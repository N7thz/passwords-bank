/*
  Warnings:

  - You are about to drop the column `user_name` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."users_user_name_key";

-- AlterTable
ALTER TABLE "public"."users" DROP COLUMN "user_name";
