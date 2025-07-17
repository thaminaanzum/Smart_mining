import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Diagnostics from './Diagnostics'; 
import Help from './Help';

function App() {
   
  return (
    
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Diagnostics" element={<Diagnostics />} />
      <Route path="/Help" element={<Help />} />
    </Routes>
    
  );
  
  
}
export default App;