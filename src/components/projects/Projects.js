import React from 'react';
import './Projects.css';

const Projects = () => {
	return (
		<div className="projects">
			<div className="projectOne">
				<img
					src="../assets/rent-tracker.png"
					alt="Project One"
					height="187.5"
					width="250"
				/>
				<p>
					A rent tracking application with CoreUI on front-end and express.js on
					the back-end.
				</p>
				<span>
					<ul className="projectLinks">
						<li>
							<a
								href="https://github.com/prabinsunar"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
						</li>
						{' | '}
						<li>
							<a
								href="https://www.linkedin.com/in/prabin-sunar-36a991165/"
								target="_blank"
								rel="noreferrer"
							>
								See it live
							</a>
						</li>{' '}
						[Enter username: John and password: password to login.]
					</ul>
				</span>
				<p>
					Technologies used: CoreUI(Bootstrap), ExpressJS, MongoDB, AWS and
					Vanilla JS.
				</p>

				<p>
					Case Scenario: This application is inspired by the problem faced by
					John who has several rental properties. He uses Excelsheets for
					recording payments and all the information about the clients which is
					quite error-prone and time consuming.
					<br />
					With easy-to-use interface and automated notifier, this application
					will allow him not only to keep records of his clients but also the
					rent they pay.
				</p>
				<span>Features:</span>
				<ul>
					<li>Stores information about houses, apartments and tenants.</li>
					<li>Keeps record of the rent payments.</li>
					<li>Shows rents that are due or overdue on the main dashboard.</li>
					<li>
						Login functionality to limit access only to an authorized person.
					</li>
				</ul>
			</div>
			<div className="projectTwo">
				<img
					src="../assets/weather-app.png"
					alt="Project Two"
					height="187.5"
					width="250"
				/>
				<p>
					A simple weather application built with{' '}
					<a
						href="https://www.openweathermap.org"
						target="_blank"
						rel="noreferrer"
					>
						openweathermap.org
					</a>{' '}
					API.
				</p>
				<span>
					<ul className="projectLinks">
						<li>
							<a
								href="https://github.com/prabinsunar"
								target="_blank"
								rel="noreferrer"
							>
								Source Code
							</a>
						</li>
						{' | '}
						<li>
							<a
								href="https://www.linkedin.com/in/prabin-sunar-36a991165/"
								target="_blank"
								rel="noreferrer"
							>
								See it live
							</a>
						</li>
					</ul>
				</span>
				<p>Technologies used: HTML,CSS and Javascript.</p>

				<p>
					This is a simple application that shows information about weather
					based on users location or the one provided by the user.
				</p>
				<span>Features:</span>
				<ul>
					<li>
						Use location services to show weather info based on the location of
						user.
					</li>
					<li>
						Shows weather info based on the location typed in the search input.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Projects;
