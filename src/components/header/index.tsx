import React, { memo } from "react";
import { HeaderContainer, Title, Subtitle, TitleContainer } from "./styled";
import Image from "../../ui/image";
import Cart from "../cart";
import { HEADER_TITLE, HEADER_SUBTITLE } from "../../store/header/constants";
import { ApplicationState } from "../../store/types";
import LKSelectors from "../../store/lk/selectors";
import { connect } from "react-redux";
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import appRoutes from "../../store/app/navigation";
import appSelectors from "../../store/app/selectors";

const Header = ({ greetingName, isLoggedIn }: ReturnType<typeof mapStateToProps>) => (
	<HeaderContainer>
		<TitleContainer>
			<Title variant="h5">{HEADER_TITLE}</Title>
			<Subtitle variant="h6">{HEADER_SUBTITLE}</Subtitle>
		</TitleContainer>
		<Image src="img/logo.png" width={94} height={60} />
		<Cart />
		<Box display="flex" alignItems="center">
			<Typography color="textPrimary">{`Привет, ${greetingName}`}</Typography>
			<Link to={appRoutes.lk}>
				<Button color="primary">{isLoggedIn ? "Выйти" : "Войти"}</Button>
			</Link>
		</Box>
	</HeaderContainer>
);

const mapStateToProps = (state: ApplicationState) => ({
	greetingName: LKSelectors.greetingName(state),
	isLoggedIn: appSelectors.token(state),
});

export default connect(mapStateToProps)(memo(Header));
