import React, { useEffect, useState } from 'react';
import { Table, Progress, Empty } from 'antd';
import { fecthSellersData } from '../../data/sellersData';

const calculateProgressColor = (progress) => {
  if(progress <= 33){
    return '#ffccc7'
  } else if(progress > 33 && progress <= 70){
    return {'0%': '#ffccc7', '100%': '#ffe58f'}
  } else{
    return {'0%': '#ffccc7', '70%': '#ffe58f', '100%': '#87d068'}
  }
}

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
    title: 'Comissão',
    dataIndex: 'commission',
    key: 'commission',
    render: (text) => <p style={{color:'green'}}><b>R${text}</b></p>
  },
  {
    title: 'Progresso',
    key: 'progress',
    dataIndex: 'progress',
    render: (progress) => (
      <span>
        <Progress strokeColor={calculateProgressColor(progress)} percent={progress} size={'small'}/>
      </span>
    ),
  }
];

const SellersTableComponent = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    const response = fecthSellersData()
    if(response){
      setData(response)
      setLoading(false)
    }
  }

  useEffect(() => { 
    fetchData()
    const intervalId = setInterval(fetchData, 5000);
    return () => {
      clearInterval(intervalId);
    }
  }, []);


  return (
    <div className='sellers-table'>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{position: ['bottomCenter'], pageSize: 8}}
        bordered
        loading={loading}
        locale={{ emptyText: <Empty description="Carregando..." /> }}
      />
    </div>
  );
};

export default SellersTableComponent