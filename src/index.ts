import { caseInsensitiveField, id, prisma } from "./prisma";

const list = [0, 0] as const;

console.log("Case insensitive field", {
  findFirst: await Promise.all(
    list.map(() =>
      prisma.test.findFirst({
        where: { caseInsensitiveField: caseInsensitiveField.toUpperCase() },
      })
    )
  ),
  findUnique: await Promise.all(
    list.map(() =>
      prisma.test.findUnique({
        where: { caseInsensitiveField: caseInsensitiveField.toUpperCase() },
      })
    )
  ),
});

console.log("Normal field", {
  findFirst: await Promise.all(list.map(() => prisma.test.findFirst({ where: { id } }))),
  findUnique: await Promise.all(list.map(() => prisma.test.findUnique({ where: { id } }))),
});
