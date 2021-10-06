import React from 'react';

// Types
import { StepButtonsProps } from '../../interfaces';

// Ant Design
import { Row, Col, Button } from 'antd';

export const StepButtons: React.FC<StepButtonsProps> = ({
  rightButtonOnClick,
  leftButtonOnClick,
  rightButtonName,
  leftButtonName,
}) => (
  <Row gutter={[54, 0]}>
    <Col span={12}>
      <Button size="large" style={{ width: '100%' }} onClick={leftButtonOnClick}>
        {leftButtonName}
      </Button>
    </Col>

    <Col span={12}>
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        style={{ width: '100%' }}
        onClick={rightButtonOnClick}
      >
        {rightButtonName}
      </Button>
    </Col>
  </Row>
);
