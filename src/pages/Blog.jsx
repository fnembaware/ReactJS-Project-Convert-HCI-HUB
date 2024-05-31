import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {

  useEffect(() => {
        document.title = "Blog - Tallinn University HCI Hub";
      }, []);

  const data = [
    {
      img: './Blog images/katja-anokhina-_7ceGXTAtyQ-unsplash.jpg',
      heading: 'Learn about HCI in the Easiest Way',
      description: `Discover the fascinating world of Human-Computer Interaction effortlessly with our user-friendly resources and engaging content. Whether you're a novice or an experienced professional, dive into the world of HCI in the easiest way possible, unlocking insights that make learning both accessible and enjoyable`,
      blogLink: 'blog1'
    },
    {
      img: './images/airfocus-v89zhr0iBFY-unsplash.jpg',
      heading: 'Design Thinking and Gererative Research Workshop',
      description: `Design thinking is a human-centered problem-solving approach that emphasizes empathy, ideation, and prototyping to create innovative solutions. In a generative research workshop, participants engage in collaborative activities to explore and generate insights, fostering a creative environment that fuels the ideation phase of design processes.`,
      blogLink: 'blog2'
    },
    {
      img: './images/brooke-cagle--uHVRvDr7pg-unsplash.jpg',
      heading: 'Collaboration Sessions',
      description: `Collaboration in Human-Computer Interaction (HCI) involves interdisciplinary teamwork, bringing together experts from diverse fields such as design, psychology, and technology to create user-centered solutions. This collaborative approach ensures a holistic understanding of user needs and perspectives, fostering the development of more effective and inclusive interactive systems.`,
      blogLink: 'blog3'
    },
  ];

  const categories = ['Technology Trends',
    'User Experience (UX)',
    'Industry Insights',
    'Expert Interviews',
    'Case Studies',
    'Tool Reviews and Tutorials'
  ];
  return (
    <>
      <section>
        <h2>Blog</h2>
      </section>

      <section id="blog-container">
        <div className="blogs">

          {
            data.map((item, index) => (
              <div className="post" key={index}>
                <img src={item.img} alt={index} />
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
                <Link to={'/' + item.blogLink.toLocaleLowerCase()} target='_black' >Read more</Link>
              </div>
            ))
          }

        </div>

        <div className="cate">
          <h2>Categories</h2>
          <hr />
          <hr />
          {categories.map((Categorie, i) => (
            <div key={i}>
              <a href="#"  >{Categorie}</a>
              <hr />
              <hr />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog
