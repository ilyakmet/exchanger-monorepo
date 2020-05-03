import React from 'react';

// Types
import { LabelSelectorProps, CurrencySelectionProps } from '../../interfaces';

// Ant Design
import { Form, Input, Button, Select, Typography, Row, Col } from 'antd';

// Formik
import { useFormik } from 'formik';

// Yup
import * as Yup from 'yup';

// Components
import { CurrencyLabel } from '..';

// Redux
import { useSelector } from 'react-redux';
// import { updateCurrencyListSaga } from '../../redux/actions/exchangeForm';
// import { _updateCurrencyListSaga } from '../../redux/types/exchangeForm';
import { selectFromTo, selectdefaultAmounts } from '../../redux/selectors/exchangeForm';

// // SubComponents
const { Option } = Select;
const { Text } = Typography;

export const CurrencySelection: React.FC<CurrencySelectionProps> = ({
  currencyList,
}): React.ReactElement => {
  const { from, to } = useSelector(selectFromTo);
  const defaultAmounts = useSelector(selectdefaultAmounts);
  // const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      amount: defaultAmounts[from.ticker],
      from: from.ticker,
      estimate: 5,
      to: to.ticker,
    },
    validationSchema: Yup.lazy((values: any) => {
      const message = `Minimum amount is ${
        defaultAmounts[values.from]
      } ${values.from.toUpperCase()}`;

      return Yup.object().shape({
        amount: Yup.number()
          .required(message)
          .min(defaultAmounts[values.from], message)
          .typeError(message),
        estimate: Yup.number().required(),
      });
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log({ values });
    },
  });

  const _LabelSelector: React.FC<LabelSelectorProps> = ({
    fieldName,
    defaultTicker,
    currencyList,
  }) => (
    <Select
      style={{ width: '160px' }}
      defaultValue={defaultTicker}
      showSearch
      onChange={(value) => {
        formik.setFieldValue(fieldName, value);
      }}
    >
      {/* {useMemo(
        () =>
          currencyList.map(({ ticker, image }) => (
            <Option key={ticker} value={ticker}>
              <CurrencyLabel ticker={ticker} image={image} />
            </Option>
          )),
        [currencyList],
      )} */}

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
                  id="amount"
                  {...formik.getFieldProps('amount')}
                  addonAfter={_LabelSelector({
                    fieldName: 'from',
                    defaultTicker: from.ticker,
                    currencyList,
                  })}
                  size="large"
                  allowClear
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item help="You Get">
                <Input
                  disabled
                  id="estimate"
                  {...formik.getFieldProps('estimate')}
                  addonAfter={_LabelSelector({
                    fieldName: 'to',
                    defaultTicker: to.ticker,
                    currencyList,
                  })}
                  size="large"
                  allowClear
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row justify="center">
                <Text>{`1 ${formik.values.from.toUpperCase()} ~ 35.861723 ${formik.values.to.toUpperCase()} Expected Rate`}</Text>
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
