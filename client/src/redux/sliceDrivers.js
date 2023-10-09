import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    modDrivers: [],
    drivers: [],
}
export const driversHandler = createSlice({
name: "driversState",
initialState,
reducers: {
    setDrivers:(state, action) => {
        state.drivers = action.payload;
    },
    setModDrivers: (state, action) => {
        state.modDrivers = action.payload;
    },
}
});

export const getDrivers = (state) => 
    state.drivers.drivers;
export const getModDrivers = (state) => 
    state.drivers.modDrivers;

export const {
    setDrivers,
    setModDrivers,
} = driversHandler.actions;

export default driversHandler.reducer;

