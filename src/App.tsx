import { Link, Route, Routes } from 'react-router-dom';

import Clock from './components/Clock';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Timer from './components/Timer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/table' element={<Table />} />
        <Route path='/clock' element={<Clock />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
