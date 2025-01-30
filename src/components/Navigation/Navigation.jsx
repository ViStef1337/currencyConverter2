import { Link } from 'react-router-dom';
import { selectBaseCurrency } from '../../redux/selectors.js';
import { useSelector } from 'react-redux';
import { SelectRates } from '../SelectRates/SelectRates.jsx';

export const Navigation = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="rates">Rates</Link>
          </li>
        </ul>
      </nav>
      <div>
        Your currency is <SelectRates baseCurrency={baseCurrency} />
      </div>
    </header>
  );
};
