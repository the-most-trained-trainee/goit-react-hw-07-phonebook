import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phoneBookSliceReducer from './contact_slice.js';
import filterSliceReducer from './filter_slice';



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedContactsReducer = persistReducer(persistConfig, phoneBookSliceReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})

export const persistor = persistStore(store);