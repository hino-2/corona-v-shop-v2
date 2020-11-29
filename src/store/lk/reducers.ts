import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { LKState, User } from "./types";

type ReducerFunction<T = null> = CaseReducer<LKState, PayloadAction<T>>;

const setUser: ReducerFunction<User> = (state, { payload }) => {
	state.userInfo = payload;
};

const reducers = {
	setUser,
};

export default reducers;
