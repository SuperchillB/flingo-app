import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import allLanguages from '~/data/languages.json';

const prisma = new PrismaClient();

async function seed() {
  const email = 'rachel@remix.run';

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  await Promise.all(
    allLanguages.map((lang) => {
      const data = { langId: lang.id, name: lang.name, nativeName: lang.nativeName };
      return prisma.language.create({ data });
    }),
  );

  const hashedPassword = await bcrypt.hash('racheliscool', 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      languages: {
        connect: {
          langId: 'fr',
        },
      },
    },
  });

  await prisma.note.create({
    data: {
      title: 'My first note',
      body: 'Hello, world!',
      userId: user.id,
    },
  });

  await prisma.note.create({
    data: {
      title: 'My second note',
      body: 'Hello, world!',
      userId: user.id,
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
