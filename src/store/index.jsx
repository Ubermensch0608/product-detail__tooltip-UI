const { createSlice, configureStore } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    productInfo: [],
    isHide: { productNumber: null, isHide: true },
  },
  reducers: {
    fetchInfo(state, action) {
      state.productInfo = action.payload;
    },
    hide(state, action) {
      state.isHide = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { productInfo: productSlice.reducer },
});

export const productActions = productSlice.actions;
export default store;
