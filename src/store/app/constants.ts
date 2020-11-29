import { LoadingState } from "../types";
import { AppState } from "./types";

export const appNamespace = "app";

export const appInitialState: AppState = {
	authorization: {
		token: null,
		tokenExpiredTime: null,
		authorizationStatus: LoadingState.Idle,
	},
};
