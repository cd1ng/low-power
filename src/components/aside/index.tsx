import React, { useState } from 'react'
import './index.scss'

export default function Aside() {
  const [collapse, setCollapse] = useState(false)
  return (
    <div className='aside'>
      <div className='aside_item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>模板</p>
      </div>
      <div className='aside_item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>文本</p>
      </div>
      <div className='aside_item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>图片</p>
      </div>
      <div className='aside_item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>图形</p>
      </div>
      <div className='collapse'></div>
    </div>
  )
}
