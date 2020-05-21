import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { RateSelection, CurrencySelection } from '..';

export const Step1: React.FC = () => {
  return (
    <Row justify="center" gutter={[0, { xs: 24, sm: 24, md: 48, lg: 48 }]}>
      <Col span={24}>
        <Row justify="center">
          <Col>
            <RateSelection />
          </Col>
        </Row>
      </Col>

      <Col xs={24} sm={24} md={18} lg={18}>
        <CurrencySelection />
      </Col>
    </Row>
  );
};
