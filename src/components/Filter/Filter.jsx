import { useDispatch } from 'react-redux';
import { setCurrency } from '../../redux/filterSlice.jsx';

export const Filter = () => {
  const dispatch = useDispatch();
  const hendleChange = e => {
    dispatch(setCurrency(e.target.value));
  };
  return <input onChange={hendleChange} type="text" />;
};
