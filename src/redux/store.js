import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { carsReducer } from './slices/carsSlice';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite']
  }
  const carsPersistedReducer = persistReducer(persistConfig, carsReducer)
export const store = configureStore({
  reducer: {
    cars: carsPersistedReducer,
    filter: filterReducer,
  },
});
export const persistor = persistStore(store);
