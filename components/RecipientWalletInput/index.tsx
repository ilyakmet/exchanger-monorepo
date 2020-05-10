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
import { incCurrentStep, decCurrentStep, updateAmountTo } from '../../redux/actions/exchangeForm';
import { selectFromTo } from '../../redux/selectors/exchangeForm';

// Utils
import { addressRegEx } from '../../utils';

export const RecipientWalletInput = (): React.ReactElement => {
  const { to } = useSelector(selectFromTo);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      amountTo: '',
    },
    validationSchema: Yup.lazy(() => {
      const message = `This is not ${to.ticker.toUpperCase()} address`;

      return Yup.object().shape({
        amountTo: Yup.string()
          .trim()
          .matches(new RegExp(addressRegEx[to.ticker].regEx), message)
          .required(message)
          .typeError(message),
      });
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateAmountTo({ newAmountTo: values.amountTo }));
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
                formik.touched.amountTo && formik.errors.amountTo
                  ? formik.errors.amountTo
                  : 'Recipient Wallet'
              }
              validateStatus={
                formik.touched.amountTo && formik.errors.amountTo ? 'error' : 'success'
              }
            >
              <Input
                placeholder={`Enter Your ${to.ticker.toUpperCase()} Addres`}
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
              leftButtonOnClick={() => dispatch(decCurrentStep())}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};
