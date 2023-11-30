import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './routers/auth';
import Admin from './routers/admin';
import User from './routers/user';

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