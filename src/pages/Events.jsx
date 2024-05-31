import React, {useEffect} from 'react'
import LazyLoad from 'react-lazyload';

const Events = () => {

    useEffect(() => {
        document.title = "Events - Tallinn University HCI Hub";
      }, []);

    const data = [
        {
            img: './images/IMG-20231128-WA0011.jpg',
            heading: 'World Usability Day Estonia',
            date: 'November 24, 2023',
            location: 'Kultuurikatel/Creative Hub',
            description: 'World Usability Day Estonia (WUD) is an annual UX-, web- and interaction design conference, the largest in the Baltics.WUD 2023 will provide a platform for professionals to network, share experiences, and build connections with like-minded individuals who are passionate about UX.',
            btnLink: 'https://wud.ee/'
        },
        {
            img: './images/mikael-kristenson-3aVlWP-7bg8-unsplash.jpg',
            heading: 'Annual ACM CHI Conference',
            date: 'April 23-28 , 2023',
            location: 'Hamburg, Germany',
            description: 'The ACM CHI Conference on Human Factors in Computing Systems is the premier international conference of Human-Computer Interaction (HCI). CHI – pronounced ‘kai’ – annually brings together researchers and practitioners from all over the world and from diverse cultures, backgrounds, and positionalities, who have as an overarching goal to make the world a better place with interactive digital technologies',
            btnLink: 'https://chi2024.acm.org/'
        },
        {
            img: './images/antenna-ZDN-G1xBWHY-unsplash.jpg',
            heading: 'UX 360 Summit & Conference',
            date: 'May 16-17, 2024',
            location: 'Berlin, Germany',
            description: 'UX360 will showcase the latest UX and design research - from planning and conducting, to analysis and the implementation of UX insights. This exciting conference includes presentations from global thought leaders and international brands, interactive panel discussions and 1-2-1 meetings. This is a must-attend conference for UX researchers to learn, be inspired and to network with peers.',
            btnLink: 'https://www.ux360summit.com/'
        },
        {
            img: './images/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg',
            heading: 'HCI Interaction Design Presentation',
            date: 'December 14, 2023',
            location: 'Tallinn University',
            description: 'The idea behind this presentation day is to showcase the projects our students have been collaboratively working on as a group during this semester, addressing real industry challenges and applying their skills and expertise acquired during one and a half years of training in the HCI program.',
            btnLink: 'https://www.tlu.ee/en/dt/news/dti-human-computer-interaction-group-will-help-taltech-facilitate-human-robot-interaction'
        },
    ]
    return (
        <section className="events-container">

            {/*  Flex-box containers done in lecture 5   */}

            {data.map((item, index) => (
                <div className="event-container" key={index}>
                    <div className="event-image">
                        <LazyLoad height={200} once>
                            <img src={item.img} alt={'Event '+{index}+' Image'} />
                        </LazyLoad>
                    </div>
                    <div className="event-details">
                        <h3>{item.heading}</h3>
                        <p>Date: {item.date}</p>
                        <p>Location: {item.location}</p>
                        <p>Description: {item.description}</p>
                        <a href={item.btnLink} className="cta-button">Learn More</a>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default Events
