import React from 'react'
import { useDispatch } from "react-redux";

import Product from '../Product'
import NoResults from '../NoResults'

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

  if (shoppingCart.length === 0) return <NoResults>No hay productos en el carrito de compras</NoResults>
  
  return (
    <div className={styles.shoppingCart}>
      <ul>
        {shoppingCart.map(item => 
          (
            <li key={item.id}>
              <div className={styles.scProduct}>
                <Product product={item} />
              </div>
              <div className={styles.scProductTimes}>
                {item.times}
              </div>
              <button data-testid={`remove-product-${item.id}`} onClick={() => { removeToCart(item) }}>Eliminar</button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}



export default ShoppingCart
