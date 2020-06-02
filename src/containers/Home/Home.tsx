import React from "react";
import "../App.scss";
import ReactTooltip from "react-tooltip";
import DynamicLogo from "../../components/dynamicLogo";
import {Helmet} from "react-helmet";
import RedirectLink from "../../components/RedirectLink/redirectLink";

const upcomingYear:string = "2021"

interface IHomeState {
	clickedLink: boolean,
	link: string
}

class Home extends React.Component<{},IHomeState>{
	state = {
		clickedLink: false,
		link: "",
	};

	onClick = (link:string) => {
		console.log("clicked ", link);
		this.setState({
			clickedLink: true,
		});
		setTimeout(() => {
			window.location.href = link;
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
						
						<RedirectLink link='/sec-apps' delay={1000} externalLink={false}>
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
					<div className="copyright">updated: 06-01-2020  |  copyright@richmun2020</div>
				</div>
			</div>
		);
	}
}

export default (Home);
