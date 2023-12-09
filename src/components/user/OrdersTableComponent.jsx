import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'key',
    key: 'id',
    align: 'center',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Valor',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    render: (text) => <p style={{color:'green'}}><b>R${text}</b></p>
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  }
];

const OrdersTableComponent = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    const userId = localStorage.getItem('userId')
    axios.get(`${import.meta.env.VITE_API_URL}/user/orders/${userId}`)
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