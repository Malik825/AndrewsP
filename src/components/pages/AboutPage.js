import React from 'react';
import '../../App.css';
import AboutImageSection from '../image-sections/AboutImageSection';
import { Helmet } from 'react-helmet';
import About from '../body/About';


function AboutPage() {
	return (
		<>
			<Helmet>
				<title>About Andy & Harri PLLC | Andy & Harri PLLC</title>
			</Helmet>
			<AboutImageSection />
			<About />
		</>
	);
}

export default AboutPage;