import React from 'react';
import './Home.css';

const Home = () => {
	return (
		<div className="parentHeader">
			<blockquote>
				Programming isn't about what you know; it's about what you can figure
				out. ~Chris Pine
			</blockquote>
			<p>
				My name is <strong>Prabin Sunar</strong>. I am an aspiring young
				individual looking to start my career in web development.
			</p>
			<p>
				{' '}
				I have knowledge and experience (that I gained working through different
				projects) in both frontend and backend technologies including, but not
				limited to:
			</p>
			<ul>
				<li>HTML/CSS</li>
				<li>Express/Node.js</li>
				<li>Javascript</li>
				<li>Ruby on Rails</li>
				<li>MongoDB</li>
				<li>React</li>
			</ul>
			<p>
				You can find me on Github and Linkedin by clicking the icons below. Or
				you can contact me via email: sunarprabin.ps@gmail.com.
			</p>
		</div>
	);
};

export default Home;
