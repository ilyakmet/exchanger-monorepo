import React from 'react';
import { Row, Col } from 'antd';
import { CurrencySelection } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'CurrencySelection' };

export const Index = () => <CurrencySelection />;

export const WithLayout = () => (
  <AppLayout>
    <CurrencySelection />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col>
        <CurrencySelection />
      </Col>
    </Row>
  </AppLayout>
);
