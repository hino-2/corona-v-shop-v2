import { createSelector } from "@reduxjs/toolkit";
import { ApplicationState } from "../types";
import { getName } from "./utils";

const userInfo = (state: ApplicationState) => state.lk.userInfo;

const greetingName = createSelector(userInfo, getName);

const LKSelectors = {
	userInfo,
	greetingName,
};

export default LKSelectors;
