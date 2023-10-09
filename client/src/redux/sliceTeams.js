import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    teams: [],
}
export const teamsHandler = createSlice({
name: "teamsState",
initialState,
reducers: {
    setTeams:(state, action) => {
        state.teams = action.payload;
    },
}
});

export const getTeams = (state) => 
    state.teams.teams;
export const {
    setTeams,
    
} = teamsHandler.actions;

export default teamsHandler.reducer;