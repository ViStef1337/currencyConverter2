import './App.css';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Rates } from './pages/Rates/Rates.jsx';
import { useEffect } from 'react';
import { getUserInfo } from './service/opencage.js';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from './redux/operations.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      dispatch(fetchBaseCurrency(pos.coords));
    }

    function error() {}

    navigator.geolocation.getCurrentPosition(success, error, options);
  });

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rates" element={<Rates />} />
      </Routes>
    </>
  );
}

export default App;
