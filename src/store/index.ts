import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "@/store/filterSlice";
import viewModeReducer from "@/store/viewModeSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    viewMode: viewModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
