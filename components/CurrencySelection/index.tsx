import React, { useMemo } from 'react';

// Ant Design
import { Form, Input, Button, Select, Row, Col } from 'antd';

// Formik
import { useFormik } from 'formik';

// Yup
import * as Yup from 'yup';

// SubComponents
const { Option } = Select;

// Redux Imitation ===!!!===
import { currenciesList } from '../../utils';
const [btc, eth] = currenciesList;
const initialValues = {
  sendCurrency: btc.ticker.toUpperCase(),
  sendAmount: 0,
  getCurrency: eth.ticker.toUpperCase(),
  getAmount: 0,
};

export const CurrencySelection: React.FC = (): React.ReactElement => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.lazy((values) => {
      return Yup.object({
        sendAmount: Yup.number()
          .min(5, `Minimum amount is ${5} ${values.sendCurrency}`)
          .typeError('Must be a number!'),
        getAmount: Yup.number().typeError('Must be a number!'),
      });
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const defaultCurrencyLabel = (
  //   <>
  //     <img
  //       style={{ width: '25px', height: '25px' }}
  //       src="https://changenow.io/images/coins/btc.svg"
  //       className="mb-1 p-1"
  //     />

  //     <span>{initialValues.sendCurrency}</span>
  //   </>
  // );

  const defaultCurrencyLabel = (
    <div style={{ height: '50px' }}>
      <Row align="middle" gutter={[5, 0]} style={{ height: '20px', border: '1px solid #333' }}>
        <Col>
          <img
            style={{ width: '20px', height: '20px' }}
            src="https://changenow.io/images/coins/btc.svg"
            className="mb-1"
          />
        </Col>

        <Col>
          <span style={{ fontSize: '8px', display: 'block' }}>{btc.ticker.toUpperCase()}</span>

          <span style={{ fontSize: '8px', display: 'block' }}>{btc.name}</span>
        </Col>
      </Row>
    </div>
  );

  // Currency Selector
  const selectCurrency = (
    <Select
      style={{ width: '160px' }}
      defaultValue={defaultCurrencyLabel}
      showSearch
      onChange={(value) => {
        formik.setFieldValue('sendCurrency', value);
      }}
    >
      {useMemo(
        () =>
          currenciesList.map(({ ticker, name, image }) => (
            <Option key={name} value={name}>
              <Row align="middle" gutter={[5, 0]}>
                <Col>
                  <img style={{ width: '20px', height: '20px' }} src={image} className="mb-1" />
                </Col>

                <Col>
                  <span style={{ fontSize: '8px', display: 'block' }}>{ticker.toUpperCase()}</span>

                  <span style={{ fontSize: '8px', display: 'block' }}>{name.toUpperCase()}</span>
                </Col>
              </Row>
            </Option>
          )),
        [],
      )}
    </Select>
  );

  return (
    <Form onFinish={() => formik.handleSubmit()}>
      <Form.Item
        name="yousend"
        help={
          formik.touched.sendAmount && formik.errors.sendAmount
            ? formik.errors.sendAmount
            : 'You Send'
        }
        validateStatus={formik.touched.sendAmount && formik.errors.sendAmount ? 'error' : 'success'}
      >
        <Input
          id="yousend"
          {...formik.getFieldProps('sendAmount')}
          addonAfter={selectCurrency}
          size="large"
          allowClear
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
