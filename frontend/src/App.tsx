import React from 'react';
import NoteList from './components/NoteList';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Signup from './components/Signup';
import './App.css'
import SignIn from './components/Signin';

const App: React.FC = () => {

  const PrivateRoute = () => {
    const token = localStorage.getItem('token');
    const isAuthorized = token ?? false;
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthorized ? <Outlet /> : <Navigate to="/signin" />;
}

  return (
    <div className="py-8">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/' element={<NoteList />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
