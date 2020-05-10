import React from 'react';

// Ant Design
import { Row, Col, Typography } from 'antd';

// Ant Icons
import { ArrowDownOutlined } from '@ant-design/icons';

// Redux
import { useSelector } from 'react-redux';
import { selectAmountFromToEstimateRateAmountTo } from '../../redux/selectors/exchangeForm';

// SubComponents
const { Text } = Typography;

// Utils
import { calculateRate } from '../../utils';
import { shorten } from '../../utils';

export const OrderLabel: React.FC = (): React.ReactElement => {
  const { amount, from, to, estimate, amountTo } = useSelector(
    selectAmountFromToEstimateRateAmountTo,
  );

  const amountToShorten = shorten(amountTo || '').toLowerCase();

  return (
    <Row
      justify="center"
      gutter={[0, 10]}
      style={{
        background: '#FAFAFA',
        border: '1px solid #1890FF',
        borderRadius: '2px',
        padding: '0.5rem',
      }}
    >
      <Col xs={24} sm={24} md={24} lg={24}>
        <div style={{ textAlign: 'center' }}>
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>You Send</Text>
          <br />
          <Text style={{ fontSize: '1.4rem' }}>
            {amount || '...'} {from.ticker.toUpperCase()}
          </Text>
          <br />
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>
            1 {from.ticker.toUpperCase()} ~ {calculateRate(amount, estimate, 10000000) || '...'}{' '}
            {to.ticker.toUpperCase()}
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
            ≈ {estimate || '...'} {to.ticker.toUpperCase()}
          </Text>
          <br />
          <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>
            {amountToShorten === '...'
              ? `(Input Your ${to.ticker.toUpperCase()} Address Below)`
              : amountToShorten}
          </Text>
        </div>
      </Col>
    </Row>
  );
};
