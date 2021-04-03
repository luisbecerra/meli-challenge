import React from 'react'

import styles from './Breadcrumb.module.scss'

const Breadcrumbs = ({ categories }) => {
  return (
    <div className={styles.breadcrumb}>
      {categories.map(category => {
        return <span key={category}>{category}</span>
      })}
    </div>
  )
}

export default Breadcrumbs
