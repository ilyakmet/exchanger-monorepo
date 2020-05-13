import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { OrderLabelWithQR } from '..';

// SubComponents
// const { Text } = Typography;

// Redux
// import { useSelector } from 'react-redux';
// import { incCurrentStep, decCurrentStep, resetAmountTo } from '../../redux/actions/exchangeForm';
// import { selectEstimatedArrival } from '../../redux/selectors/exchangeForm';

export const Step4: React.FC = () => {
  // const estimatedArrival = useSelector(selectEstimatedArrival);
  // const dispatch = useDispatch();

  return (
    <Row justify="center" gutter={[0, { xs: 24, sm: 24, md: 48, lg: 48 }]}>
      <Col xs={24} sm={24} md={20} lg={20}>
        <OrderLabelWithQR />
      </Col>
    </Row>
  );
};
