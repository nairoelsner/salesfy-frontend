import '../assets/styles/User.css'
import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { HomeOutlined, ShoppingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import UserHome from '../pages/user/UserHome';
import CreateOrder from '../pages/user/CreateOrder';

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {label, key, icon, children};
}

const menuItems = [
  getItem(<Link to={'/user/home'}>Home</Link>, '1', <HomeOutlined />),
  getItem(<Link to={'/user/create-order'}>Novo pedido</Link>, '2', <ShoppingOutlined />),
  getItem(<Link to={'/login'}>Sair</Link>, '3', <LogoutOutlined />)
]

function User(){
  const {token:{ colorBgContainer }} = theme.useToken();

  return (
      <Layout>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className="logo">
            <h1>SALESFY</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={menuItems}/>
        </Sider>
        
        <Layout>
          <Content style={{margin: '24px 16px 0',}}>
            <div style={{padding: 24, background: colorBgContainer}} id='content'>
              <Routes>
                <Route path="/*" element={<Navigate to='/user/home' />} />
                <Route path="/home" element={<UserHome />} />
                <Route path="/create-order" element={<CreateOrder />} />
              </Routes>
            </div>
          </Content>
          
          <Footer style={{textAlign: 'center',}}>
            Feito com ❤ por Clarisse, Gabriel, Nairo e Richard
          </Footer>
        </Layout>

      </Layout>
  );
}

export default User
