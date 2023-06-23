import React, { useEffect, useState } from 'react'

import Card from '../card'
import {
  ASIDE_CLOSE,
  ASIDE_IMAGE_TYPE,
  ASIDE_MODAL_TYPE,
  ASIDE_SHAPE_TYPE,
  ASIDE_TEXT_TYPE,
} from 'src/constants/left-aside'

import './index.scss'

type asideType =
  | typeof ASIDE_MODAL_TYPE
  | typeof ASIDE_TEXT_TYPE
  | typeof ASIDE_IMAGE_TYPE
  | typeof ASIDE_SHAPE_TYPE
type asideInfo = { icon: string; type: asideType; label: string }

const asideData: asideInfo[] = [
  { icon: 'mianbanwenjian', type: ASIDE_MODAL_TYPE, label: '模板' },
  { icon: 'mianbanwenjian', type: ASIDE_TEXT_TYPE, label: '文本' },
  { icon: 'mianbanwenjian', type: ASIDE_IMAGE_TYPE, label: '图片' },
  { icon: 'mianbanwenjian', type: ASIDE_SHAPE_TYPE, label: '图形' },
]

const cardInfo = [
  { title: '正文', content: '正文' },
  { title: '标题', content: '标题' },
]

export default function Aside() {
  const [showSide, setShowSide] = useState(ASIDE_CLOSE)

  const handleClick = (type: asideType) => {
    setShowSide(type === showSide ? ASIDE_CLOSE : type)
  }

  // 添加非侧边栏的移除事件
  useEffect(() => {
    const cancelShow = () => setShowSide(0)
    document.getElementById('center')?.addEventListener('click', cancelShow)
    return () => {
      document.getElementById('center')?.removeEventListener('click', cancelShow)
    }
  }, [])

  return (
    <div className='aside'>
      {asideData.map((item, index) => {
        let nameStr = `icon iconfont icon-${item.icon}`
        return (
          <div className='aside_item' key={index} onClick={() => handleClick(item.type)}>
            <i className={nameStr}></i>
            <p>{item.label}</p>
          </div>
        )
      })}
      {/* 侧边栏的选项 */}
      {showSide && (
        <div className='collapse'>
          {cardInfo.map((item, index) => {
            console.log(item)
            return <Card title={item.title} content={item.content} key={index} />
          })}
        </div>
      )}
    </div>
  )
}
