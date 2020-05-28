import React from "react";
import "./App.scss";
import ParticleBackground from './particles'

const logo = "Logo.svg";
const fullLogo = "FullLogo.svg";
const fullLogoBlack = "FullLogo-black.svg"

function App() {
	return (
		<div className="App">
				<div className='App-body'>
					<img src={fullLogo} className="App-logo" alt="logo" />
					<p className='greyText'>Coming April 2021</p>
				</div>
		</div>
	);
}

export default App;
