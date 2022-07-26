import React from 'react'
import Header from '../component/Header'
import { useStateValue } from '../component/StateProvider'
import './Checkout.css'

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className='checkout'>
      <Header/>
      <img className='checkout__ad' src='' alt=''/>
     {basket?.length === 0 ? (
      <div>
        <h2>Your Shopping Basket is Empty</h2>
      </div>
     ) : (
      <div>
        <h2>Your Basket Empty</h2>
        <p>You have no items in your basket. To buy one or more items, click "Add to Basket" next to the item</p>
      </div>
     )}
    </div>
  )
}

export default Checkout