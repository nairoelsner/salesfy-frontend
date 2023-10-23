import React, { useState } from 'react';
import { Table, Progress } from 'antd';
import { fecthSellersData } from '../../data/sellersData';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Vendas',
    dataIndex: 'sales',
    key: 'sales',
    render: (text) => <p style={{color:'green'}}><b>R${text},00</b></p>
  },
  {
    title: 'Meta',
    dataIndex: 'goal',
    key: 'goal',
    render: (text) => <p style={{color:'green'}}><b>R${text},00</b></p>
  },
  {
    title: 'Progresso',
    key: 'progress',
    dataIndex: 'progress',
    render: (progress) => (
      <span>
        <Progress strokeColor={{'0%': '#ffccc7', '50%': '#ffe58f', '100%': '#87d068'}} percent={progress} />
      </span>
    ),
  }
];
const data = fecthSellersData()

const SellersTableComponent = () => {
  return (
    <div className='sellers-table'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{position: ['bottomRight'], pageSize: 8}}
        bordered
        />
    </div>
  );
};

export default SellersTableComponent