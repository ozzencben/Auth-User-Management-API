import { Route, Routes } from 'react-router-dom';

import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import Login from '../pages/login/Login';
import Register from '../pages/register/register';
import ResetPassword from '../pages/reset-password/ResetPassword';
import Home from '../pages/home/Home';

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
    </Routes>
  );
};

export default AppRoute;
