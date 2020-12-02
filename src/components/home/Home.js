import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div className="my-info">
			<h1>
				Hello, I am <span id="name">Prabin Sunar</span>
			</h1>
			<NavLink to="/projects" id="button">
				See my projects <FontAwesomeIcon icon={faAngleDoubleRight} fixedWidth />
			</NavLink>
			<div className="skills">
				<h2>My Skills</h2>
				<h3> HTML | CSS | Javascript | React | Redux</h3>
			</div>
		</div>
	);
};

export default Home;
