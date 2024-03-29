import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'id',
    render: (text) => <p style={{textAlign: 'center'}}><b>{text}</b></p>
  },
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
    render: (text) => <p style={{color:'green', textAlign: 'center'}}><b>R${text}</b></p>
  },
  {
    title: 'Estoque',
    dataIndex: 'stock',
    key: 'stock',
    render: (text) => <p style={{textAlign: 'center'}}><b>{text}</b></p>
  },
  {
    title: 'Ações',
    key: 'id',
    dataIndex: 'id',
    render: (id) => (
      <span style={{textAlign: 'center'}}>
        <Link to={`/admin/edit-product/${id}`}>Editar</Link> | <Link to={`/admin/delete-product/${id}`} style={{color: 'red'}}>Excluir</Link>
      </span>
    ),
  }
];

const ProductTableComponent = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/admin/products`)
    .then(function (response) {
        if(response.status === 200){
            setLoading(false)
            setData(response.data);
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
  }, []);



  return (
    <div className='sellers-table'>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{position: ['bottomCenter'], pageSize: 12}}
        bordered
        />
    </div>
  );
};

export default ProductTableComponent