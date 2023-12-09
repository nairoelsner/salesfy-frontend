import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TreeSelect, message } from 'antd';
const { SHOW_PARENT } = TreeSelect;

function getItem(label, value, key, children) {
  return {label, value, key, children};
}

function formatPostData(data) {
  const result = {products: [], kits: []};
  
  data.forEach(item => {
    const [type, id] = item.split('-');
    result[type].push(parseInt(id));
  });

  return result;
}

const CreateOrderComponent = () => {
  const [value, setValue] = useState([]);
  const [treeData, setTreeData] = useState([getItem('Produtos', 'produtos', 'produtos', []), getItem('Kits', 'kits', 'kits', [])]);

  const fetchData = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/user/available-products`)
    .then(function (response) {
        if(response.status === 200){
          const formattedData = [
            {
              label: 'Produtos',
              value: 'products',
              key: 'products',
              children: response.data.availableProducts.map((product) => ({
                label: product.name,
                value: `products-${product.id}`,
                key: `products-${product.id}`,
              })),
            },
            {
              label: 'Kits',
              value: 'kits',
              key: 'kits',
              children: response.data.availableKits.map((kit) => ({
                label: kit.name,
                value: `kits-${kit.id}`,
                key: `kits-${kit.id}`,
              })),
            },
          ];
          setTreeData(formattedData);
        }
    })
    .catch(function (error) {
        if(error.status === 401){
            console.log(error);
        }
    });
  }

  useEffect(() => {
    fetchData()
  })

  const onChange = (newValue) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };

  const sendData = () => {
    if(value.length > 0){
      const userId = localStorage.getItem('userId')
      const products = formatPostData(value)
      axios.post(`${import.meta.env.VITE_API_URL}/user/create-order`, {userId, products: products.products, kits: products.kits})
      .then(function (response){
        if(response.status == 200){
          console.log('Pedido adicionado')
        }
      })
    }
  }

  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return (
    <>
      <TreeSelect {...tProps} />
      <Button type="primary" style={{width: '200px'}} onClick={sendData}>Comprar</Button>
    </>

  )
  
};
export default CreateOrderComponent;