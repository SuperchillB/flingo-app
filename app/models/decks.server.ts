import type { User } from '@prisma/client';
import { prisma } from '~/db.server';

export function getDeckListItems({ userId }: { userId: User['id'] }) {
  return prisma.deck.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: 'desc' },
  });
}
