import { createSlice } from "@reduxjs/toolkit";
import { appInitialState, appName } from "./constants";
import { reducers } from "./reducer";

const appSlice = createSlice({
	name: appName,
	initialState: appInitialState,
	reducers,
});

export default appSlice;
