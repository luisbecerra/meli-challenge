import React from 'react'
import Link from 'next/link'

import { getFormattedPrice } from '../../lib/helpers'
import { CURRENCY } from '../../lib/constants'

import styles from './Product.module.scss'

const Product = ({ product }) => {
  const { id, price, title, picture, free_shipping } = product

  return (
    <div className={styles.product}>
      <Link href={`/items/${id}`}>
        <div className={styles.link}>
          <div>
            <Link href={`/items/${id}`}>
              <a>
                <img src={picture} alt={title} />
              </a>
            </Link>
          </div>
          <div>
            <Link href={`/items/${id}`}>
              <a className={styles.title}>{title}</a>
            </Link>
            {price && (
              <div className={styles.price}>
                <span>{CURRENCY[price.currency]}&nbsp;</span>
                <span>{getFormattedPrice(price.amount)}</span>
                {price.decimals > 0 && <span className="decimals">{price.decimals}</span>}
              </div>
            )}
            {free_shipping && <label>Envío gratis</label>}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product
