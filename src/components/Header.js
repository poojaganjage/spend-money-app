import React from 'react';
import {moneyFormatter} from '../Helper';

function Header({total, money}) { // total => total purchase, money => the money we have to spend.
  return (
    <div className='header'>
      {total > 0 && money - total !== 0 && (
        <span>
          To Spend <span className='money'>
            ${moneyFormatter(money - total)}
          </span>
          You have a lot of money
        </span>
      )}

      {total === 0 && (
        <span>
          To Spend <span className='money'>
            ${moneyFormatter(money)} You have money
          </span>
        </span>
      )}

      {money - total === 0 && (
        <span>
          <span className='money'>
            ${moneyFormatter(total)}
          </span>
        </span>
      )}
    </div>
  );
}
export default Header;
