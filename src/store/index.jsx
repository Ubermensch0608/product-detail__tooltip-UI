const { createSlice, configureStore } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    productInfo: [],
    isHide: null,
    selectedItem: null,
  },
  reducers: {
    fetchInfo(state, action) {
      state.productInfo = action.payload;
    },
    hide(state, action) {
      state.isHide = action.payload;
    },
    select(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { productInfo: productSlice.reducer },
});

export const productActions = productSlice.actions;
export default store;
