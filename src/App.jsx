import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './core/Auth';
import Admin from './core/Admin';
import User from './core/User';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/*' element={<Navigate to='/auth/login' />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/admin/*' element={<Admin />} />
            <Route path='/user/*' element={<User />} />
        </Routes>
    </Router>
  );
};

export default App;