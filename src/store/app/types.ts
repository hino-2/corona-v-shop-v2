import { LoadingState } from "../types";

type AppState = {
	authorization: {
		authorized: LoadingState;
		token: string;
		tokenExpiredTime: string;
		login: string;
	};
};

export type { AppState };
