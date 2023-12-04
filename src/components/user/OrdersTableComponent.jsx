import React, { useState } from 'react';
import { Table } from 'antd';
import { fetchOrdersData } from '../../data/ordersData'

const data = fetchOrdersData()
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    align: 'center',
    render: (text) => <p style={{color:'green'}}><b>R${text},00</b></p>
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
    align: 'center',
  }
];

const OrdersTableComponent = () => {
  return (
    <div className='orders-table'>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        pagination={{position: ['bottomCenter'], pageSize: 9}}
        />
    </div>
  );
};

export default OrdersTableComponent