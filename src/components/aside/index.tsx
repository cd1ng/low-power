import React from 'react'
import { Button } from 'antd'
import './index.scss'

export default function Aside() {
  return (
    <div className='aside'>
      <div className='aside-item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>模板</p>
      </div>
      <div className='aside-item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>文本</p>
      </div>
      <div className='aside-item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>图片</p>
      </div>
      <div className='aside-item'>
        <i className='icon iconfont icon-mianbanwenjian'></i>
        <p>图形</p>
      </div>
    </div>
  )
}
