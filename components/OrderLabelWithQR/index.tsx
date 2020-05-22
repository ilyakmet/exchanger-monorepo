import React, { useEffect } from 'react';

// Ant Design
import { Row, Col, Typography, Tag } from 'antd';

// Ant Icons
import { SyncOutlined } from '@ant-design/icons';

// Components
import { QRCode, CopyToClipboard, OrderStatusTag } from '..';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  setOrderSaga,
  setTrueForIsPayinAddressCopied,
  setFalseForIsPayinAddressCopied,
} from '../../redux/actions/exchangeForm';
import { selectOrderData, selectIsPayinAddressCopied } from '../../redux/selectors/exchangeForm';

// SubComponents
const { Text } = Typography;

// Utils
import { breakAddress } from '../../utils';

export const OrderLabelWithQR: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
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

  const isPayinAddressCopied = useSelector(selectIsPayinAddressCopied);

  useEffect(() => {
    dispatch(
      setOrderSaga({
        fromCurrency: fromCurrency.ticker,
        toCurrency: toCurrency.ticker,
        payoutAddress,
        expectedSendAmount,
      }),
    );
  }, []);

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
            <QRCode data={payinAddress || ' '} />
          </Col>

          <Col>
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>Id</Text>
            <br />
            <Text>{id}</Text>
            <br />
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>Status</Text>
            <br />
            <OrderStatusTag />
          </Col>

          <Col xs={12} sm={24} md={24} lg={24}>
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>You Send</Text>
            <br />
            <Text style={{ fontSize: '1.3rem' }}>
              {expectedSendAmount || '...'} {fromCurrency.ticker.toUpperCase()}
            </Text>
            <br />
            <Text style={{ fontSize: '0.825rem', opacity: '0.5' }}>To Address </Text>
            {isPayinAddressCopied ? <Tag color="#1890FF">Copied!</Tag> : null}
            <br />
            <CopyToClipboard
              text={payinAddress}
              onCopy={() => {
                dispatch(setTrueForIsPayinAddressCopied());
                setTimeout(() => dispatch(setFalseForIsPayinAddressCopied()), 3000);
              }}
            >
              <Text strong underline style={{ fontSize: '1.3rem', color: '#1890FF' }}>
                {breakAddress({ address: payinAddress || ' ' }) || '...'}
              </Text>
            </CopyToClipboard>
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
