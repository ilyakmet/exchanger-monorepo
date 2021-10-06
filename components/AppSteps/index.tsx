import React from 'react';

// Ant Design
import { Steps, Row, Col } from 'antd';

// Redux
import { useSelector } from 'react-redux';
import { selectcurrentStep } from '../../redux/selectors/exchangeForm';

// Subcomponents
const { Step } = Steps;

export const AppSteps: React.FC<{ children: any }> = ({ children }): React.ReactElement => {
  const currentStep: number = useSelector(selectcurrentStep);

  return (
    <Row justify="center" gutter={[0, { xs: 24, sm: 24, md: 48, lg: 48 }]}>
      <Col span={24}>
        <Steps size="small" current={currentStep}>
          <Step title="From" />
          <Step title="Send To" />
          <Step title="Confirmation" />
          <Step title="Sending" />
        </Steps>
      </Col>

      <Col span={24}>{children ? children[currentStep] : 'No Content'}</Col>
    </Row>
  );
};
