import { LoadingState } from "../types";

type AppState = {
	authorization: {
		authorizationStatus: LoadingState;
		token: string;
		tokenExpiredTime: string;
	};
};

export type { AppState };
