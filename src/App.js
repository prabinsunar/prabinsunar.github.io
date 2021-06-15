import React from 'react';
import './App.css';
import Header from './components/common/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import PageNotFound from './PageNotFound';
import Footer from './components/footer/Footer';
import Resume from './components/resume/Resume';

function App() {
	return (
		<div className="body">
			<Router basename="/portfolio">
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/resume" component={Resume} />
						<Route component={PageNotFound} />
					</Switch>
					<hr />
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
