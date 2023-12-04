import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './core/auth';
import Admin from './core/admin';
import User from './core/user';

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