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
            Home
            <i className='icon iconfont icon-mianbanwenjian'></i>
          </Button>
          <Button className='header-nav-item' onClick={jumpToLogin}>
            Login
          </Button>
          <Button className='header-nav-item' onClick={jumpToEditor}>
            Editor
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
