import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Se você estiver usando um contexto de autenticação

import AdminDashboard from './components/admin/AdminDashboard';
import AdminSidebar from './components/admin/AdminSidebar';
import VendedorDashboard from './components/vendedor/VendedorDashboard';
import VendedorSidebar from './components/vendedor/VendedorSidebar';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

const App = () => {
  return (
    <AuthProvider> {/* Se você estiver usando um contexto de autenticação */}
      <Router>
        <div className="App">
          <Routes>
            {/* Rotas públicas (não autenticadas) */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Rotas para o Admin */}
            <Route path="/admin/*" element={<AdminSidebar />}>
              <Route index element={<AdminDashboard />} />
            </Route>

            {/* Rotas para o Vendedor */}
            <Route path="/vendedor/*" element={<VendedorSidebar />}>
              <Route index element={<VendedorDashboard />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
