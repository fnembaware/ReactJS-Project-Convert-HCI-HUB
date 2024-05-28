import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials">
    <h2>What Event Attendees Say</h2>
    <div className="row">
        <div className="testimonial-col center">
            <img id="person-img" src="images/student1.jpg" alt="Student Avatar" />
            <div>
                <p id="comment">Attending HCI events here has broadened my perspective and inspired my design projects. It's a fantastic learning experience!</p>
                <h3 id="reviewAuthor">Emily Johnson</h3>
                <p id="job">Computer Science Student</p>
                
                {/*  Prev Next buttons  */}
                <button className="prev-btn">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button className="next-btn">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
    <button className="random-btn btn">Random Testimonial!</button>
</section>
  )
}

export default Testimonials
