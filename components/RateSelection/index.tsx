import React from 'react';

// Ant Design
import { Radio } from 'antd';

export const RateSelection: React.FC = (): React.ReactElement => (
  <Radio.Group defaultValue="0" size="large" buttonStyle="solid">
    <Radio.Button value="0">Classic Rate</Radio.Button>
    <Radio.Button value="1" disabled>
      Fixed Rate
    </Radio.Button>
  </Radio.Group>
);
