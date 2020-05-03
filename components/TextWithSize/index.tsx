import React from 'react';

// Styled components
import styled from 'styled-components';

// Ant Design
import { Typography } from 'antd';

// Subcomponents
const { Text } = Typography;

export const TextWithSize = styled((props) => <Text {...props} />)`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;

// export const TextWithSize = ({ children, size, color }: any) => (
//   <Text style={{ fontSize: size, color: color }}>{children}</Text>
// );
