import React, { useState } from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props.card)
    const cards = props.card

    let total = 0
    let totalShipping = 0
    for(const product of cards){
         total = total + product.price
         totalShipping = totalShipping + product.shipping
         
    }
    const tax = total*7/100
    const grandTotal = total + totalShipping + tax

        // const totalPrice = price + setPrice

    return (
            <div>
                <div className='card'>
                <h4>Order summary</h4>
                <p>Selected items : {cards.length}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shipping Charge : ${totalShipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <p>Grand Total : ${grandTotal.toFixed(2)}</p>
                </div>
            </div>
    );
};

export default Card;