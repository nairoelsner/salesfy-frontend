import React, { useState } from 'react';
import { Table } from 'antd';
import { fetchProductsData } from '../../data/productsData';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p style={{textAlign: 'center'}}>{text}</p>
  },
  {
    title: 'Descrição',
    dataIndex: 'description',
    key: 'description',
    render: (text) => <p>{text}</p>
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (text) => <p style={{color:'green', textAlign: 'center'}}><b>R${text},00</b></p>
  },
  {
    title: 'Estoque',
    dataIndex: 'stock',
    key: 'stock',
    render: (text) => <p style={{textAlign: 'center'}}><b>{text}</b></p>
  },
  {
    title: 'Ações',
    key: 'actions',
    dataIndex: 'id',
    render: (id) => (
      <span style={{textAlign: 'center'}}>
        <Link to={`/editproduct/${id}`}>Editar</Link> | <Link to={`/deleteproduct/${id}`} style={{color: 'red'}}>Excluir</Link>
      </span>
    ),
  }
];
const data = fetchProductsData()

const ProductTableComponent = () => {
  return (
    <div className='sellers-table'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{position: ['bottomRight'], pageSize: 12}}
        bordered
        />
    </div>
  );
};

export default ProductTableComponent