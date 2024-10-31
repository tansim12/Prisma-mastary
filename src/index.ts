import { PrismaClient, UserRole } from "@prisma/client";
import { emit } from "process";
import { inflate } from "zlib";

const prisma = new PrismaClient({
  log:[
   {
    emit:"event",
    level:"query"
   }
  ]
});
prisma.$on("query",(e)=>{
  console.log(e);
  
})

const main = async () => {
  const filteringByAnd = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "sub",
          },
        },
        {
          publish: true,
        },
      ],
    },
    include: {
      postCategory: {
        include:{
          category:true
        }
      },
    },
  });

  // const filteringByOr = await prisma.post.findMany({

  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: "sub",
  //         },
  //       },
  //       {
  //         publish: false,
  //       },
  //     ],
  //   },
  // });
  // console.dir(filteringByAnd, { depth: inflate });
};

main();
