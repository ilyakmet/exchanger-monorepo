/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { PartyParrotLoader } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'PartyParrotLoader' };

export const Index = () => <PartyParrotLoader size="50px">Loading...</PartyParrotLoader>;

export const WithLayout = () => (
  <AppLayout>
    <PartyParrotLoader size="50px">Loading...</PartyParrotLoader>
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <PartyParrotLoader size="50px">Loading...</PartyParrotLoader>
      </Col>
    </Row>
  </AppLayout>
);
