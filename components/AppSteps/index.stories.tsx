/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { AppSteps } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'AppSteps' };

export const Index = () => (
  <AppSteps current={1} marginV={0}>
    {' '}
  </AppSteps>
);

export const WithLayout = () => (
  <AppLayout>
    <AppSteps current={2} marginV={0}>
      {' '}
    </AppSteps>
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col lg={12}>
        <AppSteps current={3} marginV={0}>
          {' '}
        </AppSteps>
      </Col>
    </Row>
  </AppLayout>
);
