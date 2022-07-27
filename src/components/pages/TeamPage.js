import React from 'react';
import '../../App.css';
import TeamImageSection from '../image-sections/TeamImageSection';
import Team from '../body/Team';
import { Helmet } from 'react-helmet';


function TeamPage() {
	return (
		<>
			<Helmet>
				<title>Our Team | Andy & Harri PLLC</title>
			</Helmet>
			<TeamImageSection />
			<Team />
		</>
	);
}

export default TeamPage;
