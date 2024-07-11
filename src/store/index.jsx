import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/UserSlice'; // Adjust the import to match how UserSlice exports the reducer

const store = configureStore({
  reducer: {
    users: userReducer // Use userReducer as the reducer for the 'users' slice of state
  }
});

export default store;
