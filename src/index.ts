import { PrismaClient, UserRole } from "@prisma/client";


const prisma = new PrismaClient();

const main = async () => {
  const aggregateFn = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
    
  });

  // find number of record 
  const countRecordByFields = await prisma.user.count()
  console.log(aggregateFn);
  
};

main();
