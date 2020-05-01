import React from 'react';

// Ant Design
import { Row, Col } from 'antd';

// Types
import { Step1Props } from '../../interfaces';

// Components
import { RateSelection, CurrencySelection } from '..';

export default { title: 'Step1' };

export const Step1: React.FC<Step1Props> = ({ marginV }) => (
  <Row justify="center" gutter={[0, marginV]}>
    <Col>
      <RateSelection />
    </Col>

    <Col>
      <CurrencySelection />
    </Col>
  </Row>
);
