import React from 'react';
import { Row, Col } from 'antd';
import { Step2 } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'Step2' };

export const Index = () => <Step2 />;

export const WithLayout = () => (
  <AppLayout>
    <Step2 />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col sm={18} lg={12}>
        <Step2 />
      </Col>
    </Row>
  </AppLayout>
);
