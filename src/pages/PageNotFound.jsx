import React, {useEffect} from 'react'

const PageNotFound = () => {

  useEffect(() => {
    document.title = "Page Not Found - Tallinn University HCI Hub";
  }, []);

  return (
    <div>
      <h1>404 page not found.</h1>
    </div>
  )
}

export default PageNotFound
