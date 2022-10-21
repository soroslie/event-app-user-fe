import { configureStore } from '@reduxjs/toolkit';
import logger from './middlewares/logger';
import { apiSlice } from './slices/apiSlice';
import { profileSlice } from './slices/profileSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    profile: profileSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(apiSlice.middleware).concat(logger),
});

export default store;
