import { createSlice } from "@reduxjs/toolkit";

// Function to load data from localStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('totalBids');
        if (serializedState === null) {
            return { allBids: [] };  // No saved state, return initial state
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from localStorage", e);
        return { allBids: [] };  // Return default state on error
    }
};

// Function to save data to localStorage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('totalBids', serializedState);
    } catch (e) {
        console.warn("Could not save state to localStorage", e);
    }
};

// Initial state either from localStorage or a fresh start
const initialState = loadStateFromLocalStorage();

const TotalBids = createSlice({
    name: 'TotalBids',
    initialState,
    reducers: {
        setAllBids(state, action) {
            if (Array.isArray(action.payload)) {
                state.allBids.push(...action.payload); // If it's an array, spread the array
            } else {
                state.allBids.push(action.payload); // If it's an object, just push it
            }
            saveStateToLocalStorage(state);  // Save to localStorage after update
        }
    }
});


export const { setAllBids } = TotalBids.actions;
export default TotalBids.reducer;
