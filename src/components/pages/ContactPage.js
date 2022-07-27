import React from 'react';
import '../../App.css';
import ContactImageSection from '../image-sections/ContactImageSection';
import { Helmet } from 'react-helmet';

function ContactPage() {
	return (
		<>
			<Helmet>
				<title>Contact Andy & Harri PLLC | Criminal Litigation Attorneys | International Attorneys</title>
			</Helmet>
			<ContactImageSection />
		</>
	);
}

export default ContactPage;
