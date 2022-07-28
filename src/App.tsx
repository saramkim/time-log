import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import BackButton from 'components/BackButton';
import Navbar from 'components/Navbar';
import Today from 'components/Today';
import GlobalStyles from 'global/GlobalStyles';
import { darkTheme, lightTheme } from 'global/theme';
import Alarm from 'pages/Alarm';
import Chart from 'pages/Chart';
import Main from 'pages/Main';
import Report from 'pages/Report';
import Timer from 'pages/Timer';
import { ThemeProvider } from 'styled-components';

import 'App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const date = Today();

  useEffect(() => {
    if (localStorage.getItem(date) === null) {
      localStorage.setItem(date, '');
    }
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <BackButton />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/alarm' element={<Alarm darkMode={darkMode} />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/chart' element={<Chart />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
