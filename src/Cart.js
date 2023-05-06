import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from './redux/cart';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const inc = (id) => {
    dispatch(cartAction.inc(id));
  };

  const dec = (id) => {
    dispatch(cartAction.dec(id));
  };

  const deleteItem = (id) => {
    dispatch(cartAction.remove(id));
  };

  const deleteAll = () => {
    dispatch(cartAction.reset());
  };

  return (
    <div>
      {cart.length !== 0 && (
        <div>
          <p>Id</p>
          <h2>Name</h2>
          <h4>Price</h4>
          <p>Total Price</p>
          <p>Amount</p>
          <p>Action</p>

          {cart.map((e) => {
            return (
              <div key={e.id}>
                <img src={e.picture} alt="" />
                <h2>{e.name}</h2>
                <p>{e.price}</p>
                <p>{e.price * e.amount}</p>
                <div>
                  <button onClick={dec.bind(this, e.id)}>-</button> {e.amount}{' '}
                  <button onClick={inc.bind(this, e.id)}>+</button>
                </div>
                <button onClick={deleteItem.bind(this, e.id)}>Delete</button>
              </div>
            );
          })}
          <button onClick={deleteAll}>Remove All</button>
          <h3>Grand Total : {cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)}</h3>
          <p style={{ fontWeight: 'bold' }}>Empty Cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
