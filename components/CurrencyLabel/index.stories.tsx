/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { CurrencyLabel } from '.';
import { AppLayout } from '../AppLayout';
import { currenciesList } from '../../utils';

const [btc] = currenciesList;

export default { title: 'CurrencyLabel' };

export const Index = () => <CurrencyLabel ticker={btc.ticker} image={btc.image} />;

export const WithLayout = () => (
  <AppLayout>
    <CurrencyLabel ticker={btc.ticker} image={btc.image} />
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col lg={12}>
        <CurrencyLabel ticker={btc.ticker} image={btc.image} />
      </Col>
    </Row>
  </AppLayout>
);
