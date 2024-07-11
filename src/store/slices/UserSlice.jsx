import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log("state: ", state);
      console.log("action: ", action);
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log("action: ", action.payload?.user);

      return state.filter((user) => user !== action.payload.user);
      //  state.splice(action.payload.id, 1)
    },
    deleteUsers(state) {
      return [];
    },
  },
  extraReducers(builder) {
    builder.addCase(userSlice.actions.deleteUsers, () => {
      return [];
    });
  },
});

// Export the actions
export const { addUser, removeUser, deleteUsers } = userSlice.actions;

// Log the actions to the console
console.log(userSlice);

// Export the reducer
export default userSlice.reducer;
