import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path='/Projet8_Portfolio_front' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
