import React from 'react'
import Link from 'next/link'
import { useSelector, shallowEqual } from 'react-redux'

import styles from './CartNotification.module.scss'


const useCart = () => {
  return useSelector(
    (state) => ({
      shoppingCart: state.shoppingCart
    }),
    shallowEqual
  )
}

const CartNotification = () => {
  const { shoppingCart } = useCart();
  return (
    <div className={styles.cartNotification}>
      <Link href="/cart">
        <a>
          <img src="/shopping-cart.svg" alt="Carrito de compras"/>
          <span>{shoppingCart.length}</span>
        </a>
      </Link>
    </div>
  )
}



export default CartNotification
