import React, { memo } from "react";
import MuiImage from "material-ui-image";
import { ImageProps as MuiImageProps } from "material-ui-image/lib/components/Image/Image";
import { theme } from "../theme";

type ImageProps = {
	src: string;
	width: number;
	height: number;
	onClick: (event: Event) => void;
};

const Image = ({ src, width, height, onClick, ...muiImageProps }: ImageProps & MuiImageProps) => (
	<MuiImage
		src={src}
		style={{
			width,
			height,
			justifySelf: "center",
			padding: 0,
			cursor: onClick ? "pointer" : undefined,
		}}
		imageStyle={{ width, height }}
		color={theme.primaryColors.transparent}
		onClick={onClick}
		{...muiImageProps}
	/>
);

export default memo(Image);
