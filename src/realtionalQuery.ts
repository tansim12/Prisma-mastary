import { PrismaClient, UserRole } from "@prisma/client";
import { inflate } from "zlib";

const prisma = new PrismaClient();

const main = async () => {
  const queryByRelations = await prisma.user.findMany({
    include: {
      post: {
        where: {
          publish: false,
        },
        include: {
          postCategory: {
            where: {
              categoryId: 3,
            },
            
          },
        },
      },
    },
    skip:0,
    take:1
  });
  console.dir(queryByRelations, { depth: inflate });
};

main();
