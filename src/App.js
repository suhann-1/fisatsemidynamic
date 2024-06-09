import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/view' element={<View/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;