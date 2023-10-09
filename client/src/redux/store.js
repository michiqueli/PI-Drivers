import { configureStore } from "@reduxjs/toolkit";
import driversHandler from "./sliceDrivers";
import teamsHandler from "./sliceTeams"

export const store = configureStore({
  reducer: {
    drivers: driversHandler,
    teams: teamsHandler
  },
});