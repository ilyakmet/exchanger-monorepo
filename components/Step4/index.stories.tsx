import React from 'react';
import { Row, Col } from 'antd';
import { Step4 } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'Step4' };

export const Index = () => <Step4 />;

export const WithLayout = () => (
  <AppLayout>
    <Step4 />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12}>
        <Step4 />
      </Col>
    </Row>
  </AppLayout>
);
