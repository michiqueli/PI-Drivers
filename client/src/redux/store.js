import { configureStore } from "@reduxjs/toolkit";
import driversHandler from "./sliceDrivers";

export const store = configureStore({
  reducer: {

    drivers: driversHandler,

  },
});