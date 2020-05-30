import React from "react";
import "./RedirectLink.scss";
import { Redirect } from 'react-router-dom'

interface IRedirectLinkProps {
	link: string;
	externalLink?: boolean;
	delay?: number;
	children: JSX.Element[] | JSX.Element;
}

interface IRedirectLinkState {
	clicked: boolean;
}

export default class RedirectLink extends React.Component<
	IRedirectLinkProps,
	IRedirectLinkState
> {
	state = {
		clicked: false,
	};

	onClick = () => {
		console.log("clicked ", this.props.link);
		this.setState({
			clicked: true,
		});
	};

	redirect = () => {
		if (this.props.externalLink) {
			console.log('external redirect')
			setTimeout(
				() => {
					window.location.href = this.props.link;
				},
				this.props.delay ? this.props.delay : 0
			);
		} else {
			console.log('internal redirect')
			return <Redirect to={this.props.link} />
		}
	}

	showTransition = () => {
		if (this.state.clicked && this.props.externalLink) {
			console.log("show external transition");
			return (
				<div className="transitionScreen">
					<p>redirecting...</p>
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
				{this.redirect()}
				{this.showTransition()}
				<div className="linkBtn btn-active" onClick={() => this.onClick()}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
