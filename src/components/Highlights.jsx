import React from 'react'

const Highlights = props => {
    const arrayOfObjects = props.data;
    return (
        <section id="highlights">
            <div className="index-container">
                <h2>Highlights</h2>

                {arrayOfObjects.map((item, index) => (
                    <div className="highlight" key={index}>
                        <div className="highlight-content">
                            <h3>{item.event}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Highlights
