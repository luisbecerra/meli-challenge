import React from 'react'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import Layout from '../../components/Layout'
import Products from '../../components/Products'
import SearchBar from '../../components/SearchBar'

const Items = ({ search, items, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <Layout>
      <SearchBar input={search} />
      <Products products={items} />
    </Layout>
  )
}

Items.getInitialProps = async ({ query }) => {
  const { search } = query
  const response = await fetch(`http://localhost:5000/items?query=${search}`)
  let errorCode = response.statusCode > 200 ? response.statusCode : false
  const items = await response.json()
  const { error, status } = items
  if (error) errorCode = status

  return { search, items, errorCode }
}

export default Items
