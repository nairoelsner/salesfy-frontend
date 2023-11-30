import React from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  
  return (
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item name="email" rules={[{required: true, message: 'Insira seu e-mail!'}]}>
        <Input prefix={<MailOutlined className="site-form-item-icon" />} type='email' placeholder="E-mail" />
      </Form.Item>
      
      <Form.Item name="password" rules={[{required: true, message: 'Insira sua senha!'}]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Senha"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
        <p>Ou <Link to={'/auth/register'}>registrar agora!</Link></p>
      </Form.Item>
    </Form>
  );
};

export default LoginComponent;