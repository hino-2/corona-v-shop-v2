import styled from "styled-components";

export type ImageProps = {
	img: string;
	width: number;
	height: number;
};

export const Image = styled.div<ImageProps>`
	background-image: ${({ img }) => `url(${img})`};
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
`;
