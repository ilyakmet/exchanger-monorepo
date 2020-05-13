/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { AppSteps } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'AppSteps' };

export const Index = () => <AppSteps> </AppSteps>;

export const WithLayout = () => (
  <AppLayout>
    <AppSteps> </AppSteps>
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col lg={12}>
        <AppSteps> </AppSteps>
      </Col>
    </Row>
  </AppLayout>
);
