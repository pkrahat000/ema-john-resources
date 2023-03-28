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

    //* show data from local strg by id
    useEffect(()=>{
        // console.log(products)
        //? useEffect je jar moto data load kore because useEffect synchronous process mane na. first a products default value empty array [ ]. fetch data anar age second useEffect kaj ses kore dei tai products are data pore load hoy tai products data pay na. dependency call korle products jotobar change hobe totobar useEffect kaj kore.

        /* first time local storage are data are id and quantity ke for in loop chaliye id gulake pabo. id diye product find korbo. product are moddhe quantity ke local storage are quantity diye set korbo. product gulake akta array are moddhe rakhbo. and ai array kei setCard are moddhe rakhbo. */

        const storedCard = getShoppingCart()
        const savedCard = [];
        // 1. get id from getShoppingCart()
        for(const id in storedCard){
            // 2. get product from products by using id
            const saveProduct = products.find(product => product.id === id )
            if(saveProduct){                     //? if na dile error ase for first time [ ]
                // 3. add quantity
                const quantity = storedCard[id]
                saveProduct.quantity = quantity;
                // 4. added product to the set savedCard
                savedCard.push(saveProduct)        //? array amader banano tai push hoy.
                // console.log(saveProduct)
            }
        }
        // 5. set card
        setCard(savedCard)
    },[products])

    /* Card first time array cilo. local storage a object hisebe set korche. object are moddhe id and quantity ase. */


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
            <div>
                    <Card card={card}></Card>
            </div>
          </div>
        </>
    );
};

export default Shop;