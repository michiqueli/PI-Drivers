import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    filterDriversByOrigin: [],
    filterDriversByTeams: [],
    searchedDrivers: [],
    drivers: [],
    sortedDriverByName: [],
    sortedDriverByDob: [],
}
export const driversHandler = createSlice({
name: "driversState",
initialState,
reducers: {
    setDrivers:(state, action) => {
        state.drivers = action.payload;
    },
    setSearchedDrivers: (state, action) => {
        state.searchedDrivers = action.payload;
    },
    setFilterDriversByOrigin: (state, action) => {
        state.filterDriversByOrigin = action.payload
    },
    setFilterDriversByTeams: (state, action) => {
        state.filterDriversByTeams = action.payload
    },
    setSortedDriverByName:(state, action) => {
        state.sortedDriverByName = action.payload
    },
    setSortedDriverByDob:(state, action) => {
        state.sortedDriverByDob = action.payload
    },
}
});

export const getDrivers = (state) => 
    state.drivers.drivers;
export const getSeaarchedDrivers = (state) => 
    state.drivers.searchedDrivers;
export const getFilterDriversByOrigin = (state) => 
    state.drivers.filterDriversByOrigin;
export const getFilterDriversByTeams = (state) => 
    state.drivers.filterDriversByTeams;
export const getSortedDriverByName = (state) =>
    state.drivers.sortedDriverByName;
export const getSortedDriverByDob = (state) => 
    state.drivers.sortedDriverByDob;

export const {
    setDrivers,
    setSearchedDrivers,
    setFilterDriversByOrigin,
    setFilterDriversByTeams,
    setSortedDriverByName,
    setSortedDriverByDob
} = driversHandler.actions;

export default driversHandler.reducer;