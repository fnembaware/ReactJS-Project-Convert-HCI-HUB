import LazyLoad from 'react-lazyload';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const accessKey = "PwYO_lHIYAHEHFxcaI3HjKJrdgYwOUfrCPmN8x7EtDg";

const Speakers = () => {

    useEffect(() => {
        document.title = "Speakers - Tallinn University HCI Hub";
    }, []);

    const data = [
        {
            urls: {
                small: 'https://images.unsplash.com/photo-1560523159-4a9692d222ef'
            },
            links: {
                html: 'https://unsplash.com/photos/woman-holding-microphone-standing-on-stage-D0rMhzEwiEA'
            },
            alt_description: 'HCI Trends'
        },
        {
            urls: {
                small: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7'
            },
            links: {
                html: 'https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-wMRIcT86SWU'
            },
            alt_description: 'User Testing',
        },
        {
            urls: {
                small: "https://images.unsplash.com/photo-1560439514-e960a3ef5019"
            },
            links: {
                html: 'https://unsplash.com/photos/mens-black-blazer-DL-yyYDDNX4'
            },
            alt_description: 'Trust in Technology',
        },
    ]

    const [inputData, setInputData] = useState("");
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(data);

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    };

    const searchImages = async () => {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            const newResults = data.results;

            if (page === 1) {
                setResults(newResults);
            } else {
                setResults([...results, ...newResults]);
            }

            setPage(page + 1);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPage(1);
        searchImages();
    };

    const loadMore = () => {
        searchImages();
    };


    return (
        <section className="speakers-container">
            <h2>Featured Speakers</h2>

            <form className="search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search for a presenter"
                    value={inputData}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            <div className="speaker-results">
                {results.map((result, index) => (
                    <div key={index} className="speaker-result">
                        <LazyLoad height={200} once>
                            <img src={result.urls.small} alt={result.alt_description} />
                        </LazyLoad>
                        <a href={result.links.html} target="_blank" rel="noopener noreferrer">
                            {result.alt_description}
                        </a>
                    </div>
                ))}
            </div>

            <button id="show-more-button" onClick={loadMore}>Show more</button>
        </section>
    )
}

export default Speakers

