import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  search: string;
  category: string;
  status: string;
  minPrice: number;
  maxPrice: number;
}

const initialState: FilterState = {
  search: "",
  category: "",
  status: "",
  minPrice: 0,
  maxPrice: Infinity,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setSearch,
  setCategory,
  setStatus,
  setMinPrice,
  setMaxPrice,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
