import { CartState } from "./types";

export const cartNamespace = "cart";
export const cartRoute = "/cart";

export const cartInitialState: CartState = {
	products: [],
};
