import React from "react";
import Header from "./header";
import { Container } from "../ui/styled";
import { Route, Switch } from "react-router-dom";
import appRoutes from "../store/app/navigation";
import LK from "./lk";

const routes = [
	<Route key={appRoutes.home} path={appRoutes.home} exact component={() => <></>} />,
	<Route key={appRoutes.lk} path={appRoutes.lk} exact component={LK} />,
];

const App = () => (
	<Container>
		<Header />
		<Switch>{routes}</Switch>
	</Container>
);

export default App;
