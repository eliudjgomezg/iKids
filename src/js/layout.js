import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import { Admin } from "./views/admin";
import { Login } from "./views/login";
import { Teacher } from "./views/teacher";
import { CheckIn } from "./views/checkIn";
import { Parent } from "./views/parent";
import { CreateFamily } from "./views/createFamily";
import { ForgotPasswoord } from "./views/forgotPasswoord";

import injectContext, { Context } from "./store/appContext";

import "jquery";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<BrowserRouter basename={basename}>
				<Switch>
					Parent
					<Route exact path="/" component={Login} />
					<Route path="/admin" component={Admin} />
					<Route path="/teachers" component={Teacher} />
					<Route path="/checkIn" component={CheckIn} />
					<Route path="/parent" component={Parent} />
					<Route path="/createFamily" component={CreateFamily} />
					<Route path="/forgotPasswoord" component={ForgotPasswoord} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default injectContext(Layout);
