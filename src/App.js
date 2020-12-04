import React from 'react';
import './App.css';
import Header from './components/common/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import PageNotFound from './PageNotFound';
import Particles from 'react-particles-js';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/portfolio/" component={Home} />
					<Route path="/porfolio/projects" component={Projects} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
			<Particles
				className="particles"
				params={{
					particles: {
						number: {
							value: 50,
						},
						size: {
							value: 3,
						},
					},
					interactivity: {
						events: {
							onhover: {
								enable: true,
								mode: 'repulse',
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default App;
