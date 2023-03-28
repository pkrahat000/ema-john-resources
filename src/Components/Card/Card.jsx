import './Card.css'
const Card = ({card}) => {                //? option - 3 Destructuring
    // const cards = props.card           //? option - 1
    // const {card} = props               //? option - 2 Destructuring
    // console.log(card)                  //? all local strg data show inside arry like object
    //* Total Price & Shipping data show
    let total = 0
    let totalShipping = 0
    for(const product of card){            //? array like object for in loop a id return kore.
         total = total + product.price
         totalShipping = totalShipping + product.shipping  
        }
    //* tax & grandTotal data show
    const tax = total*7/100
    const grandTotal = total + totalShipping + tax

        // const totalPrice = price + setPrice

    return (
            <div className='card'>
                <h4>Order summary</h4>
                <p>Selected items : {card.length}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shipping Charge : ${totalShipping}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            </div>
    );
};

export default Card;