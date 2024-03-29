import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "all",
};

let id = 1;
const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { user, phoneNumber } = action.payload;
      state.items.push({ id: id++, user, phoneNumber, favorite: false });
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      state.items = state.items.filter((user) => user.id !== userId);
    },
    addToFavorite: (state, action) => {
      const userId = action.payload;
      const user = state.items.find((user) => user.id === userId);
      user.favorite = !user.favorite;
    },
    setFavoriteUser: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const counterReducer = counterSlice.reducer;
export const {
  addUser,
  removeUser,
  addToFavorite,
  setFavoriteUser,
} = counterSlice.actions;
export default counterReducer;
