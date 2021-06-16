import React from 'react';
import './Resume.css';
import resume from './Prabin_Sunar-resume.png';

const Resume = () => {
	return (
		<div className="resume">
			<img src={resume} alt="Resume" width="800" height="1032" />
			<br />
			<a
				href="https://drive.google.com/file/d/1xrR8Gs_Xj3OYcg0g8OzAZxVrrhTCbcQs/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				Click to see/download the pdf format.
			</a>
		</div>
	);
};

export default Resume;
