import { createMuiTheme } from "@material-ui/core/styles";

const primaryColors = {
	orange: "#df6400",
	grey: "#525252",
	transparent: "#00000000",
	white: "#ffffff",
};

const secondaryColors = {
	grey: "#696969",
};

type Theme = {
	primaryColors: { [key in keyof typeof primaryColors]: string };
	secondaryColors: { [key in keyof typeof secondaryColors]: string };
};

const theme: Theme = {
	primaryColors,
	secondaryColors,
};

const muiTheme = createMuiTheme({
	palette: {
		text: {
			primary: theme.primaryColors.white,
			secondary: theme.primaryColors.orange,
		},
		primary: {
			main: theme.primaryColors.orange,
		},
	},
});

export { theme, muiTheme };
