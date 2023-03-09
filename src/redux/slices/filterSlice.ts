import { createSlice } from "@reduxjs/toolkit";

type Sort = {
  name: string;
  sortProperty: "rate" | "title" | "price";
};
interface FilterSliceState {
  categoryId: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sort: {
    name: "популярности",
    sortProperty: "rate"
  }
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    }
  }
});
export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
