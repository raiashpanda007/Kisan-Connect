import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userStatus: false,
    user: null,
}
const  userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.userStatus = true;
            state.user = action.payload;
        },
        setSignOutState: (state) => {
            state.userStatus = false;
            state.user = null;
        }
    }
});
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export default userSlice.reducer;