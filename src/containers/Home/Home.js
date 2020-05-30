import React from "react";
import "../App.scss";
import ReactTooltip from "react-tooltip";
import { withRouter } from "react-router-dom";
import DynamicLogo from "../../components/dynamicLogo";
import {Helmet} from "react-helmet";
import RedirectLink from "../../components/RedirectLink/redirectLink";

const upcomingYear = "2021"

class Home extends React.Component {
	state = {
		clickedLink: false,
		link: "",
	};

	onClick = (link) => {
		console.log("clicked ", link);
		this.setState({
			clickedLink: true,
		});
		setTimeout(() => {
			window.location = link;
		}, 50);
	};

	showTransition = () => {
		if (this.state.clickedLink) {
			console.log("show transition");
			return (
				<div className="transitionScreen">
					<p>redirecting...</p>
				</div>
			);
		}
	};

	render() {
		return (
			<div className="App">
				<Helmet>
					<meta charSet="utf-8" />
					<title>Transitioning to {upcomingYear}</title>
					<link rel="canonical" href="interim.richmun.ca"/>
					<meta name="robots" content="index, follow" />
					<meta name="description" content={"Richmond Model United Nations is hiring for " + upcomingYear}></meta>
				</Helmet>
				<ReactTooltip place="bottom" type="dark" effect="float" />
				<div className="App-body">
					<div className="App-header">
						<DynamicLogo />
						<p className="greyText">Coming April 2021</p>
					</div>
					<div className="Links container d-flex flex-wrap justify-content-around">
						
						<RedirectLink link='/secretariat-applications' delay='1000' externalLink={false}>
							<p data-tip="">Secretariat Apps</p></RedirectLink>
						
						<div
							className="linkBtn"
						>
							<p data-tip="not available yet">Staff Apps</p>
						</div>
						<div
							className="linkBtn"
						>
							<p data-tip="not available yet">Returning Staff</p>
						</div>
					</div>
					<div className="copyright">copyright@richmun2020</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Home);
