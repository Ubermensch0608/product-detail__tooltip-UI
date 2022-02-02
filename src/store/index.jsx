const { createSlice, configureStore } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    productInfo: [],
    selectedRoomItem: null,
    selectedSlideItem: null,
    test: [],
  },
  reducers: {
    fetchInfo(state, action) {
      state.productInfo = action.payload;
    },
    room(state, action) {
      state.selectedRoomItem = action.payload;
    },
    slide(state, action) {
      state.selectedSlideItem = action.payload;
    },
    test(state, action) {
      state.test = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { productInfo: productSlice.reducer },
});

export const productActions = productSlice.actions;
export default store;
