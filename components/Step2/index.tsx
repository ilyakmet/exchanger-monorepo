import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { ConfirmationOrderLabel, PayoutAddressInput } from '..';

export const Step2: React.FC = () => {
  return (
    <Row justify="center" gutter={[0, { xs: 24, sm: 24, md: 48, lg: 48 }]}>
      <Col xs={24} sm={24} md={20} lg={20}>
        <ConfirmationOrderLabel />
      </Col>

      <Col xs={24} sm={24} md={20} lg={20}>
        <PayoutAddressInput />
      </Col>
    </Row>
  );
};
