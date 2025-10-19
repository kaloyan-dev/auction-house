import { useContext } from "react";
import AuctionsContext from "@/contexts/AuctionsContext";

const LoadMoreButton = () => {
  const { itemCount, setItemCount, filteredItems } =
    useContext(AuctionsContext);

  if (itemCount >= filteredItems.length) {
    return null;
  }

  return (
    <button
      className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-lg w-full"
      onClick={() => setItemCount((prev) => prev + 4)}
    >
      Load More Items
    </button>
  );
};

export default LoadMoreButton;
