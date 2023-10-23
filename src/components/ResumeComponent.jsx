import React from 'react';
import { Card, Col, Row } from 'antd';

export const ResumeComponent = () => {
    return(
        <div className='resume-cards'>
            <Row gutter={16} style={{textAlign: 'center'}}>
                <Col span={6}>
                    <Card title="Vendas" bordered={true}>
                        <h2>R$10.000</h2>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Meta" bordered={true}>
                    <h2>R$100.000</h2>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Melhor vendedor" bordered={true}>
                        <h2>Joe Black</h2>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Pior vendedor" bordered={true}>
                        <h2>John Brown</h2>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}