import React from 'react';
import '../../App.css';
import PracticeImageSection from '../image-sections/PracticeImageSection';
import { Helmet } from 'react-helmet';
import Services from '../body/Services';


function PracticePage() {
	return (
		<>
			<Helmet>
				<title>Our Services | Andy & Harri PLLC</title>
			</Helmet>
			<PracticeImageSection />
			<Services />
		</>
	);
}

export default PracticePage;
