import React from 'react';
import { Row, Col } from 'antd';
import { RecipientWalletInput } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'RecipientWalletInput' };

export const Index = () => <RecipientWalletInput />;

export const WithLayout = () => (
  <AppLayout>
    <RecipientWalletInput />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col lg={12} sm={18}>
        <RecipientWalletInput />
      </Col>
    </Row>
  </AppLayout>
);
