import { Pagination, ProductListState } from "./types";

const paginationInitialState: Pagination = {
	totalItems: 1,
	totalPages: 1,
	limit: 8,
	page: 1,
};

export const productListInitialState: ProductListState = {
	category: null,
	products: [],
	pagination: paginationInitialState,
	filter: "",
};
