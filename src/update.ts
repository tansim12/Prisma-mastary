import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const updateOneDB = await prisma.post.update({
  //     where:{
  //         id:421
  //     },
  //     data:{
  //         authorName:"tansim ahmed tashdid"
  //     }
  //   })
  //   console.log(updateOneDB);

  // update many
  const updateManyDB = await prisma.post.updateMany({
    where: {
      authorName: "tashdid",
    },
    data: {
      publish: true,
    },
  });
  console.log(updateManyDB);

    // update by upsert
    const updateByUpsert = await prisma.post.upsert({
        where: {
          id: 425,
        },
        update: {
          authorName: "change author",
        },
        create: {
          title: "Update supsert title",
          contant: "kjfkjdkfj",
        },
      });
  
};

main();
