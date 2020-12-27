import React, { memo, useCallback } from "react";
import { HeaderContainer, Title, Subtitle, TitleContainer, LoginButton } from "./styled";
import Image from "../../ui/image";
import Cart from "../cart";
import { HEADER_TITLE, HEADER_SUBTITLE } from "../../store/header/constants";
import { ApplicationState } from "../../store/types";
import LKSelectors from "../../store/lk/selectors";
import { connect } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import appRoutes from "../../store/app/navigation";
import appSelectors from "../../store/app/selectors";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Header = ({ greetingName, isLoggedIn }: ReturnType<typeof mapStateToProps>) => {
	const onClickLogo = useCallback(() => {
		history.push(appRoutes.home);
	}, []);

	const onClickLoginButton = useCallback(() => {
		history.push(appRoutes.lk);
	}, []);

	return (
		<HeaderContainer>
			<TitleContainer>
				<Title variant="h5">{HEADER_TITLE}</Title>
				<Subtitle variant="h6">{HEADER_SUBTITLE}</Subtitle>
			</TitleContainer>
			<Image src="img/logo.png" width={94} height={60} onClick={onClickLogo} />
			<Cart />
			<Box display="flex" alignItems="center" justifyContent="space-between">
				<Typography color="textPrimary">{`Привет, ${greetingName}`}</Typography>
				<LoginButton onClick={onClickLoginButton}>
					{isLoggedIn ? "Выйти" : "Войти"}
				</LoginButton>
			</Box>
		</HeaderContainer>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	greetingName: LKSelectors.greetingName(state),
	isLoggedIn: appSelectors.token(state),
});

export default connect(mapStateToProps)(memo(Header));
