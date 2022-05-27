import { caseInsensitiveField, id, prisma } from "../src/prisma";

await prisma.test.createMany({
  data: {
    id,
    caseInsensitiveField,
  },
});
