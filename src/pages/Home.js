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
        title='AHOUDY Double Din Car Stereo Voice Control'
        price={118.60}
        rating={3}
        image='https://m.media-amazon.com/images/I/717QUFs9qLL._AC_SX679_.jpg'
       />
        <Product 
       id='12345'
        title='SAMSUNG Galaxy Watch 4'
        price={339.00}
        rating={3}
        image='https://m.media-amazon.com/images/I/61im3OsaksL._AC_SX679_.jpg'
       />
         <Product 
       id='12345'
        title='SINGER | 4423 Heavy Duty Sewing Machine'
        price={129.50}
        rating={3}
        image='https://m.media-amazon.com/images/I/51JFZ7U25-L._AC_SX679_.jpg'
       />
   
    </div>
    <div className='home__row'>
    <Product 
       id='12345'
        title='Net10 Alcatel TCL A3, 32GB'
        price={39.40}
        rating={3}
        image='https://m.media-amazon.com/images/I/61-fB+GkifL._AC_SX679_.jpg'
       />
        <Product 
       id='12345'
        title='LINGVIDO Leather Car Seat Covers'
        price={11.96}
        rating={3}
        image='https://m.media-amazon.com/images/I/71KSpyrF4YL._AC_SX679_.jpg'
       />
    </div>
      
    </div>
    </>
   
  )
}

export default Home