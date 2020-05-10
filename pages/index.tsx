import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { AppLayout, AppSteps, Step1, Step2, Step3 } from '../components';

const Index = () => (
  <AppLayout title="Exchanger">
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12}>
        <AppSteps>
          <Step1 />
          <Step2 />
          <Step3 />
        </AppSteps>
      </Col>
    </Row>
  </AppLayout>
);

export default Index;
