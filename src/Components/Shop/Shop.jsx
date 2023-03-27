import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
                <h2>Available Products : {products.length}</h2>
          <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => 
                    <Product products={product}></Product>)
                }
            </div>
            <div className='card-container'>
                <h4>Order summary</h4>
            </div>
          </div>
        </>
    );
};

export default Shop;