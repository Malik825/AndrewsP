import React from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material';
import './services.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


const backgroundColour = 'white';

const styles = theme => ({
    listItemText: {
        fontSize: '0.7em',//Insert your required size
    }
});

function Item(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    padding: 2,
                    textAlign: 'left',
                    minHeight: 210,
                    background: 'whitesmoke',
                    width: 500,
                    color: '#1c3b42',
                    borderRadius: 0,
                    fontFamily: 'Hind',
                    fontSize: 17
                },
            }}
        >
            <Paper elevation={3} >
                {props.item.testimony}
                {<br />}
                {<br />}
                {props.item.person}
            </Paper >
        </Box>
    );
}


function ItemTwo(props) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    padding: 4,
                    background: 'whitesmoke',
                    textAlign: 'center',
                    minHeight: 150,
                    width: 500,
                    color: '#1c3b42',
                    borderRadius: 0,
                    fontFamily: 'Hind',
                    fontSize: 17
                },
            }}
        >
            <Paper elevation={3} >
                {props.item.name}
            </Paper >
        </Box>
    );
}


const testimonials = [
    {
        testimony: "\"We had some commercial dealings with Joyce. She provided outstanding service. Her promptness and careful interaction with us won our hearts. Without a doubt, we would carry on working with Joyce.\"",
        person: " - Sue Renald (Oct-01-2021)"
    },
    {
        testimony: "\"Andrew performed superbly. He always stayed in touch. He is detail-oriented, honest, direct, and trustworthy, and he presents compelling arguments. I wholeheartedly endorse Andrew.\"",
        person: " - Clifford Molton (Jul-28-2021)"
    },
    {
        testimony: "\"At a difficult moment, Matt was incredibly professional and caring in expediting the probate of my will.\"",
        person: " - Martin Nuke (Jul-28-2021)"
    }
]


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


const estateServices = [
    { job: 'Preparation of wills and related documents' },
    { job: 'Preparation of joint ownerships and associated trust declarations that avoids challenges when done correctly' },
    { job: 'Preparation of alter ego and joint partner trusts that will substitute trusts and cannot be challenged or varied' },
    { job: 'Other general probate and wills variation avoidance planning including the minimization of Wills Variation Act concerns' },
    { job: 'Trusts for various purposes, including probate avoidance, disability planning, asset protection, tax planning or controlled distribution of funds to beneficiaries' },
    { job: 'Trust planning for efficient management and distribution of assets after death' },
    { job: 'Advising on executor appointments, including the use of professionals and trust companies as executors' },
    { job: 'Drafting power of attorney documents and understanding the associated implications for general, specific, and enduring power of attorney arrangements' }
];


const services = [
    {
        title: 'Incorporation',
        description: 'We incorporate society to provide limited protection to its members. Upon incorporation, a charity becomes a separate legal entity (a corporation) and the corporation (not the members) is generally liable for its debts and obligations. Additionally, we can assist with winding up a society when it is no longer in operation',
    },
    {
        title: 'Governance',
        description: 'We undertake drafting and amending bylaws and policies, providing advice regarding the administration of annual general meetings and creating special resolutions, dealing with members\' disputes and Civil Resolution Tribunal Applications. Advising on disputes and providing summary advice regarding privacy legislation',
    },
    {
        title: 'Insurance Coverage',
        description: 'We offer advise on insurance disputes and assist with claims arising on behalf of and against society',
    },
    {
        title: 'Tax Planning',
        description: 'We offer assistance in obtaining charitable status and ensuring continued eligibility for charitable tax benefits',
    },
    {
        title: 'Contract Disputes',
        description: 'We offer advise on negotiating and enforcing contracts on behalf of society, including commercial disputes and claims for debt',
    },
    {
        title: 'Real Estate Transactions',
        description: 'We advise on acquiring and disposing of real estate, as well as advice on negotiating and litigating the terms of the society\'s lease interests',
    },
    {
        title: 'Estate Administration and Litigation',
        description: 'We advise charities who have received gifts under a donor’s will with disputes arising as a result of challenges to the validity of these gifts.',
    },
    {
        title: 'Employment',
        description: 'We assist with all workplace matters, including creating employment contracts which limit severance liability and creating workplace policies for employees of the company. Assisting with hiring and dismissal planning',
    },
    {
        title: 'Planned Donations',
        description: 'We assist charities in allowing their members and donors to set up gifts to the organization on the death of the donor',
    }
];


function Services() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: backgroundColour }}>
            <Box sx={{
                width: '52rem',
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: 5,
            }}>
                <section className='service-about'>
                    Our expertise extends to all areas of charity and non-profit law. At Andy & Harri PLLC,
                    we regularly assist our clients in the following areas:
                </section>
                <br />

                <List
                    sx={{
                        width: '100%',
                        paddingLeft: 2,
                        paddingRight: 2,
                    }}
                >
                    {
                        services.map((item) => (
                            <>
                                <ListItem
                                    key={item}
                                    disableGutters
                                >
                                    <ListItemText
                                        primary={item.title}
                                        secondary={<React.Fragment>
                                            <Typography
                                                sx={{
                                                    display: 'inline',
                                                }}
                                                component="span"
                                                variant="body2"
                                                color='#4a4541'
                                                fontFamily="Hind"
                                                fontSize={18}
                                            >
                                                <br />
                                                {item.description}
                                            </Typography>
                                        </React.Fragment>} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))
                    }
                </List>
                <Box
                    sx={{
                        paddingLeft: 2,
                        paddingRight: 2,
                        paddingBottom: 3,
                    }}
                >
                    <section id='estate-title' >Estate Planning, Wills and Trusts</section>
                    <br />
                    <Typography
                        sx={{
                            display: 'inline',
                        }}
                        component="span"
                        variant="body2"
                        color='#4a4541'
                        fontFamily="Hind"
                        fontSize={18}
                    >
                        No matter how well planned, there is always the potential that someone will disagree
                        with the estate. This adds an additional layer of conflict and stress during what is an already trying
                        time, especially since these disputes have the potential to permanently impact family relationships.
                        <p></p>

                        At Andy & Harri PLLC, our wills and estates team are well versed in handling estate matters, including
                        litigation and disputes, and have represented clients regarding estates of varying size and complexity.
                        Our focus is on working with you and your family towards an amicable resolution whenever possible and
                        protecting your rights when it is not.
                        <p></p>
                        Wills & Trusts
                        <br />
                        
                        When a person dies, a lack of estate planning can increase the burden on their loved ones.
                        Even with good planning and no legal disputes, estate administration can be a large burden
                        for your family to bear. Between tax planning, asset allocation (especially for blended
                        families), trust declarations, and other common estate issues can cause headaches and
                        require professional assistance.  Regardless of the complexity of your estate, a will or
                        any other estate planning document simplifies the process and helps take some of the
                        burden off of your loved ones in the event of your passing.
                        <p></p>
                        At Andy & Harri PLLC, our experience includes preparing estate plans for those who are
                        single, have one spouse with no prior spouses, and those who are in second or more than
                        second marriages or common law relationships. We can assist with planning for simple
                        assets to complex and substantial assets and the nature and extent of assets also affects
                        the planning direction. We can assist you in drafting a will or will alternative that
                        gives you peace of mind and helps everything unfold the way you want it to.
                        Our team can assist you with the following areas to reduce the strain of your loved ones
                        in the event of your passing:

                        <ul>
                            {estateServices.map((point) => <li>{point.job}</li>)}
                        </ul>

                        <p></p>

                        <section id='power-of-attorney'>Choose The Right Power Of Attorney For Your Situation</section>
                        
                        <br />
                        Assigning someone as your Power of Attorney entrusts them with the responsibility of
                        ensuring that your wishes are respected, even if you cannot make decisions for yourself.
                        Your Power of Attorney can act on your behalf for legal and financial matters and
                        entrusting that power to someone can be a complicated process.
                        <p></p>
                        Our team strives to make the Power of Attorney process as straightforward as possible,
                        and can help you select the correct agreement, modify and existing one, or change your
                        designated Power of Attorney, provided you are mentally capable.
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: '30rem',
                    paddingBottom: 5,
                    paddingTop: 4,
                    fontFamily: 'Garamond',
                    fontSize: 18,
                    paddingLeft: 4,
                    paddingRight: 4,
                }}
            >
                {/* Testimonials Section */}
                <h2 id='services-h2'>Testimonials</h2>

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
                        testimonials.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
                <br />

                {/* Award Section */}
                <h2 id='services-h2'>Awards</h2>

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
                            awards.map((item, i) => <ItemTwo key={i} item={item} />)
                        }
                    </Carousel>
                </section>
            </Box>
        </Box>
    );
}

export default Services;