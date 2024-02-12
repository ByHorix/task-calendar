import {createSlice} from "@reduxjs/toolkit";
import {format, getMonth, getWeek, setMonth, setWeek} from "date-fns";

type LayoutState = {
    view: 'month' | 'week',
    currentDate: number
}

const initialState: LayoutState = {
    view: 'month',
    currentDate: (new Date(format(Date.now(), 'yyyy MMM d'))).getTime()
}

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setMonthToPrev: (state) => {
            state.currentDate = setMonth(state.currentDate, getMonth(state.currentDate) - 1).getTime();
        },
        setMonthToNext: (state) => {
            state.currentDate = setMonth(state.currentDate, getMonth(state.currentDate) + 1).getTime();
        },
        setWeekToPrev: (state) => {
            state.currentDate = setWeek(state.currentDate, getWeek(state.currentDate) - 1).getTime();
        },
        setWeekToNext: (state) => {
            state.currentDate = setWeek(state.currentDate, getWeek(state.currentDate) + 1).getTime();
        },
        switchView: (state, payload) => {
            state.view = payload.payload
        }
    }
});

export const {
    setMonthToPrev,
    setMonthToNext,
    setWeekToPrev,
    setWeekToNext,
    switchView
} = layoutSlice.actions;

export default layoutSlice.reducer;
