import { LKState, User } from "./types";

export const lKNameSpace = "lk";
export const lkRoute = "/lk";

export const defaultUser: User = {
	login: "друг",
	email: "",
	balance: 0,
	firstName: "",
	secondName: "",
};

export const lKInitialState: LKState = {
	userInfo: defaultUser,
};
