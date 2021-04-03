import React from 'react'
import nanoid from 'nanoid'

import Product from '../Product'
import Breadcrumb from '../Breadcrumb'
import NoResults from '../NoResults'

import styles from './Products.module.scss'

const Products = ({ products }) => {
  const { items: itemsList, categories } = products

  const emptySearch = itemsList === ''
  if (emptySearch) return <NoResults>Escribe en el buscador lo que quieres encontrar</NoResults>

  const emptyResults = itemsList.length < 1
  if (emptyResults)
    return <NoResults>No hay publicaciones que coincidan con tu búsqueda.</NoResults>

  const itemsWithKey = itemsList.map(item => {
    return { ...item, key: nanoid() }
  })

  return (
    <div className={styles.products}>
      {categories && <Breadcrumb categories={categories} />}
      <ul>
        {itemsWithKey.map(item => {
          return (
            <li key={item.key}>
              <Product product={item} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products
