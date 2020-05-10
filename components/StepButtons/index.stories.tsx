import React from 'react';
import { Row, Col } from 'antd';
import { StepButtons } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'StepButtons' };

export const Index = () => (
  <StepButtons
    rightButtonName="Confirm"
    rightButtonOnClick={() => {}}
    leftButtonName="Back"
    leftButtonOnClick={() => {}}
  />
);

export const WithLayout = () => (
  <AppLayout>
    <StepButtons
      rightButtonName="Confirm"
      rightButtonOnClick={() => {}}
      leftButtonName="Back"
      leftButtonOnClick={() => {}}
    />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col xs={24} sm={24} md={18} lg={12}>
        <StepButtons
          rightButtonName="Confirm"
          rightButtonOnClick={() => {}}
          leftButtonName="Back"
          leftButtonOnClick={() => {}}
        />
      </Col>
    </Row>
  </AppLayout>
);
