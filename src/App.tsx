import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import BackButton from 'components/BackButton';
import GlobalStyles from 'global/GlobalStyles';
import { darkTheme, lightTheme } from 'global/theme';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import Table from './components/Table';
import Alarm from './pages/Alarm';
import Clock from './pages/Clock';
import Main from './pages/Main';
import Timer from './pages/Timer';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
          <Route path='/table' element={<Table />} />
          <Route path='/clock' element={<Clock />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
