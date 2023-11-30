import React from 'react';
import { Card, Col, Row } from 'antd';

const ResumeComponent = () => {
    const gutter = 16
    const span = 6
    return(
        <div className='resume-cards'>
            <Row gutter={gutter} style={{textAlign: 'center'}}>
                <Col span={span}>
                    <Card title="Vendas" bordered={true}>
                        <h2>R$10.000</h2>
                    </Card>
                </Col>
                <Col span={span}>
                    <Card title="Meta" bordered={true}>
                    <h2>R$100.000</h2>
                    </Card>
                </Col>
                <Col span={span}>
                    <Card title="Melhor vendedor" bordered={true}>
                        <h2>João</h2>
                    </Card>
                </Col>
                <Col span={span}>
                    <Card title="Pior vendedor" bordered={true}>
                        <h2>Maria</h2>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ResumeComponent