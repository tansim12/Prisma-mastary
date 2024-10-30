import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //     data:{
  //      email:"u5@gmail.com",
  //      userName:"u5",
  //      role:UserRole.user

  //     }
  // })

  // const createProfile = await prisma.profile.create({
  //     data:{
  //         bio:"this is bio",
  //         userId:1
  //     }
  // })

  // const createCategory = await prisma.category.create({
  //     data:{
  //         name:"ai"
  //     }
  // })

  const cratePost = await prisma.post.create({
    data:{
        title:"title1",
        content:"content1",
        authorId:1,
        postCategory: {
            create:{
                categoryId:1
            }
        }
    },
    include:{
        postCategory:true
    }
  })
  console.log(cratePost);
};

// main();
