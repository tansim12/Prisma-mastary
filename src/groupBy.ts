import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const groupByFn = await prisma.post.groupBy({
  //   by: ["publish"],
  //   _count:{
  //     title:true
  //   }

  // });
  const groupByFn = await prisma.post.groupBy({
    by: ["authorId"],
    
    _count: {
      title: true,
    },
    orderBy: {
      authorId: "desc",
    },
    having: {
      authorId: {
        gt: 5,
      },
    },
  });

  console.log(groupByFn);
};

main();
