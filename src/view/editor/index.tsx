import React, { useRef } from 'react'
import './index.scss'
export default function Editor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  return (
    <>
      <canvas className='edit-canvas' ref={canvasRef} />
    </>
  )
}
