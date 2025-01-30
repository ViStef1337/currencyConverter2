import { useDispatch } from 'react-redux';
import { fetchExchangeCurrency } from '../../redux/operations.js';

export const Form = () => {
  const dispatch = useDispatch();
  const hendleSubmit = e => {
    e.preventDefault();
    const text = e.target.elements.text.value;
    const [amount, from, , to] = text.split(' ');

    dispatch(
      fetchExchangeCurrency({
        amount,
        from,
        to,
      }),
    );

    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit} action="">
      <input
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        placeholder="15 USD in UAH"
        name="text"
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
