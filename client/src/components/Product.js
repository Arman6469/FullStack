import React from 'react'

export default function Product({product}) {
    return (
        <div>
            <img className="image" src={product.image} alt='avatar' height='500' />
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
        </div>
    )
}
