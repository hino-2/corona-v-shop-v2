import { ApplicationState } from "../types";

const products = (state: ApplicationState) => state.cart.products;

const cartSelectors = {
	products,
};

export default cartSelectors;
