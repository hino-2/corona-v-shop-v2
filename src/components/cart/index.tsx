import { Box, Typography } from "@material-ui/core";
import { createBrowserHistory } from "history";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import appRoutes from "../../store/app/navigation";
import cartSelectors from "../../store/cart/selectors";
import Image from "../../ui/image";

const history = createBrowserHistory();

const Cart = () => {
	const productsInCartQty = useSelector(cartSelectors.products).length;

	const onClickCart = useCallback(() => {
		history.push(appRoutes.cart);
	}, []);

	return (
		<Box display="flex" alignItems="center" justifyContent="center">
			<Image
				src="/img/cart.png"
				width={52}
				height={50}
				animationDuration={0}
				onClick={onClickCart}
			/>
			<Typography variant="h4" color="textPrimary">
				{productsInCartQty}
			</Typography>
		</Box>
	);
};

export default Cart;
