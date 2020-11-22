const primaryColors = {
	orange: "#df6400",
	grey: "#525252",
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

export default theme;
