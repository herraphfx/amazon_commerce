import React from 'react'
import Header from '../component/Header'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <>
    <Header/>
       <div className='home'>
       <img 
       className='home__image'
       src='https://m.media-amazon.com/images/I/81YSWfTFDbL._SX3000_.jpg' alt='home' />
    <div className='home__row'>
    <Product 
       id='12345'
        title='The Lean Startup'
        price={11.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
       />
        <Product 
       id='12345'
        title='The Lean Startup'
        price={11.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
       />
        <Product 
       id='12345'
        title='The Lean Startup'
        price={11.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
       />
         <Product 
       id='12345'
        title='The Lean Startup'
        price={11.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
       />
        <Product 
       id='12345'
        title='The Lean Startup'
        price={11.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
       />
        <Product 
       id='12345'
        title='The Lean Startup'
        price={11.96}
        rating={3}
        image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
       />
    </div>
      
    </div>
    </>
   
  )
}

export default Home