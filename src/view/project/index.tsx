import React from 'react'
import ProjectTable from 'src/components/table'
import type { DataType } from 'src/components/table'

import styles from './index.module.less'

const data: DataType[] = [
  {
    key: '1',
    id: '1',
    title: 'New York No. 1 Lake Park',
    type: '页面',
    actions: ['onlineBrowser', 'switchMobile', 'delete'],
    page: '',
  },
  {
    key: '2',
    id: '2',
    title: 'London No. 1 Lake Park',
    type: '页面',
    actions: ['onlineBrowser', 'switchMobile', 'delete'],
    page: '',
  },
  {
    key: '3',
    id: '2',
    title: 'Sydney No. 1 Lake Park',
    type: '页面',
    actions: ['onlineBrowser', 'switchMobile', 'delete'],
    page: '',
  },
]

export default function Project() {
  return (
    <div className={styles.tabel_page}>
      <ProjectTable data={data} />
    </div>
  )
}
