import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Layout, Button } from 'antd'

import styles from './index.module.less'

const { Header, Content } = Layout

export default function RequireAuth() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!window.sessionStorage.getItem('username')) {
      jumpToLogin()
    }
  }, [])

  const jumpToLogin = () => {
    navigate('/login')
  }
  const jumpToEditor = () => {
    navigate('/editor')
  }
  const jumpToProject = () => {
    navigate('/project')
  }
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.header_nav}>
          <Button className={styles.header_nav_item} onClick={jumpToLogin}>
            登录
            <i className='icon iconfont icon-dingdanmingxi'></i>
          </Button>
          <Button className={styles.header_nav_item} onClick={jumpToEditor}>
            编辑
            <i className='icon iconfont icon-mianbanwenjian'></i>
          </Button>
          <Button className={styles.header_nav_item} onClick={jumpToProject}>
            我的
            <i className='icon iconfont icon-yuangongguanli'></i>
          </Button>
          <Button className={styles.header_nav_item} onClick={jumpToProject}>
            项目
            <i className='icon iconfont icon-yuangongguanli'></i>
          </Button>
        </div>
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </>
  )
}
