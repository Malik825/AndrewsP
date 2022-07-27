import React from 'react';
import '../../App.css';
import './About.css';
import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


const backgroundColour = 'white';
const carouselColour = 'whitesmoke';


function Item(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    padding: 4,
                    background: carouselColour,
                    textAlign: 'center',
                    minHeight: 150,
                    width: 500,
                    color: '#1c3b42',
                    borderRadius: 0,
                    fontSize: 17,
                    fontFamily: 'Hind',
                },
            }}
        >
            <Paper elevation={2} >
                {props.item.name}
            </Paper >
        </Box>
    );
}


const ItemTwo = styled(Paper)(({ theme }) => ({
    backgroundColor: carouselColour,
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#1c3b42',
    fontFamily: 'Hind',
    fontSize: 17,
    minHeight: 150,
    borderRadius: 0,
}));


const awards = [
    {
        name: "Expert Directory Listing - Leading Employment Lawyer to Watch (April 2021)"
    },
    {
        name: "Top Medical Malpractice Lawyers in 2021 and before"
    },
    {
        name: "Abbotsford Business Excellence Awards (2020)"
    },
    {
        name: "Top Three Employment Lawyers in Ontario"
    },
    {
        name: "Nominees for Large Business of the Year at the Greater Belgium Chamber of Commerce 2019 Business Excellence Awards"
    },
    {
        name: "Best Employment Lawyers in Belgium"
    }
]


function About() {
    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: backgroundColour }}>
                <Box sx={{
                    width: '45rem',
                    color: '#4a4541',
                    paddingLeft: 4,
                    paddingRight: 4,
                    paddingBottom: 5,
                    paddingTop: 5,
                    textAlign: 'left',
                }}>
                    <section className='about-section'>
                        Welcome to Andy & Harri PLLC Lawyers. Since its establishment in 1973,
                        Andy & Harri PLLC Lawyers has largely represented clients in the United States, abroad,
                        and in the local communities who are interested in real estate and business law issues.
                        <p></p>
                        Since then, our firm has grown in size and scope to be able to represent individual and
                        corporate customers in a wide range of practice areas. Today, we have offices all around
                        the world, collaborating with other legal firms, as well as one in the United States, in
                        Paragould, Arkansas.
                        <p></p>
                        Our firm is widely regarded in the numerous areas in which we operate for its
                        professionalism, ethics, and thorough representation. Andy & Harri PLLC's attorneys have
                        over a decade of combined expertise delivering high-quality professional legal services
                        in both domestic and foreign disputes. In addition to providing services in negotiation
                        or litigation, our attorneys have vast experience representing clients in various modes
                        of conflict resolution, including mediation and arbitration.
                        <p></p>
                        Andy & Harri focuses on all facets of family law, including high-asset divorces,
                        civil litigation, personal injury, property management, overseas disputes, and
                        criminal matters.
                        <p></p>
                        While having the experience, resources, and legal knowledge of a large firm, you can be
                        sure that we will give you the specialized attention and personal service only found at
                        a small business. We uphold the principle of exceeding our customers' expectations.By
                        maintaining open lines of communication and offering legal services at reasonable prices.
                        <p></p>
                        Our dedication to the development and vitality of the communities we have the honor of
                        serving is a source of pride for us. Several professional, charity, environmental
                        and cultural services are actively supported by members of our staff.
                    </section>
                </Box>

                <Box sx={{
                    width: '30rem',
                    paddingBottom: 10,
                    paddingTop: 3,
                    paddingLeft: 3,
                    paddingRight: 3,
                    fontFamily: 'Garamond',
                    fontSize: 18,
                }}>
                    {/* Award Section */}
                    <section>
                        <h2 id='about-h2'>Awards</h2>
                    </section>

                    <section>
                        <Carousel
                            indicatorIconButtonProps={{
                                style: {
                                    padding: '5px',
                                }
                            }}
                            indicatorContainerProps={{
                                style: {
                                    textAlign: 'left',
                                }
                            }}
                            navButtonsAlwaysInvisible='true'
                        >
                            {
                                awards.map((item, i) => <Item key={i} item={item} />)
                            }
                        </Carousel>
                    </section>
                    <br />

                    {/* Community Involvement */}
                    <h2 id='about-h2'>Community Involvement</h2>

                    <section>
                        <ItemTwo>
                            Because our commitment to helping our community doesn't end when we leave the courtroom,
                            we annually sponsor a number of activities, sports teams, as well as tuition scholarships.
                        </ItemTwo>
                    </section>
                    <br />

                    {/* Legal Resources */}
                    <h2 id='about-h2'>Legal Resources</h2>

                    <section>
                        <ItemTwo>
                            We've created a comprehensive set of materials to answer your most frequent legal inquiries,
                            explain legislation and major court rulings, and keep you up to date.
                        </ItemTwo>
                    </section>
                </Box>
            </Box>
        </>
    );
}

export default About;