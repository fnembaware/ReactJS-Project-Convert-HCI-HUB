import React,{useEffect} from 'react'

const Blog2 = () => {

    useEffect(() => {
        document.title = "Blog2 - Tallinn University HCI Hub";
      }, []);

    return (
        <header>
            <h1>Blog 2</h1>
            <p>Design Thinking and Gererative Research Workshop</p>
        </header>
    )
}

export default Blog2
