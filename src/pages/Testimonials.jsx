import React, { useState, useEffect } from 'react';

const Testimonials = () => {

  useEffect(() => {
    document.title = "Testimonials - Tallinn University HCI Hub";
  }, []);

    const reviews = [ //array
    {
      img: "./testimonial images/allef-vinicius-C_1jjFJioWg-unsplash.jpg",
      name: "John Doe",
      job: "UX Designer",
      text: "Attending HCI Hub events has been instrumental in shaping my UX design skills. The insightful talks and networking opportunities have opened new doors for my career.",
    },
    {
      img: "./testimonial images/lau-keith-dcZsxUAAJXs-unsplash.jpg",
      name: "Jane Smith",
      job: "Software Engineer",
      text: "I've attended multiple events organized by Tallinn University HCI Hub, and each one has been a valuable learning experience. The diverse topics covered and engaging speakers make it a must-attend for anyone in the field.",
    },
    {
      img: "./testimonial images/vinicius-wiesehofer-UOavP_Z38lE-unsplash.jpg",
      name: "Alice Johnson",
      job: "Interaction Designer",
      text: "The mentoring program at HCI Hub has provided me with valuable guidance in my journey as an interaction designer. The personalized mentorship has greatly contributed to my professional growth.",
    },
    {
      img: "./testimonial images/mohammad-faruque-SpIKPT8zeAs-unsplash.jpg",
      name: "Bob Anderson",
      job: "Front-end Developer",
      text: "HCI Hub's networking opportunities have allowed me to connect with industry professionals and fellow developers. The collaborative environment fosters innovation and knowledge sharing.",
    },
    {
      img: "./testimonial images/taylor-grote-UiVe5QvOhao-unsplash.jpg",
      name: "Eva Rodriguez",
      job: "User Researcher",
      text: "As a user researcher, the featured speakers at HCI Hub have provided valuable insights into the latest trends and methodologies. It's a great platform to stay updated and connected with the UX community.",
    },
  ];

    const [index, setIndex] = useState(0);

    const { img, name, job, text } = reviews[index];

    const nextReview = () => {
        setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const randomReview = () => {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    };

    return (
        <section className="testimonials">
            <h2>What Event Attendees Say</h2>
            <div className="row">
                <div className="testimonial-col center">
                    <img id="person-img" src={img} alt="Student Avatar" />
                    <div>
                        <p id="comment">{text}</p>
                        <h3 id="reviewAuthor">{name}</h3>
                        <p id="job">{job}</p>

                        {/*  Prev Next buttons  */}
                        <button className="prev-btn" onClick={prevReview}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="next-btn" onClick={nextReview}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <button className="random-btn btn" onClick={randomReview}>Random Testimonial!</button>
        </section>
    )
}

export default Testimonials
