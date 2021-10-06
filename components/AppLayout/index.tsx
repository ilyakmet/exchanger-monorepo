import React from 'react';

//  Next
import Link from 'next/link';
import Head from 'next/head';

// Ant Design
import { Layout, Space } from 'antd';

// Styled Components Implementations
import { TextWithSize } from '..';

// Types
import { AppLayoutProps } from '../../interfaces';

// Subcomponents
const { Header, Footer, Content } = Layout;

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title = 'This is the default title',
}): React.ReactElement => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial- scale=1.0, width=device-width" />
    </Head>

    <Layout>
      <Header style={{ padding: '0 20px', background: '#fff' }}>
        <Link href="/">
          <a>
            <TextWithSize size="1.02rem" color="#D240DD">
              <span role="img" aria-label="Hand">
                💰
              </span>
              Exchanger
            </TextWithSize>
          </a>
        </Link>
      </Header>

      <Content style={{ padding: '0 20px', background: '#fff', height: 'calc(100vh - 120px)' }}>
        {children}
      </Content>

      <Footer style={{ padding: '0 20px', background: '#fff' }} className="pt-3">
        <Space>
          <Link href="/about">
            <a>
              <TextWithSize size="0.825rem" color="#D240DD">
                About
              </TextWithSize>
            </a>
          </Link>

          <Link href="/docs">
            <a>
              <TextWithSize size="0.825rem" color="#D240DD">
                Docs
              </TextWithSize>
            </a>
          </Link>

          <Link href="/code">
            <a>
              <TextWithSize size="0.825rem" color="#D240DD">
                Code
              </TextWithSize>
            </a>
          </Link>
        </Space>
      </Footer>
    </Layout>
  </>
);
