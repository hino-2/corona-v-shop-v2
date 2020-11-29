import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../product-list/types";
import { CartState } from "./types";

type ReducerFunction<T = null> = CaseReducer<CartState, PayloadAction<T>>;

const addProduct: ReducerFunction<Product> = (state, { payload }) => {
	console.log("addProduct");
};

const removeProduct: ReducerFunction<Product> = (state, { payload }) => {
	console.log("removeProduct");
};

const removeAllProducts: ReducerFunction = (state) => {
	state.products = [];
};

export const reducers = {
	addProduct,
	removeProduct,
	removeAllProducts,
};
