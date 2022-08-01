import { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import BackButton from 'components/BackButton';
import Navbar from 'components/Navbar';
import Today from 'components/Today';
import GlobalStyles from 'global/GlobalStyles';
import { darkTheme, lightTheme } from 'global/theme';
import Alarm from 'pages/Alarm';
import Chart from 'pages/Chart';
import DayChart from 'pages/DayChart';
import Main from 'pages/Main';
import MonthChart from 'pages/MonthChart';
import Timer from 'pages/Timer';
import WeekChart from 'pages/WeekChart';
import YearChart from 'pages/YearChart';
import { ThemeProvider } from 'styled-components';

import 'App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const date = Today();

  useEffect(() => {
    if (localStorage.getItem(date) === null) {
      localStorage.setItem(date, '{"코딩":0}');
    }
  }, []);

  return (
    <div className='App'>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <BackButton />

        <Suspense fallback={<div>로딩중</div>}>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/alarm' element={<Alarm darkMode={darkMode} />} />
            <Route path='/timer' element={<Timer />} />
            <Route path='/chart' element={<Chart />}>
              <Route path='day' element={<DayChart />} />
              <Route path='week' element={<WeekChart />} />
              <Route path='month' element={<MonthChart />} />
              <Route path='year' element={<YearChart />} />
            </Route>
            <Route path='*' element={<div>존재하지 않는 페이지입니다.</div>} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
