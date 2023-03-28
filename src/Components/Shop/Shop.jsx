import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
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

    useEffect(()=>{
        // console.log(products)                    //^ products are data pore load hoy tai dependancy te products call kore deya hoy jano products load hote pare. dependancy data jotobar load hobe totobar call korbe
        const storedCard = getShoppingCart()
        const savedCard = [];
        // console.log(storedCard)
        for(const id in storedCard){
            // console.log(id)

            const saveProduct = products.find(product => product.id === id )
            // console.log(saveProduct)

            
            if(saveProduct){
                const quantity = storedCard[id]
                saveProduct.quantity = quantity
                savedCard.push(saveProduct)
                // console.log(saveProduct)
            }
        }
        setCard(savedCard)
    },[products])
    /* Card first time array cilo. local storage a object hisebe set korche. object are moddhe id and quantity ase. */

    /* first time local storage are data are id and quantity theke for in loop chaliye id gulake pabo. id diye product find korbo. product are moddher quantity ke local storage are quantity diye set korbo. product gulake akta array are moddhe rakhbo. and ai array kei setCard are moddhe rakhbo.  */

    function AddToCardHandler(products){
        const newCard = [...card, products]
        setCard(newCard)
        addToDb(products.id)
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