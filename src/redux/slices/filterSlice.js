import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: {
    brand: '',
    price: '',
    mileage: '',
  },
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      const { brand, price, mileage } = action.payload;
      state.brand = brand;
      state.price = price;
      state.mileage = mileage;
    },
    filterByName(state, action) {},
  },
});
export const { changeFilter, filterByName } = slice.actions;
// Редюсер слайсу
export const filterReducer = slice.reducer;
