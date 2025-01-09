import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {


  /*
  const rule1 = await prisma.rule.upsert({
    where: { name: 'No screaming in discussions' },
    update: {},
    create: {
      name: 'No screaming in discussions',
      description: "It's not nice to scream at people. Please don't do it.",
    },
  });

  const rule2 = await prisma.rule.upsert({
    where: { name: 'No interrupting in discussions' },
    update: {},
    create: {
      name: 'No interrupting in discussions',
      description: "It's not nice to interrupt people. Please don't do it.",
    },
  });
  
  console.log({ rule1, rule2 });
  */
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
