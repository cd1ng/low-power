import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Button } from 'antd'

import Aside from 'src/components/aside'

import './index.scss'

const { Header, Content, Footer } = Layout

export default function RequireAuth() {
  const navigate = useNavigate()
  const jumpToHome = () => {
    navigate('/home')
  }
  const jumpToLogin = () => {
    navigate('/login')
  }
  const jumpToEditor = () => {
    navigate('/editor')
  }
  return (
    <>
      <Header className='header'>
        <div className='header-nav'>
          <Button className='header-nav-item' onClick={jumpToHome}>
            首页
            <i className='icon iconfont icon-dingdanguanli'></i>
          </Button>
          <Button className='header-nav-item' onClick={jumpToLogin}>
            登录
            <i className='icon iconfont icon-dingdanmingxi'></i>
          </Button>
          <Button className='header-nav-item' onClick={jumpToEditor}>
            编辑
            <i className='icon iconfont icon-mianbanwenjian'></i>
          </Button>
          <Button className='header-nav-item' onClick={jumpToHome}>
            我的
            <i className='icon iconfont icon-yuangongguanli'></i>
          </Button>
        </div>
      </Header>
      <Content className='content'>
        <Aside />
      </Content>
      <Footer className='footer'></Footer>
    </>
  )
}
