import React from 'react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';

const options = [
    <Select.Option value="male" key="male">Nairo Elsner</Select.Option>,
    <Select.Option value="female" key="female">Clarisse Estima</Select.Option>,
]

const RegisterComponent = () => {
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

            <Form.Item name="name" rules={[{required: true, message: 'Insira seu nome!'}]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nome"/>
            </Form.Item>

            <Form.Item name="gerente" rules={[{required: true, message: 'Selecione seu gerente!'}]}>
                <Select placeholder="Selecione seu gerente" allowClear>
                    {options}
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">Registrar</Button>
                <p>Ou <Link to={'/auth/login'}>fazer login!</Link></p>
            </Form.Item>
        </Form>
    );
};

export default RegisterComponent;