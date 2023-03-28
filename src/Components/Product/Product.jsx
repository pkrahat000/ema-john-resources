import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,name,price,seller,ratings} = props.products
    // console.log(props)
    const AddToCardHandler = props.AddToCardHandler
    // console.log(AddToCardHandler)

    return (
        <div className='product-contant'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price : ${price}</p>
            <p className='product-seller'>Manufacturer : {seller}</p>
            <p className='product-ratings'>Rating : {ratings} start</p>
            </div>
            <button onClick={()=>{AddToCardHandler(props.products)}} className='product-btn'>Add To Card <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;