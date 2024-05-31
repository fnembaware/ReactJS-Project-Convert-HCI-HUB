import React,{useEffect} from 'react'

const Blog3 = () => {

    useEffect(() => {
        document.title = "Blog3 - Tallinn University HCI Hub";
      }, []);

    return (
        <header>
            <h1>Blog 3</h1>
            <p>Collaboration Sessions</p>
        </header>
    )
}

export default Blog3
