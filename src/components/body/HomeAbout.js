import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import './HomeAbout.css';
import Home from './home.jpg'
import AndrewHarrison from './Andrew Harrison.jpeg'
import Badge from './badge2.png'


const education = [
    { level: 'J.D., The University of Zurich School of Law, 1977' },
    { level: 'B.A., English, Rice University, 1975' }
];


const civicInvolvement = [
    { role: 'Presbyterian Elder' },
    { role: 'Board of Trustees, Shad Williams Evangelistic Association' },
    { role: 'Advisory Board Member, The Forge for Families' },
    { role: 'Active Member, Christ Evangelical Presbyterian Church' },
    { role: 'Former Director, Brazos Presbyterian Homes, Inc.' }
]


function HomeAbout() {
    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', background: 'white', paddingBottom: 5 }}>
                <Box sx={{
                    width: '30rem',
                    marginBottom: 3,
                    paddingTop: 3,
                    fontFamily: 'Garamond',
                    color: '#234d58',
                    fontSize: 25,
                    paddingLeft: 9,
                    paddingRight: 9,
                    textAlign: 'center',
                    fontWeight: 500
                }}>
                    <img
                        src={Badge}
                    />
                    <section className='home-slogan'>
                        Andy & Harri PLLC provides high-quality and comprehensive legal services
                    </section>
                </Box>

                <Box
                    sx={{
                        marginBottom: 2,
                        paddingLeft: 2,
                        paddingRight: 1,
                        paddingTop: 3,
                        width: '50rem',
                    }}
                >
                    <section className='home-about-section'>
                        Andy & Harri PLLC's attorneys have over a decade of combined expertise delivering
                        high-quality professional legal services in both domestic and foreign disputes.
                        <p></p>
                        In addition to providing services in negotiation
                        or litigation, our attorneys have vast experience representing clients in various modes
                        of conflict resolution, including mediation and arbitration.
                        Andy & Harri concentrates on all aspects of family law matters, including complex and
                        high asset divorces, civil litigation, personal injury and property-related issues.
                        <p></p>
                        While having the experience, resources, and legal knowledge of a large firm, you can be
                        sure that we will give you the specialized attention and personal service only found at
                        a small business.
                        <p></p>
                        From our Paragould, Arkansas, office, we serve the entire state of Arkansas as well as
                        the areas nearby.
                        <p></p>

                        <Link className='link' to="/about" >
                            READ MORE
                            <i class='fas fa-arrow-right' />
                        </Link>
                    </section>
                </Box>
            </Box>

            <Box sx={{ background: '#f9fbe7' }}  >
                <h2 id='home-about-h2'>About Our Founder</h2>
                {/* ABOUT THE FOUNDER */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 3 }}>
                    <Box sx={{
                        width: '30rem',
                        padding: 2,
                        marginBottom: 1,
                    }}>
                        <img
                            width='100%'
                            src={AndrewHarrison}
                        />
                        <br />
                        <br />

                        {/* Education */}
                        <h3 className='label' >Education</h3>

                        <ul className="b">
                            {education.map((degree) => <li>{degree.level}</li>)}
                        </ul>
                        <br />
                        {/* Civic Responsibilities */}
                        <h3 className='label' >Civic Engagements</h3>

                        <ul className="c">
                            {civicInvolvement.map((position) => <li>{position.role}</li>)}
                        </ul>
                    </Box>

                    <Box
                        sx={{
                            marginBottom: 2,
                            width: '50rem',
                            paddingLeft: 2,
                            paddingRight: 1,
                            paddingTop: 2
                        }}
                    >
                        <section className='founder-section'>
                            Andrew Harrison is a well-known and distinguished lawyer with extensive experience in
                            criminal litigation and conflict resolution. In 2001, he earned certification as a
                            mediator, and in 2003, he added certification for mediating custody and visitation
                            disputes. Since that time, he has successfully served on numerous lists that have been
                            appointed by and approved by the courts in Arkansas and the Ontario region.
                            <p></p>
                            Andrew has had a great deal of success mediating a range of cases involving personal injury,
                            workers' compensation, insurance law, employment discrimination, contract and real estate
                            disputes, and other legal issues. He credits his job as a mediator for some of his
                            achievements.
                            <p></p>
                            The maxim that "the greatest way to get your day in court is to stay out of court" is a
                            noteworthy one that guides his behavior. Due to the passion and conviction he gives to
                            every mediation he conducts, it is clear that he is a staunch supporter of mediation and
                            all other types of ADR.
                            <p></p>
                            Mr. Andrew concentrates on litigating complex air concerns, such as utility and greenhouse
                            gas regulation. He is quite knowledgeable with the National Environmental Protection Act,
                            the Comprehensive Environmental Response, Compensation, and Liability Act, the Clean Water
                            Act, the Clean Air Act, and the Resource Conservation and Recovery Act. Nearly every area
                            of stationary source air pollution reduction is covered in his air pollution counseling
                            sessions.
                            <p></p>
                            He has advocated for business on a wide range of mobile source issues, including
                            those relating to fuel efficiency standards, gray market vehicle importation, motor vehicle
                            emissions standards, climate change issues, low emission vehicle requirements, emissions
                            taxation, stage II vapor recovery requirements, and reformulated fuels.
                            <p></p>
                            Additionally, Andrew Harrison has testified as an expert witness on matters relating to
                            federal preemption under Title II of the Clean Air Act, the jurisdictional reach of the
                            Clean Air Act, and the effect of environmental regulations on applications for
                            hydroelectric power. His representation of the auto industry in the U.S. Supreme Court
                            cases Massachusetts v. EPA (2007) and Engine Manufacturers Assn. v. South Coast Air
                            Quality Management District (2003) stands out among his many accomplishments.
                            <p></p>
                            Andrew Harrison and Nathan C. Shapiro served as the directors of the LL.M. program in
                            environmental law at the George Washington University School of Law from 2005 to 2009.
                            He also served as the faculty editor of the ABA's Environmental Lawyer during that time.
                            In addition to being a mediator, Andrew Harrison is a part-time adjunct professor of law
                            at the University of Zurich School of Law, where he previously studied law.
                            <p></p>
                            Andrew enjoys spending time with his family and friends, playing golf and other sports,
                            watching football, baseball, and other sports, listening to music, watching movies and
                            TV, going to the theater, and engaging in a variety of other hobbies. He resides in
                            Paragould, Arkansas, and is happily married with a daughter.
                        </section>
                    </Box>
                </Box>
            </Box>

            {/* Bottom Image */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
                <img
                    width='100%'
                    src={Home}
                />
            </Box>

            <Box
                sx={{
                    padding: 3,
                    background: '#c8d8e4'
                }}
            >
                <section className='disclaimer' >
                    Disclaimer: The information on this website is not legal advice and is not intended to be.
                    We welcome your calls, letters, and electronic mail and invite you to contact us.
                    Contacting us does not establish an attorney-client relationship. Please do not send us
                    any confidential information until we have established a lawyer-client relationship. Thus
                    by clicking submit, you acknowledge that you have read and understood our Privacy Policy
                    and Disclaimer.
                </section>
            </Box>
        </>
    );
}

export default HomeAbout;