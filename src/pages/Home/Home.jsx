import { Form } from '../../components/Form/Form.jsx';
import { ExchangeInfo } from '../../components/ExchangeInfo/ExchangeInfo.jsx';
import { useSelector } from 'react-redux';
import {
  selectExchangeInfo,
  selectIsError,
  selectIsLoading,
} from '../../redux/selectors.js';
import { Loading } from '../../components/Loading/Loading.jsx';
import { Error } from '../../components/Error/Error.jsx';

export const Home = () => {
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const exChangeInfo = useSelector(selectExchangeInfo);
  return (
    <>
      <Form />
      {exChangeInfo && <ExchangeInfo exchangeInfo={exChangeInfo} />}
      {isLoading && <Loading />}
      {isError && <Error />}
    </>
  );
};
