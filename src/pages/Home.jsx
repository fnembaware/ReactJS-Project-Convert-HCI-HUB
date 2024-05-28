import React from 'react'

const Home = () => {
  return (
    <>
      <section id="about-us">
        <div className="index-container">
          <h2>About Us</h2>
          <p>Welcome to the Tallinn University Human-Computer Interaction Hub! Our mission is to provide a vibrant platform for HCI enthusiasts, students, and professionals to connect, learn, and thrive. Explore the exciting world of HCI with us!</p>

          <p>At the heart of our community is a commitment to collaborate, innovate, and share knowledge. We believe in the power of human-computer interaction to shape the future of technology and enhance the way we live and work.</p>

          <p>Our diverse community includes students, researchers, industry professionals, and anyone passionate about HCI. Whether you're just starting your journey in HCI or are an experienced practitioner, there's a place for you in our hub.</p>

          <p>Join us in creating a dynamic environment where ideas are exchanged, skills are honed, and meaningful connections are made. Together, let's push the boundaries of HCI and make a positive impact on the world.</p>

          {/* <img src="../smartworks-coworking-cW4lLTavU80-unsplash.jpg" alt="About Us Image" style="max-width: 100%; height: auto;" /> */}
        </div>
      </section>


      <section id="highlights">
        <div className="index-container">
          <h2>Highlights</h2>

          <div className="highlight">
            <div className="highlight-content">
              <h3>Upcoming Events</h3>
              <p>Stay updated on the latest events in the field of HCI.</p>
            </div>

          </div>

          <div className="highlight">
            <div className="highlight-content">
              <h3>Featured Speakers</h3>
              <p>Learn from industry experts and thought leaders.</p>
            </div>

          </div>

          <div className="highlight">
            <div className="highlight-content">
              <h3>Meetup Rooms</h3>
              <p>Connect with like-minded individuals in our meetup spaces.</p>
            </div>

          </div>

          <div className="highlight">
            <div className="highlight-content">
              <h3>Networking Opportunities</h3>
              <p>Expand your network within the HCI community.</p>
            </div>

          </div>

          <div className="highlight">
            <div className="highlight-content">
              <h3>Mentoring Program</h3>
              <p>Engage in mentorship to enhance your HCI journey.</p>
            </div>

          </div>

          <div className="highlight">
            <div className="highlight-content">
              <h3>Hub Blog</h3>
              <p>Explore insightful articles and updates in our blog section.</p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Home
