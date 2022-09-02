import React from 'react'
import Header from '../component/Header'
import { useStateValue } from '../component/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className='checkout'>
      <Header/>
      <img className='checkout__ad' 
      src='' 
      alt=''/>
     {basket?.length === 0 ? (
      <div>
        <h2>Your Shopping Basket is Empty</h2>
        <p>You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item</p>
      </div>
     ) : (
      <div>
        <h2 className='checkout__title'>Your Shopping Basket</h2>
        {/* List of all products */}
        {basket.map(item => {
          return (
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.price}
          />
        )
}
        )}
      </div>
     )}
    </div>
  )
}

export default Checkout