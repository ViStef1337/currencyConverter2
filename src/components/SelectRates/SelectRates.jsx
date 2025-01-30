import { useDispatch } from 'react-redux';
import Select from 'react-select/base';
import options from './symbols.json';
import { selectBaseCurrency } from '../../redux/selectors.js';
export const SelectRates = () => {
  const dispatch = useDispatch();
  const hendleChange = value => {
    console.log(value);
    dispatch(selectBaseCurrency(value.label));
  };
  return (
    <Select
      defaultValue={{ label: baseCurrency, value: baseCurrency }}
      onChange={hendleChange}
      options={options}
    />
  );
};
