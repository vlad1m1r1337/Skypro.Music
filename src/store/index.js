import { configureStore, createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: 'id',
    initialState: {
        value: -1
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        chose: (state, action) => {
            state.value = action.payload.id
        }
    }
})

export const store = configureStore({
    reducer: idSlice.reducer
})

export const { increment, decrement, chose } = idSlice.actions;
