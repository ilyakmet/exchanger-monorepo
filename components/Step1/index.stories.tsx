import React from 'react';
import { Row, Col } from 'antd';
import { Step1 } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'Step1' };

export const Index = () => <Step1 />;

export const WithLayout = () => (
  <AppLayout>
    <Step1 />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col>
        <Step1 />
      </Col>
    </Row>
  </AppLayout>
);
