import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ViewModeState {
  mode: "grid" | "list";
}

const initialState: ViewModeState = {
  mode: "grid",
};

export const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.mode = action.payload;
    },
  },
});

export const { setViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;
