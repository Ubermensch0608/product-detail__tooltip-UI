const { createSlice, configureStore } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: { productInfo: [], isHide: true },
  reducers: {
    fetchInfo(state, action) {
      state.productInfo = action.payload;
    },
    hide(state, action) {
      state.isHide = !state.isHide;
    },
  },
});

const store = configureStore({
  reducer: { productInfo: productSlice.reducer },
});

export const productActions = productSlice.actions;
export default store;
