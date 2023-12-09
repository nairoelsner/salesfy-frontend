import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TreeSelect } from 'antd';
const { SHOW_PARENT } = TreeSelect;

function getItem(label, value, key, children) {
  return {label, value, key, children};
}

const SelectProductsComponent = () => {
  const [value, setValue] = useState([]);
  const [treeData, setTreeData] = useState([getItem('Produtos', 'produtos', 'produtos', []), getItem('Kits', 'kits', 'kits', [])]);

  const fetchData = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/user/available-products`)
    .then(function (response) {
        if(response.status === 200){
          const formattedData = [
            {
              label: 'Produtos',
              value: 'produtos',
              key: 'produtos',
              children: response.data.availableProducts.map((product) => ({
                label: product.name,
                value: `produto-${product.id}`,
                key: `produto-${product.id}`,
              })),
            },
            {
              label: 'Kits',
              value: 'kits',
              key: 'kits',
              children: response.data.availableKits.map((kit) => ({
                label: kit.name,
                value: `kit-${kit.id}`,
                key: `kit-${kit.id}`,
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
      <Button type="primary" style={{width: '200px'}}>Comprar</Button>
    </>

  )
  
};
export default SelectProductsComponent;