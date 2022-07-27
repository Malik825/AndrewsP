import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Box from '@mui/material/Box';
import Badge from './badge2.png'


const testimonials = [
    {
        name: "Paulina (May-25-2022)",
        testimony: "My experience with Joyce Barney was exceptional. I've dealt with several lawyers in my time and none have ever devoted the time that Joyce Barney did. Over the last five and a half years, Joyce worked after hours and on weekends as needed and continuously kept me in the loop of what was going on. I am happy to say that my case is done now.I would definitely say Joyce is the best lawyer I have ever worked with. Thanks Joyce!"
    },
    {
        name: "Daniel Barnes (Apr-15-2022)",
        testimony: "I was referred by a different lawyer to contact Paul Dimitrov of this law firm. Right from the start of the consultation, Paul garnered a strong, positive first impression because he is informative, direct, and honest. He gave me the straight facts. \"The golden rule applies here,\" and \"treat others as you would like to be treated.\" I felt comforted but impressed by his knowledge as a straight shooter. One could not deny his genuine opinion. So if you're looking for integrity, someone you want to lean on and trust, you contacted the right lawyer and the right law firm."
    },
    {
        name: "Rosalinda (Feb-10-2022)",
        testimony: "Recently, circumstances beyond my employer's control resulted in the need for negotiation for future employment with my present employer. Kathy Howell was extremely easy to talk to, very knowledgeable, compassionate and focused on the details, resulting in the need for negotiation. Her guidance and perspective on the matter at hand gave me peace of mind and put clearly into perspective what both I and the company thought of each other. I am happy to say that with Kathy's recommendations for the negotiating process, I was able to secure a contract that worked for both myself and the company. I would most certainly use Kathy again should the need arise."
    },
    {
        name: "Margarita Savala (Dec-22-2021)",
        testimony: "Mr. Andrew Harrison was a lawyer recommended to us, and we used his services and helped with mine and my husband's ICBC cases (car accidents we had a few years ago). Andrew always responded promptly to all our questions and concerns, and was very clear and concise in explaining the whole process and what to expect. He was supportive and guided us through the complex process. He fought hard to protect our rights and get us compensation for immediate and long-term health concerns due to the car accident. His charges are reasonable compared to other lawyers and to the good quality work and results you'll benefit from.He is also efficient in referring business to his colleagues, who specialize in certain aspects of law, if he is not able to service your needs.We would highly recommend Andrew for all of your legal needs!"
    },
    {
        name: "Kenneth Hoopson (Dec-10-2021)",
        testimony: "Kathy Howell of Andy & Harri PLLC was very helpful and professional.The expertise and advice given were on point.I did not have any negative experience whatsoever, and my case was negotiated to a fair settlement. I highly recommend Andy & Harri PLLC for your legal needs."
    },
    {
        name: "Kevin Wittwer (Nov-10-2021)",
        testimony: "I got into an accident back in 2016 and I decided to get a lawyer because I have dealt with ICBC in the past and they were just very aggressive and it made my anxiety go through the roof. The first thing I noticed when I met with Andrew and his law firm was that they made me feel right at home and he just seemed very trustworthy. I come from a lower income family, so knowing that the law firm was going to help me with medical expenses during this whole time was a huge load off my shoulders financially and made the whole process that much better. I never felt through this whole time that Andrew was in it for a quick buck.He's a genuine good person and I would highly recommend anyone to him if they're in need. If there are more stars than five, I would give them. His assistant, Kathy, is also amazing, and I couldn't have asked for a better experience."
    },
    {
        name: "John Palmer (Oct-20-2021)",
        testimony: "Paul Dimitrov has been a great lawyer.Very professional, able to explain things clearly, helps clients understand the various processes through our legal system.His paralegal, Kathy Howell, is so organized, kind, and considerate; she helps make the process smooth. I have been very pleased with the two of them and highly recommend them."
    },
    {
        name: "Anna Rodgers (Oct-19-2021)",
        testimony: "Matt Sanchez is a skilled negotiator, and I felt very assured that my claim was in his capable hands. He was responsive to my queries and always forward-thinking. He is a trustworthy lawyer with great integrity. Thanks to Kathy, as well, who was communicative and proactive with my file.I highly recommend his legal services."
    },
    {
        name: "Nathan Greenish (Oct-16-2021)",
        testimony: "I have been using Andy & Harri PLLC for a couple of years and have appreciated their attention to detail, communication, and transparency. They’ve been helpful in navigating corporate setup as a small business owner. Thanks!"
    },
    {
        name: "Carlos Martinez (Oct-14-2021)",
        testimony: "Andrew Harrison was my lawyer and honestly, I wouldn’t have wanted it any other way as an international lawyer.He handled my case with care and diligence.Andrew Harrison was always available with any questions or concerns that I had.I am more than satisfied with the outcome of my human rights case.Firm lawyers helped me through the hardest time of my life and I will be forever grateful."
    },
    {
        name: "Frank Fords (Oct-14-2021)",
        testimony: "As a small business owner I know that there is a lot that I don't know around the legalities of running a business. So I was pleased that Andrew Harrison had advised me that I needed a particular kind of contract drawn up. During the interview process where I was asked questions to create the contract, I could see the wisdom of what we were doing. He addressed all my questions and presented the contract in a timely manner. The contract that he wrote up for me has been through a couple of subsequent professionals who have commented on its solidity, and also on the wisdom and foresight that I had in drawing this contract up in the first place. I've been so pleased to say that it really wasn't me, it was my legal quarterback team, Thanks to the firm."
    },
    {
        name: "Sue Renald (Oct-01-2021)",
        testimony: "We had some commercial dealings with Joyce. She provided outstanding service. Her promptness and careful interaction with us won our hearts. Without a doubt, we would carry on working with Joyce.\""
    },
    {
        name: "Scott Colton (Aug-27-2021)",
        testimony: "I have an issue with noisy neighbours that has been ongoing for 5 years.The lack of assistance from the city is truly unbelievable.I contacted Paul and he did some valuable background work and saw me today to map out a strategy.My cost so far is $0.00.Though I am not a huge client I was treated with courtesy and respect.I will never use another law firm again."
    },
    {
        name: "Clifford Molton (Jul-28-2021)",
        testimony: "Andrew performed superbly. He always stayed in touch. He is detail-oriented, honest, direct, and trustworthy, and he presents compelling arguments. I wholeheartedly endorse Andrew."
    },
    {
        name: "Martin Nuke (Jul-28-2021)",
        testimony: "At a difficult moment, Matt was incredibly professional and caring in expediting the probate of my will."
    },
    {
        name: "Jimmy Forson (Jul-28-2021)",
        testimony: "I met with Andrew in the fall of 2015 when I was involved in a MVA.From the first day he and his team made me feel at ease in a situation that was uneasy and difficult to navigate .Andrew abs his team were always attentive to me when I would reach out with questions, handling all my legal needs and making sure I was fully taken care of .I didn't feel like I needed to worry because I knew my case was safe in their capable hands . I have recommended Andrew to a few friends , they are definitely my go to for any legal needs :)"
    },
    {
        name: "Kent Thomas (Jul-14-2021)",
        testimony: "My experience with Paul was amazing.It was my first examination of discovery so I was very nervous walking into the meeting, but Paul ensured that I was equipped with all the knowledge and tips necessary to complete it successfully.Not only was Paul informative, he was able to provide me with advice and tips that helped me remain calm throughout the questions.Additionally, he was very kind and had a genuine desire to help me, which is something I value as a client.I highly recommend Paul for your legal needs, he is professional, knowledgeable, and more than qualified!"
    },
    {
        name: "Yves Cote (Jun-28-2021)",
        testimony: "I must say that Joyce Barney's advice was extremely helpful. It was extremely informative and beneficial in dealing with WCB in Canada. Rarely do attorneys go out of their way to help someone in a bind before a major corporation. Andy and Harri PLLC Thank you so much for your assistance."
    },
    {
        name: "Kevin Brentford (Jun-15-2021)",
        testimony: "Paul and his colleagues are outstanding. He really puts his clients first and is a very informed, helpful, and compassionate professional. His counsel assisted me in quickly reaching an amicable resolution with my previous employment. I will not hesitate to recommend Paul and his staff to anyone in need of employment legal services."
    },
    {
        name: "Frank Fords (Oct-14-2021)",
        testimony: "As a small business owner, I know that there is a lot that I don't know about the legalities of running a business. So I was pleased that Andrew Harrison had advised me that I needed a particular kind of contract drawn up. During the interview process where I was asked questions to create the contract, I could see the wisdom of what we were doing. He answered all my questions and presented the contract in a timely manner. The contract that he wrote up for me has been through a couple of subsequent professionals who have commented on its solidity and also on the wisdom and foresight that I had in drawing this contract up in the first place. I'm so pleased to say that it really wasn't me; it was my legal quarterback team. Thanks to the firm."
    },
    {
        name: "Kevin Brentford (Jun-15-2021)",
        testimony: "Paul and his team are exceptional. He is such a knowledgeable, responsive, and caring professional who really puts his clients first. His advice helped me quickly reach a satisfactory agreement with my previous employer. I will not hesitate to recommend Paul and his team to anyone that needs employment attorney service."
    },
    {
        name: "Samuel Kumar (Jun-12-2021)",
        testimony: "I just wanted to share my experience with the firm. I would like to express my immense gratitude to Joyce Barney. She took the time out to help my father when he really needed it, and the both of us greatly appreciated it. Whether you happen to require the services of a law office, fortunately or not. I would highly recommend this firm and Joyce Barney."
    },
    {
        name: "Charity Goodman (May-2-2021)",
        testimony: "Whoever it may concern Andrew was my lawyer for a motor vehicle accident I endured in 2017 until my settlement in 2021. I have never had to experience such a life-changing event in my life. Andrew explained to me during my first meeting with him that I needed to first focus on healing myself. He would be in touch as to my progress, and he was. Andrew is a thorough and competent professional. I always felt he had my best interests in mind. He dealt with ICBC for me, which allowed me the freedom to take care of my health while he took care of my legal concerns. I found his assistant, Kathy Howell, to be a very pleasant professional and quick to reply to my calls or emails. They make a great team, and I truly felt confident I had the right professionals taking care of my case. Andrew was honest and transparent in all of our dealings and explained the legal processes we encountered. I would not hesitate to recommend Andrew to anyone who is in need of a Personal Injury Lawyer. You will not be disappointed. Thank-you, Andrew and Joyce. It has been a pleasure. You both made a difficult process a lot easier for me. "
    },
    {
        name: "Norman (May-02-2021)",
        testimony: "Kudos to Joyce for helping me out with the estate purchase. Joyce is very knowledgeable and answered all questions I had during my purchase of a new home. I would recommend her for any of your legal matters. Kudos to Joyce Barney. I will be incorporating my business soon and will be going to this firm."
    },
    {
        name: "Keisha Holman (Apr-04-2021)",
        testimony: "It was an absolute pleasure to work with such a professional and dedicated group during the pandemic. Much thanks to Mr. Andrew Harrison and co!"
    },
    {
        name: "Khan (Apr-01-2021)",
        testimony: "Matt Sanchez was an amazing advisor for me and my partners. We required a tax-effective structure for a real estate transaction, and we were quite perplexed before we met with Matt Sanchez. He quickly and methodically guided us through the structure she put together, and we could not be happier. It resulted in all of the partners saving significantly on taxes versus what our previous lawyer advised. He worked hand in hand with our accountant, which was above and beyond. They worked together, and it was such a great experience that we will be sticking with Matt Sanchez for good. Thank you, Matt Sanchez and all of the Andy & Harri PLLC team!"
    },
    {
        name: "William Mills (Feb-20-2021)",
        testimony: "Paul was an absolute blessing. He is absolutely the most compassionate lawyer I’ve ever known. His patience and ability to really dive into my actual emotions about what I’ve been dealing with was pretty outstanding. If you’re wondering who to hire next, don’t worry, you are safe with him!"
    },
    {
        name: "David Newman (Feb-01-2021)",
        testimony: "Kathy Howell and her team helped me out and walked me through every step of the way. It took the time to go above and beyond in every aspect of what I needed to have done. I'd highly recommend them to anyone who needs legal help in the future! I want to add, I had the firm assist my stepbrother in Europe and the firm delivered successfully."
    },
    {
        name: "Anthony (Jan-04-2021)",
        testimony: "When I think of Paul Dimitrov, Andrew Harrison, and the legal support team at Andy & Harri PLLC Lawyers, I think of professional, results-driven, action-oriented, responsive, and thorough. Before Paul and Andrew agreed to take over my ICBC personal injury case, I had been working with another lawyer for nearly 4 years. When compared to my previous representation, I immediately noticed a significant difference in terms of communication and efforts, and with very little time to meet all-important deadlines for the submission of evidence pertaining to my injuries. My friends Paul and Andrew were able to quickly organize a slew of independent medical examinations, which proved critical to the success of my claim and subsequent settlement They were also able to identify the specialized medical professionals required to provide thorough and relevant assessment and diagnoses based on the nature of my injuries. They were also able to complete in months what would normally take months or even years. I am pleased with the outcome of my settlement and am able to move on with my life thanks to the efforts of this dynamic duo! I hope I never need their services again, but if I do, I will definitely seek their assistance for my legal needs."
    },
    {
        name: "Harman (Dec-14-2020)",
        testimony: "Great service! Andrew Harrison really knows his real estate related facts."
    },
    {
        name: "Mary (Nov-11-2020)",
        testimony: "We use the firm for corporate matters and are very pleased with their service. They're always responsive, thorough, and efficient. We recommend them to any business we know. Thank you!"
    },
    {
        name: "Denise McCarthy (Nov-02-2020)",
        testimony: "It is very professional and helpful working with Lawyer Andrew Harrison as my international lawyer here in Belgium!!!"
    },
    {
        name: "Mark (Nov-01-2020)",
        testimony: "We had real estate transactions handled by this firm, and were very impressed by the responsiveness and efficiency of the lawyers (Paul) and staff, as well as the great prices. I will continue to call them first for any transactions or issues. Thank you!"
    },
    {
        name: "S Home (Oct-22-2020)",
        testimony: "Joyce Barney really helped us with our share purchase agreement and subsequent financing. She made sure we knew our risks and represented us well in our negotiations with the other side. Thanks Joyce."
    },
    {
        name: "Glen (Oct-16-2020)",
        testimony: "This is one of my top choices to refer my clients to for real estate purchases and sales. They are professional, efficient, and courteous. I would definitely recommend them."
    },
    {
        name: "Stephanie Guthrie (Jun-10-2020)",
        testimony: "I was a client of Joyce Barney’s from 2013–20219 and am now handling another case in 2020. During that time, she was very consistent the whole way through. Joyce was always genuinely professional. She was very relatable, making it very easy to talk to her and ask every question I needed answered. I was suffering from a very bad concussion. I thought Joyce made everything simple for me to understand, providing great guidance. I highly recommend her."
    },
    {
        name: "Eric Young (Jan-28-2020)",
        testimony: "After writing the original review in May 2018, this branch office continues on strong and my words have not changed, with... Proven Trust and words like honest, fair, integrity, and lawyer, all in the same sentence. Going into years of using this firm, after a dozen or more different transactions, this office (principal) and staff do a great job. Proven trust is hard to find. A friend introduced me to Andy & Harri PLLC, and I am staying with them. Thank you."
    },
    {
        name: "Ashley Young (Jan-16-2020)",
        testimony: "From the first correspondence we had with Paul Dimitrov on an employment matter, we knew we were in the right hands. Paul is always professional, and his calm, confident demeanor continued to impress us throughout the process. We highly recommend Paul and his team!"
    },
    {
        name: "Aly Morata (Nov-29-2019)",
        testimony: "I was directed to Paul Dimitrov to assist with wrongful termination and severance negotiations. Paul went out of his way to ensure I understood applicable laws and process and helped me to negotiate a much better settlement than I was originally offered. Paul is highly recommended and is now my go-to lawyer for all employment-related needs. Paul was even kind enough to review a new offer from another employer and ensure I didn’t end up in a similar situation to the one I had with my last employer. Being proactive is the name of the game, and understanding employment law can be a huge challenge. If you have questions or concerns regarding your employment situation, look no further than Paul at Andy & Harri PLLC!!"
    },
    {
        name: "Allan McInnes (Nov-08-2019)",
        testimony: "I cannot recommend Matt Sanchez of Andy & Harri PLLC enough to anyone seeking help with employment matters. Despite being handed a difficult situation, Matt was successful on my behalf. At all times, he and his staff were responsive, caring, and professional in their manner and approach. His briefs are concise, articulate, and effective in bringing the key issues into focus for all parties. I’m incredibly grateful for his work on my behalf and recommend him without reservation to anyone needing help with employment law."
    },
    {
        name: "Rajwant Veer (Oct-28-2019)",
        testimony: "Our lawyer, Andrew Harrison, was a great help in our case. He is a very nice person, a gentle talker, and we are pleased with the service he provided. He got us a fair amount, which we are very pleased with. He is such a humble and nice person. He was very easy to deal with. He fought our case until we were satisfied with the amount offered. We felt very comfortable talking to him, and he is very friendly as well."
    },
    {
        name: "Brad Kent (Sep-21-2019)",
        testimony: "We hired Paul Dimitrov to complete our employment contracts. He worked with us to customize the agreement to our needs and had the whole thing wrapped up in less than two weeks. He was great to work with."
    },
    {
        name: "Moris Dickash (Dec-23-2018)",
        testimony: "David and Cornelius are the best. Always very helpful."
    },
    {
        name: "Steve Williams (Jan-3-2018)",
        testimony: "The best lawyers I've ever worked with. Tammy from Sinclairs Motorsports Wholesale sent me here. Best advice I've received in a long time. Thanks guys."
    }
]


function Testimonial() {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
            <Box
                sx={{
                    width: '25rem',
                    paddingLeft: 3,
                    marginBottom: 3,
                    // paddingTop: 3,
                    fontFamily: 'Garamond',
                    color: '#234d58',
                    fontSize: 25,
                    paddingLeft: 10,
                    paddingRight: 10,
                    textAlign: 'center',
                    fontWeight: 500
                }}
            >
                <img
                    src={Badge}
                />
                <section className='home-slogan'>
                    Andy & Harri PLLC provides high-quality and comprehensive legal services
                </section>
            </Box>
            
            <Box sx={{
                width: '55rem',
                paddingBottom: 3,
                paddingTop: 3,
            }}>
                <List sx={{
                    width: '100%',
                    // bgcolor: lime[50],
                    paddingLeft: 2,
                    paddingRight: 3,
                }}>
                    {
                        testimonials.map((item) => (
                            <>
                                <ListItem
                                    key={item}
                                    disableGutters
                                >
                                    <ListItemAvatar>
                                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                                    </ListItemAvatar>

                                    <ListItemText
                                        primary={item.name}
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
                                                {item.testimony}
                                            </Typography>
                                        </React.Fragment>} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </>
                        ))}
                </List>
            </Box>
        </Box>
    );
}

export default Testimonial;