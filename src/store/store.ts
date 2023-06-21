import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './reducers/ProductSlice';
import sortReducer from './reducers/SortSlice';
import { productApi } from '../services/ProductService';
import { commentApi } from '../services/CommentService';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    sort: sortReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, commentApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
