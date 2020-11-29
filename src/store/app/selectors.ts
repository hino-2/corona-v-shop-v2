import { ApplicationState } from "../types";

const loginStatus = (state: ApplicationState) => state.app.authorization.authorizationStatus;
const token = (state: ApplicationState) => state.app.authorization.token;
const tokenExpiredTime = (state: ApplicationState) => state.app.authorization.tokenExpiredTime;

const appSelectors = {
	loginStatus,
	token,
	tokenExpiredTime,
};

export default appSelectors;
