import React, { Component } from "react";
import './dynamicLogo.scss'

const logo = "Logo.svg";
const fullLogo = "FullLogo.svg";
const textOnly = "text-only.png"

export default class DynamicLogo extends Component {
	state = {
		width: 800,
		height: 182,
	};

	/**
	 * Calculate & Update state of new dimensions
	 */
	updateDimensions() {
		if (window.innerWidth < 500) {
			this.setState({ width: 450, height: 102 });
		} else {
			let update_width = window.innerWidth - 100;
			let update_height = Math.round(update_width / 4.4);
			this.setState({ width: update_width, height: update_height });
		}
	}

	/**
	 * Add event listener
	 */
	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	/**
	 * Remove event listener
	 */
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    showLogo = () => {
        if (this.state.width > 700) {
            return <img src={fullLogo} className="App-logo" alt="logo" />
        } else {
            return <div>
				<img src={logo} className="App-logo" alt="logo text" /><br/>
				<img src={textOnly} className="App-logo logo-text-only" alt="logo text" />
			</div>
        }
    }
    
	render() {
		return this.showLogo();
	}
}
