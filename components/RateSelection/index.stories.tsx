import React from 'react';
import { Row, Col } from 'antd';
import { RateSelection } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'RateSelection' };

export const Index = () => <RateSelection />;

export const WithLayout = () => (
  <AppLayout>
    <RateSelection />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col>
        <RateSelection />
      </Col>
    </Row>
  </AppLayout>
);
