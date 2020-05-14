/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col } from 'antd';
import { CopyToClipboard } from '.';
import { AppLayout } from '../AppLayout';

export default { title: 'CopyToClipboard' };

export const Index = () => (
  <CopyToClipboard text="test" onCopy={() => {}}>
    {' '}
  </CopyToClipboard>
);

export const WithLayout = () => (
  <AppLayout>
    <CopyToClipboard text="test" onCopy={() => {}}>
      {' '}
    </CopyToClipboard>
  </AppLayout>
);

export const WithLayoutAndGrid = () => (
  <AppLayout>
    <Row justify="center">
      <Col md={20} lg={12}>
        <CopyToClipboard text="test" onCopy={() => {}}>
          {' '}
        </CopyToClipboard>
      </Col>
    </Row>
  </AppLayout>
);
