import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<h1>SearchPage</h1>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
