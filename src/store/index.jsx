const { createSlice, configureStore } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: {
    productInfo: [],
    isHide: { productNumber: undefined, isHide: true },
    selectedItem: "",
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
