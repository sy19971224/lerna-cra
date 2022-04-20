import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import menuList from '../modules/index'
import { MenuInfo } from 'rc-menu/lib/interface'

const { Content, Sider } = Layout

const LayoutHeader = () => {
  const [content, setContent] = useState(menuList[0].component)
  const changeMenu = (info: MenuInfo) => {
    const res = menuList.find(item => item.key === info.key)?.component
    setContent(res as any)
  }

  return (
    <Layout>
      <Sider width={120}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, backgroundColor: '#1a1b1d' }}
          onClick={info => changeMenu(info)}
        >
          {menuList.map(menuItem => {
            return <Menu.Item key={menuItem.key}>{menuItem.title}</Menu.Item>
          })}
        </Menu>
      </Sider>
      <Layout
        style={{
          backgroundColor: '#282c34',
          padding: '10px'
        }}
      >
        <Content style={{ minHeight: 280 }}>platform4</Content>
      </Layout>
    </Layout>
  )
}

export default LayoutHeader