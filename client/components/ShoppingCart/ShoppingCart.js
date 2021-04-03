import React from 'react'
import { useDispatch } from "react-redux";

import Product from '../Product'

import styles from './ShoppingCart.module.scss'

const useShoppingCart = () => {
  const dispatch = useDispatch();

  const removeToCart = (product) => {
    dispatch({
      type: "REMOVE_TO_CART",
      product,
    });
  };

  return { removeToCart };
};


const ShoppingCart = ({shoppingCart}) => {

  const { removeToCart } = useShoppingCart();
  
  return (
    <div className={styles.shoppingCart}>
      <ul>
        {shoppingCart.map(item => {
          return (
            <li key={item.key}>
              <div className={styles.scProduct}>
                <Product product={item} />
              </div>
              <div className={styles.scProductTimes}>
                {item.times}
              </div>
              <button onClick={() => { removeToCart(item) }}>Eliminar</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}



export default ShoppingCart
