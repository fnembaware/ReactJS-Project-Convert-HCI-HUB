import React, { useState, useEffect } from 'react'
import Product from '../components/Product';

const UniStyleEventShop = () => {

  useEffect(() => {
    document.title = "UniStyle Event Shop - Tallinn University HCI Hub";
  }, []);

  const data = [
    { img: './Shop images/images.jpeg', item: 'HCI  t-shirts', price: '15' },
    { img: './Shop images/sneakers.webp', item: 'HCI sneakers', price: '25' },
    { img: './Shop images/cap.jpg', item: 'HCI caps', price: '5' },
    { img: './Shop images/watch.jpeg', item: 'HCI watch', price: '15' },
    { img: './Shop images/laptop cover.jpeg', item: 'HCI lap top cover', price: '30' },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container">

      <form>
        <input type="text" id="search-item" value={searchTerm} onChange={handleSearch} />
      </form>
      
      <Product data={filteredData} />
    </section>
  )
}

export default UniStyleEventShop
