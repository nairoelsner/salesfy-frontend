import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Progress, Empty } from 'antd';

const calculateProgressColor = (progress) => {
  if(progress <= 33){
    return '#ffccc7';
  } else if(progress > 33 && progress <= 70){
    return {'0%': '#ffccc7', '100%': '#ffe58f'};
  } else{
    return {'0%': '#ffccc7', '70%': '#ffe58f', '100%': '#87d068'};
  }
}

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <p><b>{text}</b></p>,
  },
  {
    title: 'Vendas',
    dataIndex: 'salesValue',
    key: 'salesValue',
    render: (text) => <p style={{color:'green'}}><b>R${text}</b></p>
  },
  {
    title: 'Meta',
    dataIndex: 'goal',
    key: 'goal',
    render: (text) => <p style={{color:'green'}}><b>R${text}</b></p>
  },
  {
    title: 'Comissão',
    dataIndex: 'commission',
    key: 'commission',
    render: (text) => <p style={{color:'green'}}><b>R${text}</b></p>
  },
  {
    title: 'Progresso',
    dataIndex: 'progressPercent',
    key: 'progressPercent',
    render: (progress) => (
      <span>
        <Progress strokeColor={calculateProgressColor(progress)} percent={progress} size={'small'}/>
      </span>
    ),
  }
];

const SellersTableComponent = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    const managerId = localStorage.getItem('userId');
    axios.get(`${import.meta.env.VITE_API_URL}/admin/sellers-table/${managerId}`)
    .then(function (response) {
        if(response.status === 200){
            setLoading(false);
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
    fetchData();
  }, []);


  return (
    <div className='sellers-table'>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{position: ['bottomCenter'], pageSize: 8}}
        bordered
        align='center'
        locale={{ emptyText: <Empty description="Carregando..." /> }}
      />
    </div>
  );
};

export default SellersTableComponent