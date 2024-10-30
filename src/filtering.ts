import { PrismaClient, UserRole } from "@prisma/client";
import { inflate } from "zlib";

const prisma = new PrismaClient();

const main = async () => {
//   const filteringByAnd = await prisma.post.findMany({
//     // where: {
//     //   title: {
//     //     contains: "title",
//     //   },
//     //   publish: true,
//     // },
//     where: {
//       AND: [
//         {
//           title: {
//             contains: "sub",
//           },
//         },
//         {
//           publish: true,
//         },
//       ],
//     },
//   });
  const filteringByOr = await prisma.post.findMany({
    
    where: {
      OR: [
        {
          title: {
            contains: "sub",
          },
        },
        {
          publish: false,
        },
      ],
    },
  });
  console.log(filteringByOr);
};

main();
