import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../types";
import { AppState } from "./types";

type ReducerFunction<T = null> = CaseReducer<AppState, PayloadAction<T>>;

const login: ReducerFunction<{ login: string; password: string }> = (state, { payload }) => {
	state.authorization.authorized = LoadingState.Loading;
};

export const reducers = {
	login,
};
