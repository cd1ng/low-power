import React, { useState } from 'react'
import { Space, Table, Tag, Divider, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'

export interface DataType {
  key: string
  id: string
  title: string
  type: string
  actions: string[]
  page?: string
}

interface ProjectTableProps {
  data: DataType[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '类型',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: '动作',
    key: 'action',
    render: (_, { actions }) => (
      <>
        {actions.map((item, index) => (
          <Space size='middle' key={index}>
            <Tag>{item === 'delete' ? <span>{item}</span> : <a>{item}</a>}</Tag>
          </Space>
        ))}
      </>
    ),
  },
]

const ProjectTable: React.FC<ProjectTableProps> = ({ data }) => {
  return (
    <>
      <Button>新增</Button>
      <Divider />
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default ProjectTable
