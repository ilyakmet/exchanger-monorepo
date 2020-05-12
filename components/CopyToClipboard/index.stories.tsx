/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { CopyToClipboard } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'CopyToClipboard' };

export const Index = () => <CopyToClipboard />;

export const WithLayout = () => (
  <AppLayout>
    <CopyToClipboard />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <CopyToClipboard />
      </Col>
    </Row>
  </AppLayout>
);
