"use client";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemFilters from "@/components/ItemFilters";
import ItemList from "@/components/ItemList";
import ItemViewMode from "@/components/ItemViewMode";
import useDebounce from "@/hooks/useDebounce";
import { ItemProps } from "@/types";
import { RootState } from "@/store";

const Auctions = ({ items }: { items: ItemProps[] }) => {
  const filter = useSelector((state: RootState) => state.filter);

  const [filteredItems, setFilteredItems] = useState<ItemProps[]>(items);
  const [itemCount, setItemCount] = useState(4);

  const debouncedSearch = useDebounce(filter.search, 500);
  const debouncedMinPrice = useDebounce(filter.minPrice, 500);
  const debouncedMaxPrice = useDebounce(filter.maxPrice, 500);

  useEffect(() => {
    let updatedItems = items;

    if (debouncedSearch) {
      updatedItems = updatedItems.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes((debouncedSearch as string).toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes((debouncedSearch as string).toLowerCase())
      );
    }

    if (filter.category) {
      updatedItems = updatedItems.filter(
        (item) => item.category === filter.category
      );
    }

    if (filter.status) {
      updatedItems = updatedItems.filter(
        (item) => item.status === filter.status
      );
    }

    if (debouncedMinPrice) {
      updatedItems = updatedItems.filter(
        (item) => item.estimatedValue >= (debouncedMinPrice as number)
      );
    }

    if (debouncedMaxPrice !== Infinity && debouncedMaxPrice !== 0) {
      updatedItems = updatedItems.filter(
        (item) => item.estimatedValue <= (debouncedMaxPrice as number)
      );
    }

    setFilteredItems(updatedItems);
    setItemCount(4);
  }, [
    debouncedSearch,
    debouncedMinPrice,
    debouncedMaxPrice,
    filter.category,
    filter.status,
    items,
  ]);

  return (
    <>
      <ItemFilters items={items} />
      <ItemViewMode
        currentItems={itemCount}
        totalItems={filteredItems.length}
      />

      <ItemList items={filteredItems} count={itemCount} />

      {itemCount < filteredItems.length && (
        <button
          className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg w-full"
          onClick={() => setItemCount((prev) => prev + 4)}
        >
          Load More Items
        </button>
      )}
    </>
  );
};

export default Auctions;
