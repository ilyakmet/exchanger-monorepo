import React from 'react';
import { Row, Col } from 'antd';
import { PayoutAddressInput } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'PayoutAddressInput' };

export const Index = () => <PayoutAddressInput />;

export const WithLayout = () => (
  <AppLayout>
    <PayoutAddressInput />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col lg={12} sm={18}>
        <PayoutAddressInput />
      </Col>
    </Row>
  </AppLayout>
);
