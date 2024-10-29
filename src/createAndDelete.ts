import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "title",
  //       contant: "content",
  //       authorName:"tashdid"
  //     },
  //   });
  //   console.log(result);\

  //   create many

    // const createMany = await prisma.post.createMany({
    //   data: [
    //     {
    //       title: "title",
    //       contant: "content",
    //       authorName: "tashdid",
    //     },
    //     {
    //       title: "title",
    //       contant: "content",
    //       authorName: "tashdid",
    //     },
    //     {
    //       title: "title",
    //       contant: "content",
    //       authorName: "tashdid",
    //     },
    //     {
    //       title: "title",
    //       contant: "content",
    //       authorName: "tashdid",
    //     },
    //   ],
    // });

  //   console.log(createMany);

//   delete many 
//   const deleteAll = await prisma.post.deleteMany({
//     where: {
//       authorName: "tashdid",
//     },
//   });
};

main();
