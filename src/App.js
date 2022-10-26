import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import Domov from './routes/Domov';
import Prihlasenie from './routes/Prihlasenie';
import Registracia from './routes/Registracia';
import Ucet from './routes/Ucet';
import axios from 'axios';
import StrankaKrypto from './routes/StrankaKrypto';
import Zahlavie from './components/Zahlavie';
import { AuthContextProvider } from './context/AuthContext';
import PricingPage from './routes/PricingPage';
function App() {
  const [coins, setCoins] = useState([]);

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      // console.log(response.data)
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Domov coins={coins} />} />
          <Route path='/prihlasenie' element={<Prihlasenie />} />
          <Route path='/registracia' element={<Registracia />} />
          <Route path='/ucet' element={<Ucet />} />
          <Route path='/coin/:coinId' element={<StrankaKrypto />}>
          <Route path=':coinId' /> </Route>
          <Route path='/pricing' element={<PricingPage />} />
        </Routes>
        <Zahlavie />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;