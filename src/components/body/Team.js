import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import './Team.css';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import JoyceBarney from './Joyce Barney.jpeg'
import MattSanchez from './Matt Sanchez.jpeg'
import PaulDimitrov from './Paul Dimitrov.jpeg'
import AndrewHarrison from './Andrew Harrison.jpeg'
import KathyHowell from './Kathy Howell.jpeg'


const backgroundColour = 'white';

const teamData = [
    {
        img: AndrewHarrison,
        name: 'Andrew Harrison',
        position: 'Founder'
    },
    {
        img: JoyceBarney,
        name: 'Joyce Barney',
        position: 'Attorney'
    },
    {
        img: MattSanchez,
        name: 'Matt Sanchez',
        position: 'Attorney'
    },
    {
        img: PaulDimitrov,
        name: 'Paul Dimitrov',
        position: 'Attorney'
    },
    {
        img: KathyHowell,
        name: 'Kathy Howell',
        position: 'Attorney'
    }
];


function Team() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: backgroundColour }}>
            <Box sx={{
                width: '39rem',
                color: '#4a4541',
                textAlign: 'left',
                paddingLeft: 4,
                paddingRight: 4,
                paddingBottom: 3,
                paddingTop: 5,
            }}>
                <section className='team-about' >
                    Every employee at Andy & Harri PLLC shares our commitment to quality and community
                    service. We strive for the highest standards of professional excellence, and treat all of
                    our clients with fairness and compassion.
                    <p></p>
                    Whether you’re looking to settle a personal claim
                    or have a business dispute, you can rely on our legal team to work with you towards the
                    outcome you desire.
                    <p></p>
                    As Andrew Tells It In the first fifteen years of practice, we handled a wide
                    variety of practice areas and had a number of interesting and high-profile cases.
                    For example, we defended Guilford Volkswagen in a lengthy and complex price fixing
                    case brought against all lower mainland Volkswagen dealers under the Competition
                    Act. We also successfully sued the ONE for misrepresenting the value of their show
                    home prize which was high.
                    <p></p>
                    One of the personal highlights of my career was during
                    one of our family law cases. I got to physically hand a 10-day-old baby to her
                    adoptive parents at Children’s Hospital. We dealt with many adoption cases,
                    custody disputes, and other family law cases.
                    <p></p>
                    At one point we had arguably the busiest real estate conveyance practice, if not in the
                    lower mainland, certainly in Paragould, Arkansas.
                    <p></p>
                    For several years we also had a contract to represent Child and Family Services weekly in
                    protection of children cases under our firm. During that time, Joyce Barney had the reputation
                    as one of the busiest commercial corporate lawyers in the Ontario Region.
                    <p></p>
                    All of this work was performed exclusively by Joyce Barney, Paul Dimitrov and myself  until
                    we were joined by Kathy Howell and Matt Sanchez in 1998.” - Andrew Harrison.
                </section>
            </Box>

            <Box sx={{
                width: '43rem',
                paddingTop: 4,
            }}>
                <div >
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        textAlign: 'justify',
                        marginBottom: 3,
                    }}>
                        {
                            teamData.map((item) => (
                                <div className='column'>
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={item.img}
                                            srcSet={item.img}
                                            alt={item.name}
                                        />

                                        <ImageListItemBar
                                            title={item.name}
                                            subtitle={<span>{item.position}</span>}
                                            position="below"
                                        />
                                    </ImageListItem>
                                </div>
                            ))
                        }
                    </Box>
                </div>
            </Box>
        </Box>
    );
}

export default Team;