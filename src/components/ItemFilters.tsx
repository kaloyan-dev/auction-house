import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { ItemProps } from "@/types";
import {
  setSearch,
  setCategory,
  setStatus,
  setMinPrice,
  setMaxPrice,
  resetFilters,
} from "@/store/filterSlice";
import { getUniqueItemTerms, uppercaseFirstLetter } from "@/utils";

const ItemFilters = ({ items }: { items: ItemProps[] }) => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch<AppDispatch>();

  const allCategories = getUniqueItemTerms(items, "category");
  const allStatuses = getUniqueItemTerms(items, "status");

  const inputClassName =
    "py-2 px-4 rounded bg-gray-700 border border-gray-600 text-white w-full focus:outline-none";
  const selectClassName = inputClassName.replace("p-2", "px-2 py-2.5");
  const labelClassName = "mt-2 lg:mt-0 mb-2";

  return (
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
          value={filter.search}
          onChange={(e) => dispatch(setSearch(e.target.value.trim()))}
        />
      </div>

      <div className="w-full">
        <p className={labelClassName}>
          <label htmlFor="category">Category</label>
        </p>
        <select
          id="category"
          className={selectClassName}
          value={filter.category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
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
          value={filter.status}
          onChange={(e) => dispatch(setStatus(e.target.value))}
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
          value={filter.minPrice}
          onChange={(e) =>
            dispatch(
              setMinPrice(e.target.value ? parseFloat(e.target.value) : 0)
            )
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
          value={filter.maxPrice === Infinity ? "" : filter.maxPrice}
          onChange={(e) =>
            dispatch(
              setMaxPrice(
                e.target.value ? parseFloat(e.target.value) : Infinity
              )
            )
          }
        />
      </div>
    </div>
  );
};

export default ItemFilters;
