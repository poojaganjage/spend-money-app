import React from 'react';
import {moneyFormatter} from '../Helper';

function Footer({total, basket, setBasket}) {
  const resetCart = () => {
    setBasket([]);
  }
  console.log(basket);
  return (
    <div className='footer'>
      <div className='footer-header'>Your Cart</div>
      <div className='footer-container'>
        {
          basket.map((item) => 
            // console.log(item.title);
            // console.log(item.amount);
            <div className='footer-basket-item' key={item.id}>
              <span>{item.title}</span>
              <span>{item.amount}</span>
            </div>
          )
        }
      </div>
      <div className='button-container'>
        <span>Total: ${moneyFormatter(total)}</span>
        <button className='btn btn-reset' onClick={resetCart}>Reset</button>
      </div>
    </div>
  );
}
export default Footer;
