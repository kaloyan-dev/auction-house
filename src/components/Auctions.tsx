"use client";

import AuctionsProvider from "@/components/AuctionsProvider";
import ItemFilters from "@/components/ItemFilters";
import ItemList from "@/components/ItemList";
import ItemViewMode from "@/components/ItemViewMode";
import LoadMoreButton from "@/components/LoadMoreButton";
import { ItemProps } from "@/types";

const Auctions = ({ items }: { items: ItemProps[] }) => {
  return (
    <AuctionsProvider items={items}>
      <ItemFilters />
      <ItemViewMode />
      <ItemList />
      <LoadMoreButton />
    </AuctionsProvider>
  );
};

export default Auctions;
