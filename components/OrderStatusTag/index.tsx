import React from 'react';

// Ant Design
import { Tag } from 'antd';

// Ant Icons
import {
  SyncOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

// Redux
import { useSelector } from 'react-redux';
import { selectOrderData } from '../../redux/selectors/exchangeForm';

const selectStatusTag = (status: string): React.ReactElement => {
  switch (status) {
    case 'waiting':
      return (
        <Tag
          icon={<ClockCircleOutlined style={{ verticalAlign: '.08rem' }} />}
          color="default"
          style={{ verticalAlign: 'middle' }}
        >
          {status}
        </Tag>
      );
      break;
    case 'exchanging':
      return (
        <Tag icon={<SyncOutlined spin style={{ verticalAlign: '.08rem' }} />} color="processing">
          {status}
        </Tag>
      );
      break;
    case 'finished':
      return (
        <Tag icon={<CheckCircleOutlined style={{ verticalAlign: '.08rem' }} />} color="success">
          {status}
        </Tag>
      );
      break;
    default:
      return (
        <Tag
          icon={<ExclamationCircleOutlined style={{ verticalAlign: '.08rem' }} />}
          color="warning"
        >
          {status}
        </Tag>
      );
      break;
  }
};

export const OrderStatusTag: React.FC = (): React.ReactElement => {
  const { status } = useSelector(selectOrderData);
  return selectStatusTag(status);
};
