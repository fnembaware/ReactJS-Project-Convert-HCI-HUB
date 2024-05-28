import React from 'react'

const Blog = () => {
  return (
    <>
      <section>
        <h2>Blog</h2>
      </section>

      <section id="blog-container">
        <div class="blogs">
          <div class="post">
            {/* <img src="Blog images/katja-anokhina-_7ceGXTAtyQ-unsplash.jpg" alt="https://unsplash.com/photos/a-person-holding-a-robotic-hand-in-front-of-a-mirror-_7ceGXTAtyQ"> */}
            <h3>Learn about HCI in the Easiest Way</h3>
            <p>Discover the fascinating world of Human-Computer Interaction effortlessly with our user-friendly resources and engaging content. Whether you're a novice or an experienced professional, dive into the world of HCI in the easiest way possible, unlocking insights that make learning both accessible and enjoyable</p>
            <a href="blog1.html">Read more</a>
          </div>

          <div class="post">
            {/* <img src="images/airfocus-v89zhr0iBFY-unsplash.jpg" > */}
            <h3>Design Thinking and Gererative Research Workshop</h3>
            <p>Design thinking is a human-centered problem-solving approach that emphasizes empathy, ideation, and prototyping to create innovative solutions. In a generative research workshop, participants engage in collaborative activities to explore and generate insights, fostering a creative environment that fuels the ideation phase of design processes.</p>
            <a href="blog2.html">Read more</a>
          </div>

          <div class="post">
            {/* <img src="images/brooke-cagle--uHVRvDr7pg-unsplash.jpg"> */}
            <h3>Collaboration Sessions</h3>
            <p>Collaboration in Human-Computer Interaction (HCI) involves interdisciplinary teamwork, bringing together experts from diverse fields such as design, psychology, and technology to create user-centered solutions. This collaborative approach ensures a holistic understanding of user needs and perspectives, fostering the development of more effective and inclusive interactive systems.</p>
            <a href="blog3.html">Read more</a>
          </div>
        </div>

        {/* <div class="cate">
          <h2>Categories</h2>
          <hr>
            <a href="#">Technology Trends</a>
            <hr>
              <hr>
                <a href="#">User Experience (UX)</a>
                <hr>
                  <hr>
                    <a href="#">Industry Insights</a>
                    <hr>
                      <hr>
                        <a href="#">Expert Interviews</a>
                        <hr>
                          <hr>
                            <a href="#">Case Studies</a>
                            <hr>
                              <hr>
                                <a href="#">Tool Reviews and Tutorials</a>
                                <hr>
                                </div> */}
      </section>
    </>
  )
}

export default Blog
