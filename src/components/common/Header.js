import React, { useEffect, useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import pictures from '../../assets/Pictures';

import {
	faHome,
	faLaptopCode,
	faSun,
	faAddressCard,
	faMoon,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const [mode, setMode] = useState('true');

	const handleMode = () => {
		setMode(!mode);
	};

	useEffect(() => {
		document.documentElement.className = mode ? 'light' : 'dark';
	}, [mode]);
	return (
		<div>
			<div className="header"></div>
			<div className="avatar">
				<img src={require('../../assets/MyPhoto.png')} alt="profile" />
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/" activeClassName="active" className="normal" exact>
							<FontAwesomeIcon icon={faHome} size="2x" className="icons" />
							<br />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/projects" activeClassName="active" className="normal">
							<FontAwesomeIcon
								icon={faLaptopCode}
								size="2x"
								className="icons"
							/>
							<br /> Projects
						</NavLink>
					</li>
					<li>
						<NavLink to="/resume" activeClassName="active" className="normal">
							<FontAwesomeIcon
								icon={faAddressCard}
								size="2x"
								className="icons"
							/>
							<br />
							Resume
						</NavLink>
					</li>
					<li>
						<div id="toggleMode" onClick={handleMode}>
							<FontAwesomeIcon
								icon={mode ? faSun : faMoon}
								size="2x"
								className="icons"
								title={mode ? 'Toggle to dark mode' : 'Toggle to light mode'}
							/>
							<br /> Theme
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
