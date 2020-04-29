import React from 'react';

// Ant Design
import { Steps, Row, Col } from 'antd';

// Types
import { AppStepsProps } from '../../interfaces';

// Subcomponents
const { Step } = Steps;

export const AppSteps: React.FC<AppStepsProps> = ({
  children,
  current,
  marginV,
}): React.ReactElement => (
  <Row justify="center" gutter={[0, marginV]}>
    <Col span={24}>
      <Steps size="small" current={current}>
        <Step title="From" />
        <Step title="Send To" />
        <Step title="Confirmation" />
        <Step title="Sending" />
      </Steps>
    </Col>
    {children ? <Col>{children[`${current}`] ? children[`${current}`] : children}</Col> : null}
  </Row>
);
