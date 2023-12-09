import React from 'react';
import axios from 'axios';
import { Button, Form, Input, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const CreateProductComponent = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    axios.post(`${import.meta.env.VITE_API_URL}/admin/create-product`, values)
    .then(function (response) {
      if(response.status === 200){
        navigate('/admin/products')
      }
    })
    .catch(function (error) {
      if(error.status === 401){
        console.log(error);
      }
    });
  };

  return(
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item name={['product', 'name']} label="Nome" rules={[{required: true}]}>
        <Input />
      </Form.Item>

      <Form.Item name={['product', 'description']} label="Descrição" rules={[{required: true}]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={['product', 'price']} label="Preço" rules={[{type: 'number', min: 0}, {required: true}]}>
        <InputNumber />
      </Form.Item>
      
      <Form.Item name={['product', 'stock']} label="Estoque" rules={[{type: 'number', min: 0}, {required: true}]}>
        <InputNumber />
      </Form.Item>
      
      <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
        <Button type="primary" htmlType="submit">
          Criar produto
        </Button>
      </Form.Item>
    </Form>
  )
};
export default CreateProductComponent;