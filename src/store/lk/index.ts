import { createSlice } from "@reduxjs/toolkit";
import { lKInitialState, lKNameSpace } from "./constants";
import reducers from "./reducers";

const LKSlice = createSlice({
	initialState: lKInitialState,
	name: lKNameSpace,
	reducers,
});

export default LKSlice;
