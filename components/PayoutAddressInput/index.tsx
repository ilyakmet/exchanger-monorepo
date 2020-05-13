import React from 'react';

// Ant Design
import { Row, Col, Form, Input } from 'antd';

// Components
import { StepButtons } from '..';

// Formik
import { useFormik } from 'formik';

// Yup
import * as Yup from 'yup';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { incCurrentStep, decCurrentStep, setPayoutAddress } from '../../redux/actions/exchangeForm';
import { selectOrderData } from '../../redux/selectors/exchangeForm';

// Utils
import { addressRegEx } from '../../utils';

export const PayoutAddressInput = (): React.ReactElement => {
  const { toCurrency } = useSelector(selectOrderData);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      payoutAddress: '',
    },
    validationSchema: Yup.lazy(() => {
      const message = `This is not ${toCurrency.ticker.toUpperCase()} address`;

      return Yup.object().shape({
        payoutAddress: Yup.string()
          .trim()
          .matches(new RegExp(addressRegEx[toCurrency.ticker].regEx), message)
          .required(message)
          .typeError(message),
      });
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(setPayoutAddress({ payoutAddress: values.payoutAddress }));
      dispatch(incCurrentStep());
    },
  });

  return (
    <>
      <Form onFinish={() => formik.handleSubmit()}>
        <Row justify="center" gutter={[0, 24]}>
          <Col span={24}>
            <Form.Item
              help={
                formik.touched.payoutAddress && formik.errors.payoutAddress
                  ? formik.errors.payoutAddress
                  : 'Recipient Wallet'
              }
              validateStatus={
                formik.touched.payoutAddress && formik.errors.payoutAddress ? 'error' : 'success'
              }
            >
              <Input
                placeholder={`Enter Your ${toCurrency.ticker.toUpperCase()} Address`}
                size="large"
                allowClear
                {...formik.getFieldProps('amountTo')}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <StepButtons
              rightButtonName="Confirm"
              leftButtonName="Back"
              leftButtonOnClick={() => {
                dispatch(decCurrentStep());
              }}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
