import React, { useMemo, ReactNode } from 'react';

// Types
import { LabelSelectorProps } from '../../interfaces';

// Ant Design
import { Form, Input, Button, Select, Typography, Row, Col } from 'antd';

// React Hook Form
import { useForm, Controller } from 'react-hook-form';

// Yup
import * as Yup from 'yup';

// Components
import { CurrencyLabel } from '..';

// SubComponents
const { Option } = Select;
const { Text } = Typography;

// Redux Imitation ===!!!===
import { currenciesList } from '../../utils';

const [btc, eth] = currenciesList;

export const CurrencySelection: React.FC = (): React.ReactElement => {
  const { control, errors, watch, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      sendAmount: 5,
      sendCurrency: btc.ticker,
      getAmount: 5,
      getCurrency: eth.ticker,
    },
    validationSchema: Yup.lazy((values) =>
      Yup.object().shape({
        sendAmount: Yup.number()
          .min(5, `Minimum amount is ${5} ${values.sendCurrency.toUpperCase()}`)
          .typeError(`Minimum amount is ${5} ${values.sendCurrency.toUpperCase()}`),
        getAmount: Yup.number(),
      }),
    ),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const watchsendAmount = watch('sendAmount');
  const watchgetAmount = watch('getAmount');

  const _LabelSelector: React.FC<{ name: string }> = ({ name }) => (
    <Controller
      name={name}
      control={control}
      as={
        <Select style={{ width: '160px' }} showSearch>
          {useMemo(
            () =>
              currenciesList.map(({ ticker, image }) => (
                <Option key={ticker} value={ticker}>
                  <CurrencyLabel ticker={ticker} image={image} />
                </Option>
              )),
            [],
          )}
        </Select>
      }
    />
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row justify="center" gutter={[0, 15]}>
        <Col span={24}>
          <Form.Item
            help={
              errors.sendAmount?.message && watchsendAmount.toString() !== ''
                ? errors.sendAmount.message
                : 'You Send'
            }
            validateStatus={
              errors.sendAmount && watchsendAmount.toString() !== '' ? 'error' : 'success'
            }
          >
            <Controller
              name="sendAmount"
              control={control}
              as={
                <Input
                  addonAfter={<_LabelSelector name="sendCurrency" />}
                  size="large"
                  allowClear
                />
              }
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            help="You Get"
            // validateStatus={
            //   errors.getAmount && watchgetAmount.toString() !== '' ? 'error' : 'success'
            // }
          >
            <Controller
              name="getAmount"
              control={control}
              as={
                <Input addonAfter={<_LabelSelector name="getCurrency" />} size="large" allowClear />
              }
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Row justify="center">
            <Text>1 BTC ~ 35.861723 ETH Expected Rate</Text>
          </Row>
        </Col>

        <Col span={15}>
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            size="large"
            style={{ width: '100%', height: '50px' }}
          >
            Swap
          </Button>
        </Col>
      </Row>
    </form>
  );
};
