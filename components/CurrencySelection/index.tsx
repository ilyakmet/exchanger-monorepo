import React, { useEffect } from 'react';

// Types
import { LabelSelectorProps } from '../../interfaces';

// Ant Design
import { Form, Input, Button, Select, Typography, Row, Col } from 'antd';

// Formik
import { useFormik } from 'formik';

// Yup
import * as Yup from 'yup';

// Components
import { CurrencyLabel } from '..';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCurrencyListSaga,
  updateMinAmountSaga,
  updateEstimateSaga,
} from '../../redux/actions/exchangeForm';
import {
  selectCurrencyList,
  selectFromTo,
  selectdefaultAmounts,
  selectEstimate,
  selectMinAmount,
} from '../../redux/selectors/exchangeForm';

// Utils
import { calculateRate } from '../../utils';

// // SubComponents
const { Option } = Select;
const { Text } = Typography;

export const CurrencySelection = (): React.ReactElement => {
  const currencyList = useSelector(selectCurrencyList);
  const { from, to } = useSelector(selectFromTo);
  const defaultAmounts = useSelector(selectdefaultAmounts);
  const estimate = useSelector(selectEstimate);
  const minAmount = useSelector(selectMinAmount);
  const dispatch = useDispatch();

  console.log({ from, to });

  const formik = useFormik({
    initialValues: {
      amount: defaultAmounts[from.ticker],
      from: from.ticker,
      to: to.ticker,
    },
    validationSchema: Yup.lazy((values: any) => {
      const message = `Minimum amount is ${minAmount} ${values.from.toUpperCase()}`;

      return Yup.object().shape({
        amount: Yup.number().required(message).min(minAmount, message).typeError(message),
      });
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log({ values });
    },
  });

  useEffect(() => {
    dispatch(updateCurrencyListSaga());
  }, []);

  useEffect(() => {
    dispatch(updateMinAmountSaga({ from: formik.values.from, to: formik.values.to }));

    if (formik.values.amount >= minAmount) {
      dispatch(
        updateEstimateSaga({
          amount: formik.values.amount,
          from: formik.values.from,
          to: formik.values.to,
        }),
      );
    }
  }, [formik.values.amount, formik.values.from, formik.values.to]);

  const _LabelSelector: React.FC<LabelSelectorProps> = ({
    fieldName,
    defaultTicker,
    currencyList,
  }) => (
    <Select
      style={{ width: '160px' }}
      // defaultValue={defaultTicker}
      value={defaultTicker}
      showSearch
      onChange={(value) => {
        formik.setFieldValue(fieldName, value);
      }}
    >
      {currencyList.map(({ ticker, image }) => (
        <Option key={ticker} value={ticker}>
          <CurrencyLabel ticker={ticker} image={image} />
        </Option>
      ))}
    </Select>
  );

  return (
    <>
      {currencyList.length ? (
        <Form onFinish={() => formik.handleSubmit()}>
          <Row justify="center" gutter={[0, 15]}>
            <Col span={24}>
              <Form.Item
                help={
                  formik.touched.amount && formik.errors.amount ? formik.errors.amount : 'You Send'
                }
                validateStatus={formik.touched.amount && formik.errors.amount ? 'error' : 'success'}
              >
                <Input
                  size="large"
                  allowClear
                  {...formik.getFieldProps('amount')}
                  addonAfter={_LabelSelector({
                    fieldName: 'from',
                    defaultTicker: formik.values.from,
                    currencyList,
                  })}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item help="You Get">
                <Input
                  value={estimate}
                  size="large"
                  allowClear
                  disabled
                  addonAfter={_LabelSelector({
                    fieldName: 'to',
                    defaultTicker: formik.values.to,
                    currencyList,
                  })}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row justify="center">
                <Text>{`1 ${formik.values.from.toUpperCase()} ~ ${
                  calculateRate(formik.values.amount, estimate, 1000000) || '...'
                } ${formik.values.to.toUpperCase()} Expected Rate`}</Text>
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
        </Form>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
