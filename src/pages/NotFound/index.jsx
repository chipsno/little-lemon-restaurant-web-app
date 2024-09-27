import React from 'react'

import styles from './index.module.scss'
const NotFound = () => {
    return (
      <div className={styles["not-found-wrapper"]}>
        <div className={styles["not-found-container"]}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
      </div>
    );
  };

export default NotFound;