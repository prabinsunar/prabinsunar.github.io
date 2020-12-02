import React from 'react';
import './Projects.css';
import WeatherImage from '../assets/weather-app.png';
import facebookImage from '../assets/facebook-app.png';
import twitterImage from '../assets/twitter-app.png';

const Projects = () => {
	return (
		<div className="projects">
			<div className="text">
				<h1>Projects</h1>
			</div>
			<div className="card-container">
				<div className="cards">
					<img src={WeatherImage} alt="Project" />
					<div className="cards-links">
						<ul>
							<li>
								<a
									href="https://github.com/prabinsunar/simple-weather-app"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://prabinsunar.github.io/simple-weather-app/"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="cards">
					<img src={facebookImage} alt="Project" />
					<div className="cards-links">
						<ul>
							<li>
								<a
									href="https://github.com/prabinsunar/simple-facebook-clone"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://facebook-clone-1f2b5.web.app/"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="cards">
					<img src={twitterImage} alt="Project" />
					<div className="cards-links">
						<ul>
							<li>
								<a
									href="https://github.com/prabinsunar/twitter-clone"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://twitter-clone-72177.web.app/"
									target="_blank"
									rel="noreferrer"
								>
									Live Demo
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
