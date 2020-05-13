import React from 'react';

// Types
import { CurrencyLabelProps } from '../../interfaces';

// Ant Design
import { Typography } from 'antd';

// Subcomponents
const { Text } = Typography;

export const CurrencyLabel: React.FC<CurrencyLabelProps> = ({ image, ticker }) => (
  <>
    <img style={{ width: '25px', height: '25px' }} src={image} className="mb-1 p-1" />

    <Text>{ticker.toUpperCase()}</Text>
  </>
);
