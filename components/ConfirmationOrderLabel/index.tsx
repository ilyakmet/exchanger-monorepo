import React from 'react';

// Ant Design
import { Row, Col, Typography } from 'antd';

// Ant Icons
import { ArrowDownOutlined } from '@ant-design/icons';

// Redux
import { useSelector } from 'react-redux';
import { selectOrderData } from '../../redux/selectors/exchangeForm';

// SubComponents
const { Text } = Typography;

// Utils
import { calculateRate } from '../../utils';
import { breakAddress } from '../../utils';

export const ConfirmationOrderLabel: React.FC = (): React.ReactElement => {
  const {
    expectedSendAmount,
    expectedReceiveAmount,
    fromCurrency,
    toCurrency,
    payoutAddress,
  } = useSelector(selectOrderData);

  const splitedPayoutAddress = breakAddress({ address: payoutAddress || '' }).toLowerCase();

  return (
    <Row
      justify="center"
      gutter={[0, 10]}
      style={{
        background: '#FAFAFA',
        border: '1px solid #1890FF',
        borderRadius: '2px',
        padding: '1rem',
      }}
    >
      <Col xs={24} sm={24} md={24} lg={24}>
        <div style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>You Send</Text>
          <br />
          <Text style={{ fontSize: '1.4rem' }}>
            {expectedSendAmount || '...'} {fromCurrency.ticker.toUpperCase()}
          </Text>
          <br />
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>
            1 {fromCurrency.ticker.toUpperCase()} ~{' '}
            {calculateRate(expectedSendAmount, expectedReceiveAmount, 10000000) || '...'}{' '}
            {toCurrency.ticker.toUpperCase()}
          </Text>
        </div>
      </Col>

      <Col>
        <div>
          <ArrowDownOutlined />
        </div>
      </Col>

      <Col xs={24} sm={24} md={24} lg={24}>
        <div style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>You Get</Text>
          <br />
          <Text style={{ fontSize: '1.4rem' }}>
            ≈ {expectedReceiveAmount || '...'} {toCurrency.ticker.toUpperCase()}
          </Text>
          <br />
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>
            {splitedPayoutAddress === '...'
              ? `(Input Your ${toCurrency.ticker.toUpperCase()} Address Below)`
              : splitedPayoutAddress}
          </Text>
        </div>
      </Col>
    </Row>
  );
};
