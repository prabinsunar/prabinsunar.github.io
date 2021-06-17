import React from 'react';
import './Resume.css';
import resume from '../assets/Prabin_Sunar-resume.png';

const Resume = () => {
	return (
		<div className="resume">
			<img src={resume} alt="Resume" width="800" height="1032" />
			<br />
			<a
				href="https://drive.google.com/file/d/1I1t4M8koVJ8fuaSWgfZ1PhDCbTy4VLKr/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				Click to see/download the pdf format.
			</a>
		</div>
	);
};

export default Resume;
