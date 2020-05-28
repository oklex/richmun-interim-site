import React from "react";
import "./App.scss";
import Particles from "react-particles-js";

export default class ParticleBackground extends React.Component {
	render() {
		return (
			<Particles
				params={{
					fps_limit: 28,
					particles: {
						number: {
							value: 400,
							density: {
								enable: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 30,
							opacity: 0.4,
						},
						move: {
							speed: 1,
						},
						opacity: {
							anim: {
								enable: true,
								opacity_min: 0.05,
								speed: 2,
								sync: false,
							},
							value: 0.4,
						},
					},
					polygon: {
						enable: false,
						scale: 1,
                        type: "inside",
						move: {
							radius: 10,
						},
						url: "/Logo-singlePath.svg",
						inline: {
							arrangement: "equidistant",
						},
						draw: {
							enable: true,
							stroke: {
								color: "rgba(255, 255, 255, .2)",
							},
						},
					},
					retina_detect: false,
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: "bubble",
							},
						},
						modes: {
							bubble: {
								size: 6,
								distance: 40,
							},
						},
					},
				}}
			/>
		);
	}
}
