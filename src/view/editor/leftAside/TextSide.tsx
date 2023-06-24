import React from 'react'

import Card from 'src/components/card'

const textSideInfo = [
  { title: '正文', content: '正文' },
  { title: '标题', content: '标题' },
]

export default function TextSide() {
  return (
    <div className='collapse'>
      {textSideInfo.map((item, index) => {
        console.log(item)
        return <Card title={item.title} content={item.content} key={index} />
      })}
    </div>
  )
}
