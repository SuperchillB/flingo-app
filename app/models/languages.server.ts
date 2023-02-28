import { prisma } from '~/db.server';

export type { Language } from '@prisma/client';

export function getAllLanguages() {
  return prisma.language.findMany();
}
