type ProductListState = {
	products: Product[];
	category: string;
	pagination: Pagination;
	filter: string;
};

type Product = {
	id: string;
};

type Pagination = {
	totalItems: number;
	totalPages: number;
	limit: number;
	page: number;
};

export type { Product, ProductListState, Pagination };
