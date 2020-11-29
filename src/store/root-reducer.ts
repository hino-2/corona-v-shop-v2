import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./app";
import cartSlice from "./cart";
import LKSlice from "./lk";

const rootReducer = combineReducers({
	app: appSlice.reducer,
	cart: cartSlice.reducer,
	lk: LKSlice.reducer,
});

export default rootReducer;
