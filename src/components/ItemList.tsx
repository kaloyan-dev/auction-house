"use client";

import { useState, useEffect } from "react";
import { Grid2x2, List } from "lucide-react";
import Item from "@/components/Item";
import useDebounce from "@/hooks/useDebounce";
import { ItemProps } from "@/types";
import { getUniqueItemTerms, uppercaseFirstLetter } from "@/utils";

const ItemList = ({ items }: { items: ItemProps[] }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filteredItems, setFilteredItems] = useState<ItemProps[]>(items);
  const [itemCount, setItemCount] = useState(4);
  const [filter, setFilter] = useState({
    search: "",
    category: "",
    status: "",
    minPrice: 0,
    maxPrice: Infinity,
  });
  const debouncedSearch = useDebounce(filter.search, 500);
  const debouncedMinPrice = useDebounce(filter.minPrice, 500);
  const debouncedMaxPrice = useDebounce(filter.maxPrice, 500);

  useEffect(() => {
    let updatedItems = items;

    if (debouncedSearch !== "") {
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

    if (debouncedMinPrice !== 0) {
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

  const allCategories = getUniqueItemTerms(items, "category");
  const allStatuses = getUniqueItemTerms(items, "status");

  const inputClassName =
    "py-2 px-4 rounded bg-gray-700 border border-gray-600 text-white w-full focus:outline-none";
  const selectClassName = inputClassName.replace("p-2", "px-2 py-2.5");
  const labelClassName = "mt-2 lg:mt-0 mb-2";

  let listClassName =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";

  if (viewMode === "list") {
    listClassName = "flex flex-col gap-4";
  }

  const getButtonClassName = (isActive: boolean) => {
    const activeClass = isActive ? "bg-gray-600 gap-2" : "bg-transparent";

    return `px-3 py-2 text-white flex items-center ${activeClass}`;
  };

  if (items.length === 0) {
    return <p className="text-gray-300 mt-6">No items found.</p>;
  }

  return (
    <>
      <div className="lg:flex items-center justify-between bg-gray-800 p-4 rounded-lg mt-6 gap-4">
        <div className="w-full">
          <p className={labelClassName}>
            <label htmlFor="search">Search</label>
          </p>
          <input
            id="search"
            type="text"
            className={inputClassName}
            placeholder="Search items..."
            onChange={(e) => {
              setFilter((prev) => ({ ...prev, search: e.target.value.trim() }));
            }}
          />
        </div>

        <div className="w-full">
          <p className={labelClassName}>
            <label htmlFor="search">Category</label>
          </p>
          <select
            id="category"
            className={selectClassName}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, category: e.target.value }))
            }
          >
            <option value="">All Categories</option>
            {allCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <p className={labelClassName}>
            <label htmlFor="status">Status</label>
          </p>
          <select
            id="status"
            className={selectClassName}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <option value="">All Statuses</option>
            {allStatuses.map((status) => (
              <option key={status} value={status}>
                {uppercaseFirstLetter(status)}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <p className={labelClassName}>
            <label htmlFor="minPrice">Min Price</label>
          </p>
          <input
            id="minPrice"
            type="number"
            className={inputClassName}
            placeholder="Min Price"
            min={0}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                minPrice: e.target.value ? parseFloat(e.target.value) : 0,
              }))
            }
          />
        </div>

        <div className="w-full">
          <p className={labelClassName}>
            <label htmlFor="maxPrice">Max Price</label>
          </p>
          <input
            id="maxPrice"
            type="number"
            className={inputClassName}
            placeholder="Max Price"
            min={0}
            onChange={(e) =>
              setFilter((prev) => ({
                ...prev,
                maxPrice: e.target.value
                  ? parseFloat(e.target.value)
                  : Infinity,
              }))
            }
          />
        </div>
      </div>

      <div className="my-4 flex justify-between items-center">
        <p className="text-sm text-gray-300">
          Showing {itemCount} of {filteredItems.length} items
        </p>

        <div className="flex items-center border border-gray-600 overflow-hidden rounded-lg">
          <button
            onClick={() => setViewMode("grid")}
            className={getButtonClassName(viewMode === "grid")}
          >
            <Grid2x2 className="size-4" />
            {viewMode === "grid" && <span className="text-sm">Grid</span>}
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={getButtonClassName(viewMode === "list")}
          >
            <List className="size-4" />
            {viewMode === "list" && <span className="text-sm">List</span>}
          </button>
        </div>
      </div>

      <div className={listClassName}>
        {filteredItems.slice(0, itemCount).map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>

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

export default ItemList;
