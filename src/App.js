import logo from './logo.svg';
import './App.css';

import First from './Components/First';
import Navbar from './Components/Navbar';
import Statebasics from './Components/Statebasics';
import Tabless from './Components/Tabless';
import Stbas1 from './Components/Stbas1';
import Table1 from './Components/Table1';
import { Route, Routes } from 'react-router-dom';
import Apiget from './Components/Apiget';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Statebasics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table' element={<Table1/>}/>
        <Route path='/axios' element={<Apiget/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
