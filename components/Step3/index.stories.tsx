import React from 'react';
import { Row, Col } from 'antd';
import { Step3 } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'Step3' };

export const Index = () => <Step3 />;

export const WithLayout = () => (
  <AppLayout>
    <Step3 />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12}>
        <Step3 />
      </Col>
    </Row>
  </AppLayout>
);
