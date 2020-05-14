import React from 'react';

// Ant Design
import { Row, Col, Typography, Tag } from 'antd';

// Ant Icons
import { SyncOutlined } from '@ant-design/icons';

// Components
import { QRCode } from '..';

// Redux
import { useSelector } from 'react-redux';
import { selectOrderData, selectIsAmountToCopied } from '../../redux/selectors/exchangeForm';

// SubComponents
const { Text } = Typography;

// Utils
import { breakAddress } from '../../utils';

export const OrderLabelWithQR: React.FC = (): React.ReactElement => {
  const {
    expectedSendAmount,
    expectedReceiveAmount,
    fromCurrency,
    toCurrency,
    payinAddress,
    payoutAddress,
    id,
    status,
  } = useSelector(selectOrderData);

  const isAmountToCopied = useSelector(selectIsAmountToCopied);

  console.log({ id, status, isAmountToCopied });

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Row
          justify="start"
          align="middle"
          gutter={[0, 12]}
          style={{
            background: '#FAFAFA',
            border: '1px solid #1890FF',
            borderRadius: '2px',
            padding: '1rem',
          }}
        >
          <Col style={{ marginRight: '1rem' }}>
            <QRCode data="zalupa vam" />
          </Col>

          <Col>
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>Order Id</Text>
            <br />
            <Text>fdd0ded95b2706</Text>
            <br />
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>Status</Text>
            <br />
            <Tag icon={<SyncOutlined spin />} color="processing">
              processing
            </Tag>
          </Col>

          <Col xs={12} sm={24} md={24} lg={24}>
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>You Send</Text>
            <br />
            <Text style={{ fontSize: '1.3rem' }}>
              {expectedSendAmount || '...'} {fromCurrency.ticker.toUpperCase()}
            </Text>
            <br />
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>To Address</Text>
            <br />
            <Text strong underline style={{ fontSize: '1.3rem', color: '#1890FF' }}>
              {breakAddress({ address: payinAddress }) || '...'}
            </Text>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24}>
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>You Get</Text>
            <br />
            <Text style={{ fontSize: '1.3rem' }}>
              {expectedReceiveAmount || '...'} {toCurrency.ticker.toUpperCase()}
            </Text>
            <br />
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>To Address</Text>
            <br />
            <Text style={{ fontSize: '1.3rem' }}>{breakAddress({ address: payoutAddress })}</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
