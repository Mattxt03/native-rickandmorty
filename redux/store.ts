import { configureStore } from "@reduxjs/toolkit";
import { rickAndMortyApi } from "./ramApi";
/* import { themeReducer } from "./themeSlice"; */
import { favReducer } from "./favoritesSlice"

export const store = configureStore({
  reducer: {
    /* theme: themeReducer, */
    favorites: favReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

store.subscribe(() => {
    store.getState()
});

export type State = ReturnType<typeof store.getState>;