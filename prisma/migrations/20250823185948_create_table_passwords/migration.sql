-- CreateTable
CREATE TABLE "public"."passwords" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "passwords_pkey" PRIMARY KEY ("id")
);
