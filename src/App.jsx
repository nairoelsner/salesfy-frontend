import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomeOutlined, ShoppingOutlined, UnorderedListOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import AdminHome from './pages/admin/AdminHome';
import AdminProducts from './pages/admin/AdminProducts';
import AdminCreateProduct from './pages/admin/AdminCreateProduct';

const { Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {key, icon, children, label};
}

const menuItems = [
  getItem(<Link to={'/admin'}>Home</Link>, '1', <HomeOutlined />),
  getItem('Produtos', '2', <ShoppingOutlined />, 
    [
      getItem(<Link to={'/products'}>Produtos</Link>, '3', <UnorderedListOutlined />),
      getItem(<Link to={'/createproduct'}>Adicionar</Link>, '4', <PlusCircleOutlined />)
    ]),
  getItem('Configurações', '5', <SettingOutlined />)
]

function App() {
  const {token:{ colorBgContainer }} = theme.useToken();

  return (
    <Router>
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
                <Route path="/admin" element={<AdminHome />} />
                <Route path='/products' element={<AdminProducts />} />
                <Route path='/createproduct' element={<AdminCreateProduct />} />
              </Routes>
            </div>
          </Content>
          
          <Footer style={{textAlign: 'center',}}>
            Feito com ❤ por Clarisse, Gabriel, Nairo e Richard
          </Footer>
        </Layout>

      </Layout>
    </Router>
  );
}

export default App
