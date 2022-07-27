import * as React from 'react';
import Box from '@mui/material/Box';
import './Footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { lime, grey } from '@mui/material/colors';


function Footer() {
	return (
		<>
			{/* <div className='space' ></div> */}
			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: 'whitesmoke' }}>
				<Box sx={{
					width: '85rem',
					padding: 2,
					textAlign: 'center',
					color: '#234d58',
					fontFamily: 'Garamond',
					paddingBottom: 3
				}}>
					<section id='slogan'>
						Provide High Quality and Comprehensive Legal Services
					</section>

					<section id='contact'>
						<LocalPhoneIcon color="action" sx={{ color: grey[800] }} /> +1 (501) 557 6823 
						<br />
						<MyLocationIcon color="action" sx={{ color: grey[800] }} /> 504 S 2nd Ave, Paragould, Arkansas, 72450
					</section>
				</Box>

				<Box
					sx={{
						width: '85rem',
						padding: 2,
						fontFamily: 'Arial',
						fontSize: 13,
						textAlign: 'center',
						background: '#234d58',
						color: 'whitesmoke'
					}}
				>
					<div className='copyright'>
						© 2022 Andy & Harri PLLC | All Rights Reserved | Sitemap Disclaimer
					</div>
				</Box>
			</Box>


		</>
	);
}

export default Footer;