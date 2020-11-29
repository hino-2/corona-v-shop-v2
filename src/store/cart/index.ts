import { createSlice } from "@reduxjs/toolkit";
import { cartInitialState, cartNamespace } from "./constants";
import { reducers } from "./reducers";

const cartSlice = createSlice({
	name: cartNamespace,
	initialState: cartInitialState,
	reducers,
});

export default cartSlice;
