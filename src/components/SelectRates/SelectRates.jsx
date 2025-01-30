import { useDispatch } from 'react-redux';
import Select from 'react-select';
import options from './symbols.json';
import { setBaseCurrency } from '../../redux/currencySlice.js';
export const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();
  const hendleChange = value => {
    console.log(value);
    dispatch(setBaseCurrency(value.label));
  };
  return (
    <Select
      defaultValue={{ label: baseCurrency, value: baseCurrency }}
      onChange={hendleChange}
      options={options}
    />
  );
};
