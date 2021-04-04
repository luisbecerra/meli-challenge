import React from 'react'
import Error from 'next/error'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/Layout'
import SearchBar from '../../components/SearchBar'
import ProductDetail from '../../components/ProductDetail'

const Item = ({ errorCode, item }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <SearchBar />
      <ProductDetail product={item} />
    </Layout>
  )
}

Item.getInitialProps = async ({ query }) => {
  const { id } = query
  const response = await fetch(`http://localhost:5000/items/${id}`)
  const item = await response.json()
  const { statusCode } = item
  let errorCode = statusCode > 200 ? statusCode : false
  const { error, status } = item
  if (error) errorCode = status

  return { errorCode, item }
}

export default Item
