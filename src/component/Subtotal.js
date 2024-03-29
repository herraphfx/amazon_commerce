import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { SportsBasketball } from '@mui/icons-material';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
        <p>
          Subtotal({SportsBasketball.length} items): <strong>
            {`${value}`}
          </strong>
        </p>
        <small className='subtotal__gift'>
          <input type="checkbox"/> This order contains a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeperator={true}
      prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal