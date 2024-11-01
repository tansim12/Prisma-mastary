import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = prisma.user.create({
    data: {
      email: "tansim4@gmail.com",
      userName: "t4",
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      age: 1200,
    },
  });

  const x = await prisma.$transaction([createUser, updateUser]);

  console.log(x);
};

// main();
