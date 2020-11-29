import { ThemeProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import App from "./components";
import store from "./store";
import { GlobalStyle } from "./ui/global-style";
import { muiTheme } from "./ui/theme";

const history = createBrowserHistory();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={muiTheme}>
				<Router history={history}>
					<GlobalStyle />
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
