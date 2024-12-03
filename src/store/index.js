import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slice/productSlice';
import categoriesSlice from './slice/categoriesSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    categories:categoriesSlice,
  },
});
