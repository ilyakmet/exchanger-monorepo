import React from 'react';

// Lodash
import _ from 'lodash';

// Ant Design
import { Row, Col } from 'antd';

// Utils
import { parrotNames } from '../../utils';

const rootApi = '/partyparrot';

export const PartyParrotLoader: React.FC<{
  children?: any;
  size: string;
}> = ({ children, size }): React.ReactElement => {
  return (
    <Row>
      <Col span={24}>
        <Row justify="center">
          <Col>
            <img
              src={`${rootApi}/${parrotNames[_.random(0, parrotNames.length - 1)]}.gif`}
              style={{ width: size }}
            />
          </Col>
        </Row>
      </Col>
      <br />
      <Col span={24}>
        <Row justify="center">
          <Col>{children}</Col>
        </Row>
      </Col>
    </Row>
  );
};
