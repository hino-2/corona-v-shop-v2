import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { theme } from "../../ui/theme";

export const HeaderContainer = styled.div({
	display: "grid",
	gridTemplateColumns: "2fr 1fr 1fr 1fr",
	width: "100%",
	height: 74,
	padding: 8,
	backgroundColor: theme.primaryColors.grey,
});

export const TitleContainer = styled.div({
	width: 400,
});

export const Title = styled(Typography)`
	color: ${theme.primaryColors.orange};
`;

export const Subtitle = styled(Typography)`
	color: #fff;
`;
