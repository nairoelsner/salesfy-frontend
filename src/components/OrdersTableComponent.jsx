import React, { useState } from 'react';
import { Table, Progress } from 'antd';
import { fetchOrdersData } from '../data/ordersData'

const data = fetchOrdersData()

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Vendedor',
    dataIndex: 'seller',
    key: 'seller',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    render: (text) => <p style={{color:'green'}}><b>R${text},00</b></p>
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date'
  }
];



export const OrdersTableComponent = () => {
  return (
    <div className='orders-table'>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        pagination={{position: ['bottomRight'], pageSize: 9}}
        />
    </div>
  );
};