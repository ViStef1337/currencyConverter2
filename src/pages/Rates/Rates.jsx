import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestRates } from '../../redux/operations.js';
import { selectBaseCurrency, selectRates } from '../../redux/selectors.js';
import { RatesList } from '../../components/RatesList/RatesList.jsx';

export const Rates = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, []);
  return <RatesList rates={rates} />;
};
