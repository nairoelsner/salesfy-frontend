import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id da venda',
    dataIndex: 'key',
    key: 'id',
    render: (text) => <p><b>{text}</b></p>,
  },
  {
    title: 'Vendedor',
    dataIndex: 'seller',
    key: 'seller',
    render: (text) => <p><b>{text}</b></p>
  },
  {
    title: 'Valor da venda',
    dataIndex: 'purchaseValue',
    key: 'value',
    render: (text) => <p style={{color:'green'}}><b>R${text}</b></p>
  },
  {
    title: 'Data',
    dataIndex: 'purchaseDate',
    key: 'date',
    render: (text) => <p><b>{text}</b></p>
  }
];



const OrdersTableComponent = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    const managerId = localStorage.getItem('userId')
    axios.get(`${import.meta.env.VITE_API_URL}/admin/purchases-table/${managerId}`)
    .then(function (response) {
        if(response.status === 200){
            console.log(response.data);
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
    <div className='orders-table'>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        bordered={true}
        align='center'
        pagination={{position: ['bottomCenter'], pageSize: 9}}
        />
    </div>
  );
};

export default OrdersTableComponent