import React from "react";
import "./RedirectLink.scss";
import { Redirect } from "react-router-dom";

interface IRedirectLinkProps {
	link: string;
	externalLink?: boolean;
	delay?: number;
	children: JSX.Element[] | JSX.Element;
}

interface IRedirectLinkState {
	clicked: boolean;
	delayEnded: boolean;
}

export default class RedirectLink extends React.Component<
	IRedirectLinkProps,
	IRedirectLinkState
> {
	state = {
		clicked: false,
		delayEnded: false,
	};

	onClick = () => {
		console.log("clicked ", this.props.link);
		window.scrollTo(0, 0);
		this.setState({
			clicked: true,
		});
		// setTimeout(
		// 	() =>
		// 		this.setState({
		// 			clicked: false,
		// 		}),
		// 	this.props.delay ? (this.props.delay + 150) : 50
		// )
		this.redirect();
	};

	redirect = () => {
		if (this.state.clicked && this.props.externalLink) {
			console.log("redirect");
			setTimeout(
				() => {
					window.location.href = this.props.link;
				},
				this.props.delay ? this.props.delay : 0
			);
		} else {
			setTimeout(
				() => {
					this.setState({
						delayEnded: true,
					});
				},
				this.props.delay ? this.props.delay : 0
			);
		}
	};

	showRedirect = () => {
		if (this.state.clicked && this.state.delayEnded) {
			return <Redirect to={this.props.link} />;
		}
	};

	showTransition = () => {
		if (this.state.clicked && this.props.externalLink) {
			console.log("show external transition");
			return (
				<div className="transitionScreen">
					<div>
						<p>redirecting...</p>
					</div>
				</div>
			);
		} else if (this.state.clicked) {
			// assume internal link
			console.log("show internal transition");
			return (
				<div>
					<div className="transitionScreen"></div>
					<div className="transitionScreen-follow"></div>
				</div>
			);
		}
	};

	render() {
		return (
			<div>
				{this.showRedirect()}
				{this.showTransition()}
				<div className="linkBtn btn-active" onClick={() => this.onClick()}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
