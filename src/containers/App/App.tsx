import React from "react";
import "../App.scss";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import Secretariat from "../Applications/Secretariat";
import ReturningStaff from "../ReturningStaff/ReturningStaff";
// import helmet from 'react-helmet'

// const logo = "Logo.svg";
// const fullLogo = "FullLogo.svg";
// const fullLogoBlack = "FullLogo-black.svg";

class App extends React.Component {
	// add switch to redirect to home instead of an error page
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/sec-apps">
						<Secretariat />
					</Route>
					<Route exact path="/returning-staff">
						<ReturningStaff/>
					</Route>
					{/* <Route render={() => <Redirect to={{pathname: "/"}} />} /> */}
				</Switch>
			</Router>
		);
	}
}

export default App;
