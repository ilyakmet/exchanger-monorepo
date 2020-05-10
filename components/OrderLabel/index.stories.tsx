/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { OrderLabel } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'OrderLabel' };

export const Index = () => <OrderLabel />;

export const WithLayout = () => (
  <AppLayout>
    <OrderLabel />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <OrderLabel />
      </Col>
    </Row>
  </AppLayout>
);
