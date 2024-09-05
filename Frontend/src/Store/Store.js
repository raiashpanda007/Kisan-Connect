import {configureStore} from '@reduxjs/toolkit';
import user from './User.js';
const store = configureStore({
    reducer: {
        user: user
    }
});
export default store;