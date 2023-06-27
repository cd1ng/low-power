import React, { useRef } from 'react'

import LeftAside from './leftAside'
import RightAside from './rightAside'
import Center from './center'
import ToolBar from '../toolBar'

import styles from './index.module.less'

export default function Editor() {
  return (
    <div className={styles.editor_container}>
      <ToolBar />
      <LeftAside />
      <Center />
      <RightAside />
    </div>
  )
}
