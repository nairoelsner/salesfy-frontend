import '../assets/styles/Admin.css'
import React from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { HomeOutlined, ShoppingOutlined, UnorderedListOutlined, PlusCircleOutlined, SettingOutlined, AppstoreOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import AdminHome from '../pages/admin/AdminHome';
import AdminProducts from '../pages/admin/AdminProducts';
import AdminCreateProduct from '../pages/admin/AdminCreateProduct';

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {label, key, icon, children};
}

const menuItems = [
  getItem(<Link to={'/admin/home'}>Home</Link>, '1', <HomeOutlined />),
  getItem('Produtos', '2', <ShoppingOutlined />, 
    [
      getItem(<Link to={'/admin/products'}>Produtos</Link>, '3', <UnorderedListOutlined />),
      getItem(<Link to={'/admin/create-product'}>Adicionar</Link>, '4', <PlusCircleOutlined />)
    ]),
  
  getItem('Kits', '5', <AppstoreOutlined />, 
    [
      getItem(<Link to={'/admin/products'}>Kits</Link>, '6', <UnorderedListOutlined />),
      getItem(<Link to={'/admin/create-product'}>Adicionar</Link>, '7', <AppstoreAddOutlined />)
    ]),
  getItem('Configurações', '8', <SettingOutlined />)
]

function Admin(){
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
                <Route path="/*" element={<Navigate to='/admin/home' />} />
                <Route path="/home" element={<AdminHome />} />
                <Route path='/products' element={<AdminProducts />} />
                <Route path='/create-product' element={<AdminCreateProduct />} />
                <Route path='/edit-product/:id' element={<AdminCreateProduct />} />
                <Route path='/delete-product/:id' element={<AdminCreateProduct />} />
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

export default Admin
