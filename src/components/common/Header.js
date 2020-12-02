import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
	return (
		<div className="header">
			<nav className="navigation">
				<NavLink
					to="/portfolio/"
					activeClassName="active"
					className="normal"
					exact
				>
					Home
				</NavLink>
				{' | '}
				<NavLink
					to="/portfolio/projects"
					activeClassName="active"
					className="normal"
				>
					My Projects
				</NavLink>
			</nav>
			<nav className="social">
				<a
					className="icons"
					href="https://github.com/prabinsunar"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faGithub} color="white" size="2x" />
				</a>
				<a
					className="icons"
					href="https://www.linkedin.com/in/prabin-sunar-36a991165/"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
				</a>
			</nav>
		</div>
	);
};

export default Header;
