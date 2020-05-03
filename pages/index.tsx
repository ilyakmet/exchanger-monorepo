import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { AppLayout, AppSteps, Step1 } from '../components';

const Index = () => (
  <AppLayout title="Exchanger">
    <Row justify="center">
      <Col lg={12} sm={18}>
        <AppSteps current={0} marginV={50}>
          <Step1 marginV={50} />
        </AppSteps>
      </Col>
    </Row>

    <img src="https://cultofthepartyparrot.com/parrots/hd/parrot.gif" />
  </AppLayout>
);

export default Index;
