import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
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
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const CreateProductComponent = () => (
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

    <Form.Item name={['product', 'description']} label="Descrição">
      <Input.TextArea />
    </Form.Item>

    <Form.Item name={['product', 'price']} label="Preço" rules={[{type: 'number', min: 0}]}>
      <InputNumber />
    </Form.Item>
    
    <Form.Item name={['product', 'stock']} label="Estoque" rules={[{type: 'number', min: 0}]}>
      <InputNumber />
    </Form.Item>
    
    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default CreateProductComponent;