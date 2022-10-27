import { useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

import { Routes, Route } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
// import AdminLayout from './components/Layout/Admin';
import { AdminLayout } from './components/Layout';
import { NotFound, PrivateRoute } from './components/Common';
import { useDispatch } from 'react-redux';
import { authActions } from './features/auth/authSlice';
function App() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(authActions.logout());
    };
    return (
        <div className="App">
            <Button variant="contained" color="primary" onClick={handleLogout}>
                Logout
            </Button>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin" element={<PrivateRoute />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;
