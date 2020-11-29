import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
	reducer: rootReducer,
	middleware,
	devTools: true,
});

export default store;
