/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { QRCode } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'QRCode' };

export const Index = () => <QRCode data="zalupa" />;

export const WithLayout = () => (
  <AppLayout>
    <QRCode data="zalupa" />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <QRCode data="zalupa" />
      </Col>
    </Row>
  </AppLayout>
);
