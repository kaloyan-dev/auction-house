import { fetchItems } from "@/hooks/useItems";
import ItemPage from "@/components/ItemPage";

export default async function ItemSingular() {
  const items = await fetchItems();

  return <ItemPage items={items} />;
}
