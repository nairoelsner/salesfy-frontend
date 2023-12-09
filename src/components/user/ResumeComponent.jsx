import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

const ResumeComponent = () => {
    const [resumeData, setResumeData] = useState({})
    const [loading, setLoading] = useState(true)
    const cardHeight = '10em'

    const fetchData = () => {
        const userId = localStorage.getItem('userId')
        axios.get(`${import.meta.env.VITE_API_URL}/user/resume/${userId}`)
        .then(function (response) {
            if(response.status === 200){
                setLoading(false);
                setResumeData(response.data);
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




    const gutter = 16
    const span = 6
    return(
        <div className='resume-cards'>
            <Row gutter={gutter} style={{textAlign: 'center'}}>
                <Col span={span}>
                    <Card title="Vendas" bordered={true} loading={loading} style={{height: cardHeight}}>
                        <h2>R${resumeData.ordersValue}</h2>
                    </Card>
                </Col>
                <Col span={span}>
                    <Card title="Meta" bordered={true} loading={loading} style={{height: cardHeight}}>
                    <h2>R${resumeData.goal}</h2>
                    </Card>
                </Col>
                <Col span={span}>
                    <Card title="Melhor vendedor" bordered={true} loading={loading} style={{height: cardHeight}}>
                        <h2>{resumeData.bestSeller}</h2>
                    </Card>
                </Col>
                <Col span={span}>
                    <Card title="Pior vendedor" bordered={true} loading={loading} style={{height: cardHeight}}>
                        <h2>{resumeData.worstSeller}</h2>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ResumeComponent