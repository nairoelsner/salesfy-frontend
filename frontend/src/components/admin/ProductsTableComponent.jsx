import React, { useState } from 'react';
import { Table } from 'antd';
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
        <Link to={`/admin/edit-product/${id}`}>Editar</Link> | <Link to={`/admin/delete-product/${id}`} style={{color: 'red'}}>Excluir</Link>
      </span>
    ),
  }
];

const ProductTableComponent = () => {
  const data = []
  return (
    <div className='sellers-table'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{position: ['bottomCenter'], pageSize: 12}}
        bordered
        />
    </div>
  );
};

export default ProductTableComponent