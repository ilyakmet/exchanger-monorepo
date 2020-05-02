import React from 'react';
import { Row, Col } from 'antd';
import { Step1 } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'Step1' };

export const Index = () => <Step1 marginV={50} />;

export const WithLayout = () => (
  <AppLayout>
    <Step1 marginV={50} />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col>
        <Step1 marginV={50} />
      </Col>
    </Row>
  </AppLayout>
);
