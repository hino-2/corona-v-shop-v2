import styled from "styled-components";
import React from "react";
import Header from "./header";
import { GlobalStyle } from "../ui/global-style";

const Container = styled.div({
	display: "flex",
	flexDirection: "column",
	minWidth: "100vw",
	minHeight: "100vh",
	padding: "0 10%",
});

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
			</Container>
		</>
	);
};

export default App;
