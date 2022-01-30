const { createSlice, configureStore } = require("@reduxjs/toolkit");

const productSlice = createSlice({
  name: "product",
  initialState: { productInfo: [] },
  reducers: {
    fetchInfo(state, action) {
      state.productInfo = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { productInfo: productSlice.reducer },
});

export const productActions = productSlice.actions;
export default store;
