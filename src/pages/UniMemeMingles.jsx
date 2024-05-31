import React, { useState, useEffect } from 'react';
const UniMemeMingles = () => {

  useEffect(() => {
    document.title = "UniMeme Mingles - Tallinn University HCI Hub";
  }, []);

  const [meme, setMeme] = useState({
    url: '',
    title: 'Loading...',
    author: ''
  });

  const generateMeme = () => {
    fetch('https://meme-api.com/gimme/wholesomememes')
      .then((response) => response.json())
      .then((data) => {
        setMeme({
          url: data.url,
          title: data.title,
          author: data.author
        });
      });
  };

  return (
    <section>
    <h2>Meme Laughs Gallery</h2>

    <div className="meme-generator">
      <button className="generate-meme-btn" onClick={generateMeme}>
        Generate Meme
      </button>
      <h4 className="meme-title">{meme.title}</h4>
      <img src={meme.url} alt="" />
      {/* <div className="meme-author">Meme by: {meme.author}</div> */}
    </div>
    
</section>
  )
}

export default UniMemeMingles
