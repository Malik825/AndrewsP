import React from 'react';
import '../../App.css';
import TestimonialSection from '../image-sections/TestimonialSection';
import Testimonial from '../body/Testimonial';
import { Helmet } from 'react-helmet';


function TestimonialPage() {
	return (
		<>
			<Helmet>
				<title>Testimonial | Andy & Harri PLLC</title>
			</Helmet>
			<TestimonialSection />
			<Testimonial />
		</>
	);
}

export default TestimonialPage;
