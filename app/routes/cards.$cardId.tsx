import { useParams } from "@remix-run/react";

export default function CardDetailsPage() {
  const params = useParams();
  return <h1>Card details page: #{params.cardId}</h1>;
}
