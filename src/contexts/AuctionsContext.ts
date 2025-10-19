import { createContext } from "react";
import { ItemProps } from "@/types";

const AuctionsContext = createContext<{
  filteredItems: ItemProps[];
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
  allCategories: string[];
  allStatuses: string[];
}>({
  filteredItems: [],
  itemCount: 4,
  setItemCount: () => {},
  allCategories: [],
  allStatuses: [],
});

export default AuctionsContext;
