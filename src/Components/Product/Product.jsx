import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.products
    // console.log(props.products)
    return (
        <div className='product-contant'>
            <img className='product-img' src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price : ${price}</p>
            <p className='product-seller'>Manufacturer : {seller}</p>
            <p className='product-ratings'>Rating : {ratings} start</p>
        </div>
    );
};

export default Product;