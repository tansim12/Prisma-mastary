import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   find many
  const allPost = await prisma.post.findMany();
  //   console.log(allPost);

  //   find first one and throw error
  //   const getOnePostByFindFirst = await prisma.post.findFirstOrThrow({
  //     where: {
  //       id: 10,
  //       publish:false
  //     },
  //   });
  //   console.log(getOnePostByFindFirst);

  const getOnePostByFindUniq = await prisma.post.findUniqueOrThrow({
    where: {
      id: 5,
    },
    select: {
      title: true,
    },
  });

  console.log(getOnePostByFindUniq);
};

main();
