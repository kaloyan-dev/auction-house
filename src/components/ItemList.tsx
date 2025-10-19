import Item from "@/components/Item";
import { ItemListProps } from "@/types";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const ItemList = ({ count, items }: ItemListProps) => {
  const viewMode = useSelector((state: RootState) => state.viewMode.mode);

  let listClassName =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

  if (viewMode === "list") {
    listClassName = "flex flex-col gap-4";
  }

  if (items.length === 0) {
    return <p className="text-gray-300 mt-6">No items found.</p>;
  }

  return (
    <div className={listClassName}>
      {items.slice(0, count).map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ItemList;
