import React from "react";
import "../App.scss";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import Home from '../Home/Home'
// import helmet from 'react-helmet'

const logo = "Logo.svg";
const fullLogo = "FullLogo.svg";
const fullLogoBlack = "FullLogo-black.svg";

class App extends React.Component {
	// add switch to redirect to home instead of an error page
	render() {
		return (
			<Router>
				<Home/>
			</Router>
		);
	}
}

export default App
