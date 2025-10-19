import ItemList from "@/components/ItemList";
import { fetchItems } from "@/hooks/useItems";

export default async function Home() {
  const items = await fetchItems();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl mb-2">Welcome to Auction House™</h1>
      <p className="text-gray-400">
        Your one-stop platform for buying and selling auction items.
      </p>

      <ItemList items={items} />
    </div>
  );
}
