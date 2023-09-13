import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    filterDriversByOrigin: [],
    filterDriversByTeams: [],
    filterDrivers: [],
    drivers: [],
}
export const driversHandler = createSlice({
name: "drivers",
initialState,
reducers: {
    setDrivers:(state, action) => {
        state.drivers = action.payload;
    },
    setFilterDrivers: (state, action) => {
        state.filterDrivers = action.payload;
    },
    setfilterDriversByOrigin: (state, action) => {
        state.filterDriversByOrigin = action.payload
    },
    setfilterDriversByTeams: (state, action) => {
        state.filterDriversByTeams = action.payload
    },
},

});

export const getDrivers = (state) => state.drivers.drivers
export const getFilterDrivers = (state) => state.drivers.filterDrivers
export const getFilterDriversByOrigin = (state) => 
    drivers.drivers.filerDriversByOrigin
export const getFilterDriversByTeams = (state) => 
    drivers.drivers.filterDriversByTeams

export const {
    setDrivers,
    setFilterDrivers,
    setfilterDriversByOrigin,
    setfilterDriversByTeams
} = driversHandler.actions;

export default driversHandler.reducer;