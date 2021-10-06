/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { ConfirmationOrderLabel } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'ConfirmationOrderLabel' };

export const Index = () => <ConfirmationOrderLabel />;

export const WithLayout = () => (
  <AppLayout>
    <ConfirmationOrderLabel />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <ConfirmationOrderLabel />
      </Col>
    </Row>
  </AppLayout>
);
