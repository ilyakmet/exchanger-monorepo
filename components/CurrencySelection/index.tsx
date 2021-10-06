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
  // _setIsLoading,
  incCurrentStep,
  setExpectedSendAmountFromCurrencyToCurrency,
  setMinAmountSaga,
  setCurrencyListSaga,
  setExpectedReceiveAmountEstimatedArrivalSaga,
} from '../../redux/actions/exchangeForm';
import {
  selectCurrencyList,
  selectOrderData,
  selectdefaultAmounts,
  selectMinAmount,
} from '../../redux/selectors/exchangeForm';

// Utils
import { calculateRate } from '../../utils';

// // SubComponents
const { Option } = Select;
const { Text } = Typography;

export const CurrencySelection = (): React.ReactElement => {
  const dispatch = useDispatch();
  const currencyList = useSelector(selectCurrencyList);
  const defaultAmounts = useSelector(selectdefaultAmounts);
  const minAmount = useSelector(selectMinAmount);
  const { expectedReceiveAmount, fromCurrency, toCurrency } = useSelector(selectOrderData);

  console.log({ currencyList });

  const formik = useFormik({
    initialValues: {
      expectedSendAmount: defaultAmounts[fromCurrency.ticker],
      fromCurrency: fromCurrency.ticker,
      toCurrency: toCurrency.ticker,
    },
    validationSchema: Yup.lazy((values: any) => {
      const message = `Minimum amount is ${minAmount} ${values.fromCurrency.toUpperCase()}`;

      return Yup.object().shape({
        expectedSendAmount: Yup.number()
          .required(message)
          .min(minAmount, message)
          .typeError(message),
      });
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(setExpectedSendAmountFromCurrencyToCurrency({ ...values }));
      dispatch(incCurrentStep());
    },
  });

  useEffect(() => {
    dispatch(setCurrencyListSaga());
  }, []);

  useEffect(() => {
    dispatch(
      setMinAmountSaga({
        fromCurrency: formik.values.fromCurrency,
        toCurrency: formik.values.toCurrency,
      }),
    );

    if (formik.values.expectedSendAmount >= minAmount) {
      dispatch(
        setExpectedReceiveAmountEstimatedArrivalSaga({
          expectedSendAmount: formik.values.expectedSendAmount,
          fromCurrency: formik.values.fromCurrency,
          toCurrency: formik.values.toCurrency,
        }),
      );
    }
  }, [formik.values.expectedSendAmount, formik.values.fromCurrency, formik.values.toCurrency]);

  const _LabelSelector: React.FC<LabelSelectorProps> = ({
    fieldName,
    defaultTicker,
    currencyList,
  }) => (
    <Select
      style={{ width: '160px' }}
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
      <Form onFinish={() => formik.handleSubmit()}>
        <Row justify="center" gutter={[0, 12]}>
          <Col span={24}>
            <Form.Item
              help={
                formik.touched.expectedSendAmount && formik.errors.expectedSendAmount
                  ? formik.errors.expectedSendAmount
                  : 'You Send'
              }
              validateStatus={
                formik.touched.expectedSendAmount && formik.errors.expectedSendAmount
                  ? 'error'
                  : 'success'
              }
            >
              <Input
                size="large"
                allowClear
                {...formik.getFieldProps('expectedSendAmount')}
                addonAfter={_LabelSelector({
                  fieldName: 'fromCurrency',
                  defaultTicker: formik.values.fromCurrency,
                  currencyList,
                })}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item help="You Get">
              <Input
                // prefix={
                //   expectedReceiveAmount ? <PartyParrotLoader size="20px" /> : expectedReceiveAmount
                // }
                value={expectedReceiveAmount || 'Loading...'}
                size="large"
                allowClear
                disabled
                addonAfter={_LabelSelector({
                  fieldName: 'toCurrency',
                  defaultTicker: formik.values.toCurrency,
                  currencyList,
                })}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Row justify="center">
              <Text>
                {`1 ${formik.values.fromCurrency.toUpperCase()} ~ ${
                  calculateRate(formik.values.expectedSendAmount, expectedReceiveAmount, 1000000) ||
                  'Loading...'
                } ${formik.values.toCurrency.toUpperCase()} Expected Rate`}
              </Text>
            </Row>
          </Col>

          <Col span={12}>
            <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
              Swap
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
