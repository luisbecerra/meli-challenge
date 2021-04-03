import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import Layout from '../../components/Layout'
import SearchBar from '../../components/SearchBar'
import ShoppingCart from '../../components/ShoppingCart'


const useCart = () => {
  return useSelector(
    (state) => ({
      shoppingCart: state.shoppingCart
    }),
    shallowEqual
  )
}

const Cart = () => {

  const { shoppingCart } = useCart();

  console.log('shoppingCart',shoppingCart);

  return (
    <Layout>
      <SearchBar />
      <ShoppingCart shoppingCart={shoppingCart}/>
    </Layout>
  )
}


export default Cart
