import { Grid2x2, List } from "lucide-react";
import { setViewMode } from "@/store/viewModeSlice";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import AuctionsContext from "@/contexts/AuctionsContext";

const ItemViewMode = () => {
  const auction = useContext(AuctionsContext);

  const dispatch = useDispatch();
  const viewMode = useSelector((state: RootState) => state.viewMode.mode);

  const getButtonClassName = (isActive: boolean) => {
    const activeClass = isActive ? "bg-gray-600 gap-2" : "bg-transparent";
    return `px-3 py-2 text-white flex items-center ${activeClass}`;
  };

  return (
    <div className="my-4 flex justify-between items-center">
      <p className="text-sm text-gray-300">
        Showing {auction.itemCount} of {auction.filteredItems.length} items
      </p>

      <div className="flex items-center border border-gray-600 overflow-hidden rounded-lg">
        <button
          onClick={() => dispatch(setViewMode("grid"))}
          className={getButtonClassName(viewMode === "grid")}
        >
          <Grid2x2 className="size-4" />
          {viewMode === "grid" && <span className="text-sm">Grid</span>}
        </button>
        <button
          onClick={() => dispatch(setViewMode("list"))}
          className={getButtonClassName(viewMode === "list")}
        >
          <List className="size-4" />
          {viewMode === "list" && <span className="text-sm">List</span>}
        </button>
      </div>
    </div>
  );
};

export default ItemViewMode;
