import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div>
			<ul className="social">
				<li>
					<a
						href="https://github.com/prabinsunar"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className="icons" icon={faGithub} size="2x" />
					</a>
				</li>
				<li>
					{' '}
					<a
						href="https://www.linkedin.com/in/prabin-sunar-36a991165/"
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon className="icons" icon={faLinkedin} size="2x" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
