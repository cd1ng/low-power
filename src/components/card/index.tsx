import React, { DragEventHandler } from 'react'
import './index.less'

interface CardProps {
  title: string
  content: string
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className='card' draggable>
      <div className='card-content'>{content}</div>
    </div>
  )
}
export default Card
