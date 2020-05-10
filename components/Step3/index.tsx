import React from 'react';

// Ant Design
import { Row, Col, Typography } from 'antd';

// Components
import { OrderLabel, StepButtons } from '..';

// SubComponents
const { Text } = Typography;

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { incCurrentStep, decCurrentStep, resetAmountTo } from '../../redux/actions/exchangeForm';
import { selectEstimatedArrival } from '../../redux/selectors/exchangeForm';

export const Step3: React.FC = () => {
  const estimatedArrival = useSelector(selectEstimatedArrival);
  const dispatch = useDispatch();

  return (
    <Row justify="center" gutter={[0, { xs: 24, sm: 24, md: 48, lg: 48 }]}>
      <Col xs={24} sm={24} md={20} lg={20}>
        <OrderLabel />
      </Col>

      <Col span={24}>
        <Row justify="center">
          <Col>
            <Text>≈ {estimatedArrival || '...'} Estimated Arrival</Text>
          </Col>
        </Row>
      </Col>

      <Col xs={24} sm={24} md={20} lg={20}>
        <StepButtons
          rightButtonName="Confirm"
          rightButtonOnClick={() => dispatch(incCurrentStep())}
          leftButtonName="Back"
          leftButtonOnClick={() => {
            dispatch(resetAmountTo());
            dispatch(decCurrentStep());
          }}
        />
      </Col>

      <Col span={24}>
        <Row justify="center">
          <Col>
            <div style={{ textAlign: 'center' }}>
              <Text>
                By Clicking “Confirm” Button, You Agree to the Exchanger{' '}
                <Text strong style={{ color: '#1890FF' }}>
                  Terms of Use
                </Text>{' '}
                and{' '}
                <Text strong style={{ color: '#1890FF' }}>
                  Privacy Policy
                </Text>
              </Text>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
