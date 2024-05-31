import React from 'react'

const Product = props => {
    const arrayOfObjects = props.data;
    return (
        <div className="product-list" id="product-list">
            {arrayOfObjects.map((item, index) => (
                <div className="product" key={index}>
                    <img src={item.img} alt={item.item} />
                    <div className="p-details">
                        <h2>{item.item}</h2>
                        <h3>€{item.price} </h3>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default Product
