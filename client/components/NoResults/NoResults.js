import React from 'react'

import styles from './NoResults.module.scss'

const NoResults = ({ children }) => {
  return (
    <div className={styles.noResults}>
      <h3>{children}</h3>
    </div>
  )
}

export default NoResults
