import { createSlice } from "@reduxjs/toolkit";
import { appInitialState, appNamespace } from "./constants";
import { reducers } from "./reducers";

const appSlice = createSlice({
	name: appNamespace,
	initialState: appInitialState,
	reducers,
});

export default appSlice;
