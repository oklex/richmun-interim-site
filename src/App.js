import React from "react";
import "./App.css";
import Particles from 'react-particles-js';

const logo = "Logo.svg";
const fullLogo = "FullLogo.svg";

function App() {
	return (
		<div className="App">
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
				<div className='App-body'>
					<img src={fullLogo} className="App-logo" alt="logo" />
					<p>Coming April 2021</p>
				</div>
		</div>
	);
}

export default App;
