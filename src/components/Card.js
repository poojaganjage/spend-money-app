import React from 'react';
import CardItem from "./CardItem";

function Card({basket, setBasket, total, money, products}) {
  return (
    <div className={"card"}>
      {products.map((item) => (
        <CardItem
          setBasket={setBasket}
          basket={basket}
          key={item.id}
          product={item}
          total={total}
          money={money}
        />
      ))}
    </div>
  );
}
export default Card;
