import React from 'react'

const Events = () => {
  return (
    <section className="events-container">
    <h2></h2>

    {/*  Flex-box containers done in lecture 5   */}
    
    <div className="event-container">
        <div className="event-image">
            {/* <img src="images/IMG-20231128-WA0011.jpg" alt="Event 1 Image" /> */}
        </div>
        <div className="event-details">
            <h3>World Usability Day Estonia </h3>
            <p>Date: November 24, 2023</p>
            <p>Location: Kultuurikatel/Creative Hub </p>
            <p>World Usability Day Estonia (WUD) is an annual UX-, web- and interaction design conference, the largest in the Baltics.
                WUD 2023 will provide a platform for professionals to network, share experiences, and build connections with like-minded individuals who are passionate about UX.</p>
            <a href="https://wud.ee/" className="cta-button">Learn More</a>
        </div>
    </div>

    <div className="event-container">
        <div className="event-image">
            {/* <img src="images/mikael-kristenson-3aVlWP-7bg8-unsplash.jpg" alt="Event 2 Image" /> */}
        </div>
        <div className="event-details">
            <h3>Annual ACM CHI Conference</h3>
            <p>April 23-28 , 2023</p>
            <p>Location: Hamburg, Germany</p>
            <p>Description:The ACM CHI Conference on Human Factors in Computing Systems is the premier international conference of Human-Computer Interaction (HCI). CHI – pronounced ‘kai’ – annually brings together researchers and practitioners from all over the world and from diverse cultures, backgrounds, and positionalities, who have as an overarching goal to make the world a better place with interactive digital technologies</p>
            <a href="https://chi2024.acm.org/" className="cta-button">Learn More</a>
        </div>
    </div>

    <div className="event-container">
        <div className="event-image">
            {/* <img src="images/antenna-ZDN-G1xBWHY-unsplash.jpg" alt="Event 1 Image" /> */}
        </div>
        <div className="event-details">
            <h3>UX 360 Summit & Conference</h3>
            <p>Date: 16-17 May, 2024</p>
            <p>Location: Berlin, Germany</p>
            <p>UX360 will showcase the latest UX and design research - from planning and conducting, to analysis and the implementation of UX insights. This exciting conference includes presentations from global thought leaders and international brands, interactive panel discussions and 1-2-1 meetings. This is a must-attend conference for UX researchers to learn, be inspired and to network with peers.</p>
            <a href="https://www.ux360summit.com/" className="cta-button">Learn More</a>
        </div>
    </div>

    <div className="event-container">
        <div className="event-image">
            {/* <img src="images/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg" alt="Event 2 Image" /> */}
        </div>
        <div className="event-details">
            <h3>HCI Interaction Design Presentation</h3>
            <p>Date: December 14, 2023</p>
            <p>Location: Tallinn University</p>
            <p>The idea behind this presentation day is to showcase the projects our students have been collaboratively working on as a group during this semester, addressing real industry challenges and applying their skills and expertise acquired during one and a half years of training in the HCI program.</p>
            <a href="https://www.tlu.ee/en/dt/news/dti-human-computer-interaction-group-will-help-taltech-facilitate-human-robot-interaction" className="cta-button">Learn More</a>
        </div>
    </div>


</section>
  )
}

export default Events
