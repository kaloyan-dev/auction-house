import { createContext } from "react";
import { ItemProps } from "@/types";

const AuctionsContext = createContext<{
  filteredItems: ItemProps[];
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
}>({
  filteredItems: [],
  itemCount: 4,
  setItemCount: () => {},
});

export default AuctionsContext;
