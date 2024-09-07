import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userStatus: false,
    user: {
        
    },
    
}
const  userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            console.log(action.payload)
            state.userStatus = true;
            state.user = {...action.payload};
        },
        setSignOutState: (state) => {
            state.userStatus = false;
            state.user = null;
        }
    }
});
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export default userSlice.reducer;