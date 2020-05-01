/* eslint-disable no-underscore-dangle */

import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { AppLayout, AppSteps, Step1 } from '../components';

export default { title: 'App' };

export const _Step1 = () => (
  <AppLayout>
    <Row justify="center">
      <Col lg={12}>
        <AppSteps current={0} marginV={50}>
          <Step1 marginV={50} />
        </AppSteps>
      </Col>
    </Row>
  </AppLayout>
);
