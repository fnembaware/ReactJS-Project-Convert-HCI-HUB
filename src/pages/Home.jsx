import React, {useEffect} from 'react'
import Highlights from '../components/Highlights';
import LazyLoad from 'react-lazyload';

const Home = () => {

  useEffect(() => {
    document.title = "Home - Tallinn University HCI Hub";
  }, []);

  const data = [
    { event: 'Upcoming Events', description: 'Stay updated on the latest events in the field of HCI.' },
    { event: 'Featured Speakers', description: 'Learn from industry experts and thought leaders.' },
    { event: 'Meetup Rooms', description: 'Connect with like-minded individuals in our meetup spaces.' },
    { event: 'Networking Opportunities', description: 'Expand your network within the HCI community.' },
    { event: 'Mentoring Program', description: 'Engage in mentorship to enhance your HCI journey.' },
    { event: 'Hub Blog', description: 'Explore insightful articles and updates in our blog section.' },
  ];
  return (
    <>
      <section id="about-us">
        <div className="index-container">
          <h2>About Us</h2>
          <p>Welcome to the Tallinn University Human-Computer Interaction Hub! Our mission is to provide a vibrant platform for HCI enthusiasts, students, and professionals to connect, learn, and thrive. Explore the exciting world of HCI with us!</p>

          <p>At the heart of our community is a commitment to collaborate, innovate, and share knowledge. We believe in the power of human-computer interaction to shape the future of technology and enhance the way we live and work.</p>

          <p>Our diverse community includes students, researchers, industry professionals, and anyone passionate about HCI. Whether you're just starting your journey in HCI or are an experienced practitioner, there's a place for you in our hub.</p>

          <p>Join us in creating a dynamic environment where ideas are exchanged, skills are honed, and meaningful connections are made. Together, let's push the boundaries of HCI and make a positive impact on the world.</p>
          <LazyLoad height={200} once>
            <img src="./smartworks-coworking-cW4lLTavU80-unsplash.jpg" alt="About Us Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </LazyLoad>
        </div>
      </section>

      <Highlights data={data} />
    </>
  )
}

export default Home
