import { useParams } from "@remix-run/react";

export default function DeckDetailsPage() {
  const params = useParams();
  return <h1>Deck details page: #{params.deckId}</h1>;
}
