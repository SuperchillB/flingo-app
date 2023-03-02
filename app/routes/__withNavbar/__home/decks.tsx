import type { LoaderArgs } from '@remix-run/server-runtime';
import { json } from '@remix-run/server-runtime';
import { getDeckListItems } from '~/models/decks.server';
import { requireUserId } from '~/session.server';

export async function loader({ request }: LoaderArgs) {
  const userId = await requireUserId(request);
  const deckListItems = await getDeckListItems({ userId });
  return json({ deckListItems });
}

export default function DecksPage() {
  return <h3>Decks page inside home</h3>;
}
