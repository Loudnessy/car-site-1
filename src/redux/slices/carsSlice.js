import { createSlice } from '@reduxjs/toolkit';
import { getFavoriteCars, getFilteredCars, getTotalFilteredCars, loadMore } from 'api/api';
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = true;
};
const slice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    error: false,
    isLoading: false,
    page: 1,
    total: 0,
    choosenModalCar: null,
    favorite: []
  },
  extraReducers: {
    [getFavoriteCars.fulfilled](state, action) {
      state.items = action.payload;
      state.error = false;
      state.isLoading = false;
    },
    [getFavoriteCars.pending](state, action) {
      state.isLoading = true;
    },
    [getFavoriteCars.rejected]: handleRejected,
    [getFilteredCars.fulfilled](state, action) {
      const [data, total] = action.payload
      console.log(data);
      state.items = data;
      state.total = total;
      state.error = false;
      state.isLoading = false;
      state.page = 1
    },
    [getFilteredCars.pending](state, action) {
      state.isLoading = true;
    },
    [getFilteredCars.rejected]: handleRejected,

    [loadMore.fulfilled](state, action) {
      action.payload.forEach(car => state.items.push(car));
      state.total = state.total - action.payload.length;
      state.error = false;
      state.isLoading = false;
      state.page += 1
    },
    [loadMore.pending](state, action) {
      state.isLoading = true;
    },
    [loadMore.rejected]: handleRejected,

  //   [getTotalFilteredCars.fulfilled](state, action) {
  //     state.total = action.payload;
  //     state.error = false;
  //     state.isLoading = false;
  //   },
  //   [getTotalFilteredCars.pending](state, action) {
  //     state.isLoading = true;
  //   },
  //   [getTotalFilteredCars.rejected]: handleRejected,
  },
  reducers: {
    changeChoosenCar(state, action) {
      const finded = state.items.find(
        car => car.id.toString() === action.payload
      );
      state.choosenModalCar = finded || null;
    },
    addFavoriteCar(state, action){
      state.favorite.push(action.payload)
    },
    deleteFavoriteCar(state, action){
      state.favorite = state.favorite.filter(fav => fav !== action.payload);
    }
  },
});

export const carsReducer = slice.reducer;
export const { changeChoosenCar, addFavoriteCar, deleteFavoriteCar } = slice.actions;
