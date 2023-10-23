import { useState } from 'react'
import './App.css'
import React from 'react';
import { HomeOutlined, ShoppingOutlined, UnorderedListOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { ResumeComponent } from './components/ResumeComponent';
import { SellersTableComponent } from './components/SellersTableComponent';
import { OrdersTableComponent } from './components/OrdersTableComponent';

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {key, icon, children, label};
}

const menuItems = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Produtos', '2', <ShoppingOutlined />, 
    [
      getItem('Produtos', '3', <UnorderedListOutlined />),
      getItem('Adicionar', '4', <PlusCircleOutlined />)
    ]),
  getItem('Configurações', '5', <SettingOutlined />)
]

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <h1>Salesfy</h1>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={menuItems}/>
      </Sider>
      <Layout>
        <Content style={{margin: '24px 16px 0',}}>
          <div style={{padding: 24, background: colorBgContainer}} id='content'>
            <ResumeComponent/>
            <div className='tables'>
              <SellersTableComponent/>
              <OrdersTableComponent/>
            </div>
          </div>
        </Content>
        
        <Footer style={{textAlign: 'center',}}>
          Salesfy ©2023 Criado com ❤ por Clarisse, Gabriel, Nairo, Richard
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App
