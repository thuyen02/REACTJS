import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10,
    },
    reducers: {
        increase: (state, action) => {
            console.log('state', state.count);
            console.log('action', action);
            state.count+= action.payload;
        },
        inncrease: (state, action) => {
           
            state.count--;
        }
    },
});

const couterReducer = counterSlice.reducer;
export const {increase } = counterSlice.actions
export const {inncrease } = counterSlice.actions
export default couterReducer;