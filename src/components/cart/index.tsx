import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import cartSelectors from "../../store/cart/selectors";
import Image from "../../ui/image";

const Cart = () => {
	const productsInCartQty = useSelector(cartSelectors.products).length;

	return (
		<Box display="flex" alignItems="center" justifyContent="center">
			<Image src="/img/cart.png" width={52} height={50} animationDuration={0} />
			<Typography variant="h4" color="textPrimary">
				{productsInCartQty}
			</Typography>
		</Box>
	);
};

export default Cart;
