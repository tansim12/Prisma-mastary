import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // offset base pagination
  const paginationBYOffset = await prisma.post.findMany({
    take: 2,
    skip: 0,
  });
  // cursor base pagination
  const paginationByCursor = await prisma.post.findMany({
    take: 2,
    skip: 0,
    cursor: {
      id: 429,
    },
  });

  // sorting
  const sorting = await prisma.post.findMany({
    take: 10,
    skip: 0,
    orderBy: {
      id: "desc",
    //   id: "asc",
    },
  });
  console.log(sorting);
};

main();
