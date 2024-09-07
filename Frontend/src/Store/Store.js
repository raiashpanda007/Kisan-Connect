import { configureStore } from '@reduxjs/toolkit';
import user from './User.js'; // Assuming you have a user slice
import TotalBids from './TotalBIds.js'; // Your TotalBids slice

const store = configureStore({
  reducer: {
    user: user,
    TotalBids: TotalBids
  }
});

export default store;
