import Auctions from "@/components/Auctions";
import { fetchItems } from "@/hooks/useItems";

export default async function Home() {
  const items = await fetchItems();

  return <Auctions items={items} />;
}
