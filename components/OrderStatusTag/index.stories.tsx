/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { OrderStatusTag } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'OrderStatusTag' };

export const Index = () => <OrderStatusTag />;

export const WithLayout = () => (
  <AppLayout>
    <OrderStatusTag />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <OrderStatusTag />
      </Col>
    </Row>
  </AppLayout>
);
