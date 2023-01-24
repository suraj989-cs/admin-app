import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        <Route path="/admin" element={<MainLayout/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
