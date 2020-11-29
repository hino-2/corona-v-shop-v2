import React, { memo } from "react";
import MuiImage from "material-ui-image";
import { ImageProps as MuiImageProps } from "material-ui-image/lib/components/Image/Image";
import { theme } from "../theme";

type ImageProps = {
	src: string;
	width: number;
	height: number;
};

const Image = ({ src, width, height, ...muiImageProps }: ImageProps & MuiImageProps) => (
	<MuiImage
		src={src}
		style={{
			width,
			height,
			justifySelf: "center",
			padding: 0,
		}}
		imageStyle={{ width, height }}
		color={theme.primaryColors.transparent}
		{...muiImageProps}
	/>
);

export default memo(Image);
