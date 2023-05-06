import React from 'react';
import { itemData } from './itemData';

import { useSelector, useDispatch } from 'react-redux';
import { cartAction } from './redux/cart';

const Item = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    console.log(item);
    const isAdded = cart.some((e) => {
      return e.id === item.id;
    });
    if (!isAdded) {
      dispatch(
        cartAction.add({
          id: item.id,
          name: item.name,
          price: item.price,
          amount: 1,
        }),
      );
    } else {
      alert('Already Added');
    }
  };
  return (
    <>
      {itemData.map((e) => {
        return (
          <div className="card" key={e.id}>
            <img src={e.picture} alt="" />
            <h3>{e.name}</h3>
            <p>{e.price}</p>
            <button onClick={addToCart.bind(this, e)}>Add to cart</button>
          </div>
        );
      })}
    </>
  );
};

export default Item;
