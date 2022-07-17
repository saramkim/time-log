import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Table from './components/Table';
import Clock from './pages/Clock';
import Main from './pages/Main';
import Timer from './pages/Timer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/table' element={<Table />} />
        <Route path='/clock' element={<Clock />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
