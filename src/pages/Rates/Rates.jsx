import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestRates } from '../../redux/operations.js';
import {
  selectBaseCurrency,
  selectIsError,
  selectIsLoading,
  selectRates,
  setFilteredRates,
} from '../../redux/selectors.js';
import { RatesList } from '../../components/RatesList/RatesList.jsx';
import { Filter } from '../../components/Filter/Filter.jsx';
import { Loading } from '../../components/Loading/Loading.jsx';
import { Error } from '../../components/Error/Error.jsx';
export const Rates = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  const filteredRates = useSelector(setFilteredRates);
  const lodaing = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);
  return (
    <>
      {lodaing && <Loading />}
      {error && <Error text={error} />}
      {rates.length !== 0 && <Filter />}
      {filteredRates.length !== 0 && <RatesList rates={filteredRates} />}
    </>
  );
};
