import React from 'react';

// Ant Design
import { Row, Col, Typography, Tag, Button } from 'antd';

// Ant Icons
import { ArrowDownOutlined } from '@ant-design/icons';

// Components
import { QRCode, CopyToClipboard } from '..';

// Redux
import { useSelector } from 'react-redux';
import {
  selectAmountFromToEstimateRateAmountTo,
  selectIsAmountToCopied,
} from '../../redux/selectors/exchangeForm';

// SubComponents
const { Text } = Typography;

// Utils
import { shorten } from '../../utils';

export const OrderLabelWithQR: React.FC = (): React.ReactElement => {
  const { amount, from, to, estimate, amountTo } = useSelector(
    selectAmountFromToEstimateRateAmountTo,
  );

  const isAmountToCopied = useSelector(selectIsAmountToCopied);

  const amountToShorten = shorten(amountTo || '').toLowerCase();

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
          <Col style={{ border: '1px solid #333', marginRight: '1rem' }}>
            <QRCode data="zalupa vam" />
          </Col>

          <Col>
            <Text>Transaction Id: fdd0ded95b2706</Text>
          </Col>

          <Col>
            <Text>You Send</Text>

            <br />

            <Text style={{ fontSize: '1.3rem' }}>0.0000001 BTC</Text>

            <br />

            <Text>To Address</Text>

            <br />

            <Text strong underline style={{ fontSize: '1.3rem', color: '#1890FF' }}>
              0x493609f7cb6d{'\n'}a4d7783a1936d2{'\n'}8277072c9dcdac
            </Text>
          </Col>

          <Col>
            <Text>You Get</Text>

            <br />

            <Text style={{ fontSize: '1.3rem' }}>0.0000001 BTC</Text>

            <br />

            <Text>To Address</Text>

            <br />

            <Text style={{ fontSize: '1.3rem' }}>
              0x493609f7cb6d{'\n'}a4d7783a1936d2{'\n'}8277072c9dcdac
            </Text>
          </Col>
        </Row>
      </Col>

      {/* <Col span={24}>
        <Row
          justify="start"
          align="middle"
          gutter={[0, 12]}
          style={{
            background: '#FAFAFA',
            // border: '1px solid #1890FF',
            borderRadius: '2px',
            padding: '1rem',
          }}
        >
          <Col>
            <Text>You Get</Text>

            <br />

            <Text style={{ fontSize: '1.3rem' }}>0.0000001 BTC</Text>

            <br />

            <Text>To Address</Text>

            <br />

            <Text style={{ fontSize: '1.3rem' }}>
              0x493609f7cb6d{'\n'}a4d7783a1936d2{'\n'}8277072c9dcdac
            </Text>
          </Col>
        </Row>
      </Col> */}
    </Row>
  );
};
