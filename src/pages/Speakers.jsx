import React from 'react'

const Speakers = () => {
  return (
    <section className="speakers-container">
    <h2>Featured Speakers</h2>

    <form className="search" >
        <input type="text" id="search-input" placeholder="Search for a presenter" />
        <button id="search-button">Search</button>
    </form>

    <div className="speaker-results">
        
        <div className="speaker-result">
            <img src="https://images.unsplash.com/photo-1560523159-4a9692d222ef" alt="Speaker 1 Image" />
            <a href="https://unsplash.com/photos/woman-holding-microphone-standing-on-stage-D0rMhzEwiEA" target="_blank">HCI Trends</a> 
        </div>

        <div className="speaker-result">
            <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7" alt="Speaker 2 Image" />
            <a href="https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-wMRIcT86SWU" target="_blank">User Testing</a> 
        </div>

        <div className="speaker-result">
            <img src="https://images.unsplash.com/photo-1560439514-e960a3ef5019" alt="Speaker 3 Image" />
            <a href="https://unsplash.com/photos/mens-black-blazer-DL-yyYDDNX4" target="_blank">Trust in Technology</a> 
        </div>
        
    </div>

    <button id="show-more-button">Show more</button>
</section>
  )
}

export default Speakers

