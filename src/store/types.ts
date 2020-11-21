import { AppState } from "./app/types";
import { CartState } from "./cart/types";
import { LK } from "./lk/types";
import { ProductListState } from "./product-list/types";

type ApplicationState = {
	app: AppState;
	cart: CartState;
	lk: LK;
	productList: ProductListState;
};

export enum LoadingState {
	Idle = "Idle",
	Loading = "Loading",
	Resolve = "Resolve",
	Reject = "Reject",
}

export type { ApplicationState };
