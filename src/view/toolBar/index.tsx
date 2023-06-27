import React from 'react'
import { Button } from 'antd'

import { clearCanvas } from 'src/store/editStore'

import styles from './index.module.less'

const ToolBar = () => {
  return (
    <div className={styles.toolBar}>
      <Button type='primary' onClick={() => clearCanvas()}>
        清除
      </Button>
    </div>
  )
}

export default ToolBar
