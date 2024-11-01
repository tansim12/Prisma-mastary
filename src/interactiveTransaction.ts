import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const postCount = await transactionClient.post.count();
    const getAllPost = await transactionClient.post.findMany();
    const userUpdate = await transactionClient.user.update({
      where: {
        id: 28,
      },
      data: {
        age: 22,
      },
    });

    return {
      postCount,
      getAllPost,
      userUpdate
    }
  });
  console.log(result);
  
};

// main();
