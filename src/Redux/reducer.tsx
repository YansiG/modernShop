// reducer.tsx
import { createSlice } from '@reduxjs/toolkit';

interface PageState {
    currentPage: number;
}

const initialState: PageState = {
    currentPage: 1,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setCurrentPage(state, action: { payload: number }) {
            state.currentPage = action.payload;
        },
    },
});

export const rootReducer = pageSlice.reducer;
export const { setCurrentPage } = pageSlice.actions;
