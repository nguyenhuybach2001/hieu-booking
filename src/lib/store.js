import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlices";

export const makeStore = configureStore({
  reducer: combineReducers({
    search: searchReducer,
  }),
});
