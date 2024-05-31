import React,{useEffect} from 'react'

const Blog1 = () => {

    useEffect(() => {
        document.title = "Blog1 - Tallinn University HCI Hub";
      }, []);

    return (
        <header>
            <h1>Blog 1</h1>
            <p>Learn about HCI in the Easiest Way</p>
        </header>
    )
}

export default Blog1
