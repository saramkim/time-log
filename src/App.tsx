import { Route, Routes } from 'react-router-dom';

import BackButton from 'components/BackButton';

import Navbar from './components/Navbar';
import Table from './components/Table';
import Alarm from './pages/Alarm';
import Clock from './pages/Clock';
import Main from './pages/Main';
import Timer from './pages/Timer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BackButton />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/alarm' element={<Alarm />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/table' element={<Table />} />
        <Route path='/clock' element={<Clock />} />
      </Routes>
    </div>
  );
}

export default App;
