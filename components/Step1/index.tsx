import React, { useEffect } from 'react';

// Types
import { Step1Props } from '../../interfaces';

// Ant Design
import { Row, Col } from 'antd';

// Components
import { RateSelection, CurrencySelection } from '..';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateCurrencyListSaga } from '../../redux/actions/exchangeForm';
import { _updateCurrencyListSaga } from '../../redux/types/exchangeForm';
import { selectCurrencyList } from '../../redux/selectors/exchangeForm';

export const Step1: React.FC<Step1Props> = ({ marginV }) => {
  const currencyList = useSelector(selectCurrencyList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrencyListSaga());
  }, []);

  return (
    <Row justify="center" gutter={[0, marginV]}>
      <Col>
        <RateSelection />
      </Col>

      <Col span={24}>
        <Row justify="center">
          <Col span={20}>
            <CurrencySelection currencyList={currencyList} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
