import { ShoppingBasket } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue} from './StateProvider'


function Sidelink() {
  const [{basket}] = useStateValue();
  return (
    <>
      <Link to='/login' className='header__link'>
      <div className='header__option'>
          <span className='header__optionLineOne'>Hello, Henry</span>
          <span className='header__optionLineTwo'>Sign In</span>
      </div>
    </Link>

<Link to='/login' className='header__link'>
<div className='header__option'>
    <span className='header__optionLineOne'>Returns</span>
    <span className='header__optionLineTwo'>& Orders</span>
</div>
</Link>

<Link to='/' className='header__link'>
<div className='header__option'>
    <span className='header__optionLineOne'>Your</span>
    <span className='header__optionLineTwo'>Prime</span>
</div>
</Link>

<Link to='/checkout' className='header__link'>
<div className='header__optionBasket'>
    <ShoppingBasket/>
    <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
    
</div>
</Link>
    </>
  

  )
}

export default Sidelink