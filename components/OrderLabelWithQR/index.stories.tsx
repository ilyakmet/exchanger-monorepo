/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { OrderLabelWithQR } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'OrderLabelWithQR' };

export const Index = () => <OrderLabelWithQR />;

export const WithLayout = () => (
  <AppLayout>
    <OrderLabelWithQR />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <OrderLabelWithQR />
      </Col>
    </Row>
  </AppLayout>
);
