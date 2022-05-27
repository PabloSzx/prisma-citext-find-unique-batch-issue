import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ["query", "info", "error", "warn"],
});

export const id = "9df0f936-51d6-4c55-8e01-5144e588a8a1";

export const caseInsensitiveField = "hello world";
