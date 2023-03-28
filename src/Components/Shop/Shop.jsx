import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [card, setCard] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    function AddToCardHandler(products){
        const newCard = [...card, products]
        setCard(newCard)
    }
    return (
        <>
                <h2>Available Products : {products.length}</h2>
          <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => 
                    <Product 
                    key={product.id}
                    products={product}
                    AddToCardHandler={AddToCardHandler}
                    ></Product>)
                }
            </div>
            <Card card={card}></Card>
          </div>
        </>
    );
};

export default Shop;