import React, { useRef } from 'react'

import useEditStore from 'src/store/editStore'

import styles from './index.module.less'

export default function Center() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvas = useEditStore()
  return (
    <div id='center' className={styles.content}>
      <canvas className={styles.canvas} ref={canvasRef} />
    </div>
  )
}
