import React, { memo } from "react";
import { HeaderContainer, Title, Subtitle, TitleContainer } from "./styled";
import Image from "material-ui-image";

const HEADER_TITLE = "KORONA VI RUS SHOP";
const HEADER_SUBTITLE = "Шестой русский магазин КОРОНА";
const logoSize = { width: 94, height: 60 };
const logoStyle = {
	...logoSize,
	justifySelf: "center",
	padding: 0,
};
const transparentColor = "#00000000";

const Header = () => (
	<HeaderContainer>
		<TitleContainer>
			<Title variant="h5">{HEADER_TITLE}</Title>
			<Subtitle variant="h6">{HEADER_SUBTITLE}</Subtitle>
		</TitleContainer>
		<Image src="logo.png" style={logoStyle} imageStyle={logoSize} color={transparentColor} />
	</HeaderContainer>
);

export default memo(Header);
