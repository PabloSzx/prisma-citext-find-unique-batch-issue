CREATE EXTENSION IF NOT EXISTS citext;

-- CreateTable
CREATE TABLE "Test" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "caseInsensitiveField" CITEXT NOT NULL,
    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Test_caseInsensitiveField_key" ON "Test"("caseInsensitiveField");